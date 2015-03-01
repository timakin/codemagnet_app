(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';


var Comment = require('../components/comment/comment.jsx');
var Share = require('../components/share/share.jsx');
var Codepost = require('../components/codepost/codepost.jsx');

angular.module('codemagnetAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'react'
])
  .value('Comment', Comment)
  .value('Share', Share)
  .value('Codepost', Codepost)
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })
  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });


},{"../components/codepost/codepost.jsx":2,"../components/comment/comment.jsx":3,"../components/share/share.jsx":4}],2:[function(require,module,exports){
module.exports = React.createClass({displayName: "exports",
    render: function() {
        return (
          React.createElement("h1", null, "yo")
        );
    }
});


},{}],3:[function(require,module,exports){
module.exports = React.createClass({displayName: "exports",

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
                React.createElement("li", {className: "description well"}, 
                  comment.description
                ));
          }.bind(this));
        }

        var commentStyles = "comment " + (!!this.props.isComment===true?'active':'inactive');

        return (
          React.createElement("div", {className: commentStyles}, 
            React.createElement("hr", null), 
            React.createElement("h3", null, "Comment"), 
            React.createElement("textarea", {placeholder: "Please enter a comment...", className: "form-control", rows: "3", type: "text", value: this.state.description, onChange: this.handleChange}), 
            React.createElement("div", {className: "btn btn-info btn-raised", onClick: this.sending}, "Send"), 

            React.createElement("ul", {className: "commentList"}, 
              React.createElement("p", null, commentListView)
            )
          )
        );
    }
});


},{}],4:[function(require,module,exports){
module.exports = React.createClass({displayName: "exports",
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
          React.createElement("div", {className: "shares"}, 
            React.createElement("a", {target: "_blank", href: linkText, target: "_blank", className: "share twitter"}, React.createElement("img", {src: "./assets/images/icons_share_twitter.png", alt: "Twitterでシェア", className: "image"})), 
            React.createElement("a", {target: "_blank", onClick: this.facebookModal, className: "share facebook"}, React.createElement("img", {src: "./assets/images/icons_share_facebook.png", alt: "Facebookでシェア", className: "image"})), 
            React.createElement("a", {target: "_blank", onClick: this.googleModal, className: "share twitter"}, React.createElement("img", {src: "./assets/images/icons_share_google.png", alt: "Google+でシェア", className: "image"}))
          )
      );
    }
});


},{}]},{},[1]);
