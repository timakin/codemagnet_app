/** @jsx React.DOM */

// var request = require('../bower_components/superagent/superagent.js');

var Comment = React.createClass({

    getInitialState: function() {
      return {description: ''};
    },

    handleChange: function(event,data) {
      this.setState({description: event.target.value});
    },

    setComment: function(data, status){
      if(status === "success"){
        this.setState({
          comments: data
        });
      }
    },

    commentsRefresh: function(){
      $.get('/api/comments/' + this.props._id, this.setComment);
      this.setState({
        'description': ''
      });
    },

    componentDidMount: function(){
      this.commentsRefresh();
    },

    sending: function(){
      $.post('/api/comments/', {
          thingId: this.props._id,
          description: this.state.description
        }, this.commentsRefresh);
    },

    render: function() {

        if(this.state.comments){
          var commentListView = this.state.comments.map(function(comment){
            return (<div className="description">
                      {comment.description}
                    </div>);
          }.bind(this));
        }

        return (
            <div className="comment">
              <div className="commentList">
                {commentListView}
              </div>
              <textarea type="text"  value={this.state.description} onChange={this.handleChange}></textarea>
              <div class="button" onClick={this.sending}>送信</div>
            </div>
        );
    }
});
