"use strict";

var cx = React.addons.classSet;

// The Grid Modal Hover View
var MRGridCellModalHoverView = React.createClass({displayName: 'MRGridCellModalHoverView',
  propTypes: {
    isVisible: React.PropTypes.bool.isRequired,
  },
  getDefaultProps: function() {
    return {
      isVisible: false,
    };
  },
  render: function() {
    var classes = cx({
      'mr-project-grid-item-modal-hover-view': true,
      'hovered': this.props.isVisible,
    });
    return (
      React.createElement("div", {className: classes}, 
        this.props.children
      )
    );
  },
});

// The Grid Cell Image
var MRGridCellImage = React.createClass({displayName: 'MRGridCellImage',
  propTypes: {
    imageSrc: React.PropTypes.string.isRequired,
  },
  getDefaultProps: function() {
    return {
      isHovered: false,
    };
  },
  render: function() {
    var classes = cx({
      'mr-project-grid-item-image': true,
      'hovered': this.props.isHovered,
    });
    return (
      React.createElement(MRGridCellModalHoverView, {isVisible: this.props.isHovered}, 
        React.createElement("img", {className: classes, src: this.props.imageSrc})
      )
    );
  },
});

// The Title line
// TODO: Extract general title class for the title and subtitle & pass in class?
var MRGridCellTitle = React.createClass({displayName: 'MRGridCellTitle',
  getDefaultProps: function() {
    return {
      title: '',
      shouldTruncate: false,
    }
  },
  render: function() {
    var classes = cx({
      'mr-project-grid-item-text-truncation': this.props.shouldTruncate,
      'mr-project-grid-item-title': true,
    });
    return (
      React.createElement("div", {className: classes}, this.props.title)
    );
  },
});

// The Subtitle line
var MRGridCellSubtitle = React.createClass({displayName: 'MRGridCellSubtitle',
  getDefaultProps: function() {
    return {
      subtitle: '',
      shouldTruncate: false,
    };
  },
  render: function() {
    var classes = cx({
      'mr-project-grid-item-text-truncation': this.props.shouldTruncate,
      'mr-project-grid-item-subtitle' : true,
    });

    return (
      React.createElement("div", {className: classes}, this.props.subtitle)
    );
  },
});

// Information slider -- include background title, subtitle
var MRGridCellInfoSlider = React.createClass({displayName: 'MRGridCellInfoSlider',
  getDefaultProps: function() {
    return {
      title: '',
      subtitle: '',
      bgColor: '',
      isHovered: false,
    };
  },
  render: function() {
    var classes = cx({
      'mr-project-grid-item-info-slider': true,
      'hovered': this.props.isHovered,
    });
    return (
      React.createElement("div", {className: classes}, 
        React.createElement(MRGridCellTitle, {
          title: this.props.title, 
          shouldTruncate: true}), 
        React.createElement(MRGridCellSubtitle, {
          subtitle: this.props.subtitle, 
          shouldTruncate: true})
      )
    );
  },
});

// The Grid Cell - containing an image and information slider
var MRGridCell = React.createClass({displayName: 'MRGridCell',
  getDefaultProps: function() {
    return {
      url: '#',
      image: '',
      title: 'Untitled Project',
      subtitle: 'Coming Soon',
    };
  },
  getInitialState: function() {
    return {
      isHovered: false,
    };
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
  },
  render: function() {
    var classes = cx({
      'mr-project-grid-item ': true,
    });
    var isHovered = this.state.isHovered;
    return (
      React.createElement("div", {
        className: classes, 
        onClick: this.handleClick, 
        onMouseEnter: this.handleOnMouseEnter, 
        onMouseLeave: this.handleOnMouseLeave}, 
        React.createElement(MRGridCellImage, {
          imageSrc: this.props.imageSrc, 
          isHovered: isHovered}), 
        React.createElement(MRGridCellInfoSlider, {
          title: this.props.title, 
          subtitle: this.props.subtitle, 
          isHovered: isHovered})
      )
    );
  }
});

// Render component
React.render(
  React.createElement(MRGridCell, {
    title: "Cool New Project", 
    subtitle: "An Awesome Project Using React", 
    imageSrc: 'http://lorempixel.com/400/200/', 
    url: "#click"}),
  document.getElementById('container'));
