/** @jsx React.DOM */

// var request = require('../bower_components/superagent/superagent.js');

var Comment = React.createClass({

    getInitialState: function() {
      return {description: ''};
    },

    handleChange: function(event,data) {
      this.setState({description: event.target.value});
    },

    setComment: function(commentsData, status){
      if(status === "success"){
        this.setState({
          comments: commentsData
        });
      }
    },

    commentsRefresh: function(){
      $.get('/api/comments/' + this.props._id, this.setComment);
      this.setState({
        'description': ''
      });
    },

    componentWillMount: function(){
    },

    componentDidMount: function(){
        this.commentsRefresh();
    },

    sending: function(){
      if(this.state.description.length > 0){
        $.post('/api/comments/', {
            thingId: this.props._id,
            description: this.state.description
          }, this.commentsRefresh);
      }
    },

    render: function() {

        if(this.state.comments){
          var commentListView = this.state.comments.map(function(comment){
            return (
                <li className="description well">
                  {comment.description}
                </li>);
          }.bind(this));
        }

        var commentStyles = "comment " + (!!this.props.isComment===true?'active':'inactive');

        return (
          <div className={commentStyles}>
            <hr />
            <h3>Comment</h3>
            <textarea placeholder="Please enter a comment..." className="form-control" rows="3" type="text" value={this.state.description} onChange={this.handleChange}></textarea>
            <div className="btn btn-primary btn-raised" onClick={this.sending}>Send</div>

            <ul className="commentList">
              {commentListView}
            </ul>
          </div>
        );
    }
});
