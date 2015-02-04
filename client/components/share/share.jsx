/** @jsx React.DOM */

var Share = React.createClass({

    getInitialState: function() {
      return{
          title:'',
          text:''
        }
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
              Twit
            </div>
            <div className="facebook">
              FbShare
            </div>
          </div>
        );
    }
});
