"use strict";

var MRGridCell = React.createClass({displayName: 'MRGridCell',
  render: function() {
    return React.createElement("a", {href: this.props.url}, 
             React.createElement("p", null, this.props.title, " - ", this.props.subtitle)
           );
  },
  onMouseEnter: function(e) {
    console.log("enter--:" + e);

  },
  onMouseLeave: function(e) {
    console.log("leave--:" + e);
  }
});

// Render component
  React.render(
    React.createElement(MRGridCell, {title: "Phase Change", subtitle: "Collaborative Sound Creation", url: "#click"}),
    document.getElementById('container')
  );
