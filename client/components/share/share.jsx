module.exports = React.createClass({
    handleChange: function(event,data) {
    },
    componentWillMount: function(){
    },
    componentDidMount: function(){
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
    },
    googleModal: function(){
      window.open("https://plus.google.com/share?url=http://codemg.net", 'Gwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes'); return false;
    },
    facebookModal: function(){
      window.open("http://www.facebook.com/share.php?u=http://codemg.net", 'FBwindow', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes'); return false;

    },
    render: function() {
      var linkText = "http://twitter.com/intent/tweet?text=" +
                      encodeURIComponent(this.props.name) +
                     " http://codemg.net/";
        return (
          <div className="shares">
            <a target="_blank" href={linkText} target="_blank" className="share twitter"><img src="./assets/images/icons_share_twitter.png" alt="Twitterでシェア" className="image" /></a>
            <a target="_blank" onClick={this.facebookModal} className="share facebook"><img src="./assets/images/icons_share_facebook.png" alt="Facebookでシェア"  className="image" /></a>
            <a target="_blank" onClick={this.googleModal} className="share twitter"><img src="./assets/images/icons_share_google.png" alt="Google+でシェア"  className="image" /></a>
          </div>
      );
    }
});
