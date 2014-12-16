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
  onMouseEnter: function(e) {
    console.log("enter--:" + e);
    e.stopPropagation();
  },
  handleOnMouseLeave: function(e) {
    console.log("leave--:" + e);
    e.stopPropagation();
  },
  handleClick: function(e) {
    console.log("click");
    location.href = this.props.url + Math.random();
    e.stopPropagation();
  }
});

// Render component
React.render(
  React.createElement(MRGridCell, {
    title: "Phase Change", 
    subtitle: "Collaborative Sound Creation", 
    url: "#click"}),
  document.getElementById('container'));
