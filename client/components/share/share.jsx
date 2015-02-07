/** @jsx React.DOM */

var Share = React.createClass({

    handleChange: function(event,data) {
    },
    componentWillMount: function(){
    },
    componentDidMount: function(){
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
    },

    render: function() {

      var linkText = "http://twitter.com/intent/tweet?text=" + encodeURIComponent(this.props.name) + " http://codemg.net/ #codemagnet";

        return (
          <div className="share">
            <div className="twitter">
              <a href={linkText} target="new" class="twitter-share-button">Tweet</a>
            </div>
          </div>
        );
    }
});
