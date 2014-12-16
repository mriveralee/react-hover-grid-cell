"use strict";
var MRGridCell = React.createClass({displayName: 'MRGridCell',
  getDefaultProps: function() {
    return {
      url: '#',
      title: 'Untitled Project',
      subtitle: 'Coming Soon',
      isHovered: false,
    }
  },
  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'mr-project-grid-item': true,
      'hover-modal': this.props.isHovered,
    });
    
    return React.createElement("div", {
              class: classes, 
              onClick: this.handleClick, 
              onMouseEnter: this.handleOnMouseEnter, 
              onMouseLeave: this.handleOnMouseLeave}, 
             React.createElement("p", null, this.props.title, " - ", this.props.subtitle)
           );
  },
  handleOnMouseEnter: function(e) {
    this.props.isHovered = true;
    e.stopPropagation();
  },
  handleOnMouseLeave: function(e) {
    this.props.isHovered = false;
    e.stopPropagation();
  },
  handleClick: function(e) {
    location.href = this.props.url;
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
