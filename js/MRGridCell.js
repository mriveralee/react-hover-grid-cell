"use strict";

var MRGridCell = React.createClass({
  getDefaultProps: function() {
    return {
      url: '#',
      title: 'Untitled Project',
      subtitle: 'Coming Soon',
    };
  },
  getInitialState: function() {
    return {
      isHovered: false,
    };
  },
  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'mr-project-grid-item ': true,
    });

    var hoverClasses = cx({
      'mr-project-grid-item-hover-overlay': this.state.isHovered,
    });

    return <div
              className={classes}
              onClick={this.handleClick}
              onMouseEnter={this.handleOnMouseEnter}
              onMouseLeave={this.handleOnMouseLeave}>
             <p>{this.props.title} - {this.props.subtitle}</p>
             <div className={hoverClasses}> Test Test </div>
           </div>;
  },
  handleOnMouseEnter: function(e) {
    this.setState({
      isHovered: true,
    });
    e.stopPropagation();
  },
  handleOnMouseLeave: function(e) {
    this.setState({
      isHovered: false,
    });
    e.stopPropagation();
  },
  handleClick: function(e) {
    location.href = this.props.url;
    e.stopPropagation();
  }
});

// Render component
React.render(
  <MRGridCell
    title={"Phase Change"}
    subtitle={"Collaborative Sound Creation"}
    url={"#click"} />,
  document.getElementById('container'));
