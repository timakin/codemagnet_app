/** @jsx React.DOM */

// var request = require('../bower_components/superagent/superagent.js');

var Comment = React.createClass({

    getInitialState: function() {
      return {description: ''};
    },

    handleChange: function(event,data) {
      this.setState({description: event.target.value});
    },

    componentDidMount: function(){
        console.log($);
    },

    sending: function(){
      $.post('/api/comments/',
        {
          thingId: this.props._id,
          description: this.state.description
        },function(err,res){
          console.log(err,res);
        });
    },

    render: function() {
        return (
            <div className="comment">
              <textarea type="text"  value={this.state.description} onChange={this.handleChange}></textarea>
              <div class="button" onClick={this.sending}>送信</div>
            </div>
        );
    }
});
