"use strict";

// The Grid Cell Image
// TODO: Add cropping of image
var MRGridCellImage = React.createClass({displayName: 'MRGridCellImage',
  getDefaultProps: function() {
    return {
      src: '',
    };
  },
  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'mr-project-grid-item-image': true,
      'hidden': (!this.props.src || this.props.src.length == 0),
    });
    return (
      React.createElement("img", {className: classes, src: this.props.src})
    );
  },
});

// The Title line
var MRGridCellTitle = React.createClass({displayName: 'MRGridCellTitle',
  getDefaultProps: function() {
    return {
      title: '',
    }
  },
  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'mr-project-grid-item-text': true,
      'mr-project-grid-item-text-truncation': true,
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
    };
  },
  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'mr-project-grid-item-text': true,
      'mr-project-grid-item-text-truncation': true,
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
    var cx = React.addons.classSet;
    var classes = cx({
      'mr-project-grid-item-info-slider': true,
      'hovered': this.props.isHovered,
    });
    return (
      React.createElement("div", {className: classes}, 
        React.createElement(MRGridCellTitle, {title: this.props.title}), 
        React.createElement(MRGridCellSubtitle, {subtitle: this.props.subtitle})
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
    var cx = React.addons.classSet;
    var classes = cx({
      'mr-project-grid-item ': true,
    });

    return React.createElement("div", {
              className: classes, 
              onClick: this.handleClick, 
              onMouseEnter: this.handleOnMouseEnter, 
              onMouseLeave: this.handleOnMouseLeave}, 
              React.createElement(MRGridCellImage, {src: this.props.imageSrc}), 
              React.createElement(MRGridCellInfoSlider, {
                title: this.props.title, 
                subtitle: this.props.subtitle, 
                isHovered: this.state.isHovered})
            );
  }
});

// Render component
React.render(
  React.createElement(MRGridCell, {
    title: "Cool New Project", 
    subtitle: "An Awesome Project Using React", 
    imageSrc: 'http://lorempixel.com/300/300/', 
    url: "#click"}),
  document.getElementById('container'));
