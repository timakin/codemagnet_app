/** @jsx React.DOM */

var Share = React.createClass({

    getInitialState: function() {
    },
    handleChange: function(event,data) {
    },
    componentWillMount: function(){
    },
    componentDidMount: function(){
    },

    render: function() {

        return (
          <div className="share">
            <div className="twitter">
              <a href="https://twitter.com/share" className="twitter-share-button" data-url={this.props.link} data-text={this.props.text} data-via="codemagnet" data-hashtags="codemagnet">Tweet</a>
              <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
            </div>
          </div>
        );
    }
});
