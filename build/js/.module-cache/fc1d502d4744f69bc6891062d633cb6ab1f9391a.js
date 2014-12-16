"use strict";

var MRGridCell = React.createClass({displayName: 'MRGridCell',
  getDefaultProps: function() {
    return {
      url: '#',
      title: 'Untitled Project',
      subtitle: '',
    }
  },
  render: function() {
    return React.createElement("div", {
              onClick: this.handleClick, 
              onMouseEnter: this.handleOnMouseEnter, 
              onMouseLeave: this.handleOnMouseLeave}, 
             React.createElement("p", null, this.props.title, " - ", this.props.subtitle)
           );
  },
  handleOnMouseEnter: function(e) {
    console.log("enter--:" + e);

  },
  handleOnMouseLeave: function(e) {
    console.log("leave--:" + e);
  },
  handleClick: function(e) {
    console.log("click");
    location.href = this.props.url + Math.random();
  }
});
