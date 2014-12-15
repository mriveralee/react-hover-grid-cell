"use strict";

var MRGridCell = React.createClass({displayName: 'MRGridCell',
  render: function() {
    return React.createElement("a", {href: this.props.url}, 
             React.createElement("p", null, this.props.title, " - ", this.props.subtitle)
           );
  }
});


//
  React.render(
    React.createElement(MRGridCell, {title: "Phase Change", subtitle: "Collaborative Sound Creation", url: "#click"}),
    document.getElementById('container')
  );
