"use strict";

var MRGridCell = React.createClass({
  render: function() {
    return <a href={this.props.url}>
             <p>{this.props.title} - {this.props.subtitle}</p>
           </a>;
  }
});


//
  React.render(
    <MRGridCell title={"Phase Change"} subtitle={"Collaborative Sound Creation"} url={"#click"} />,
    document.getElementById('container')
  );
