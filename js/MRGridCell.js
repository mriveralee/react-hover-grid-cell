"use strict";

var cx = React.addons.classSet;

// The Grid Modal Hover View
var MRGridCellModalHoverView = React.createClass({
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
      <div className={classes}>
        {this.props.children}
      </div>
    );
  },
});

// The Grid Cell Image
var MRGridCellImage = React.createClass({
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
      <MRGridCellModalHoverView isVisible={this.props.isHovered}>
        <img className={classes} src={this.props.imageSrc} />
      </MRGridCellModalHoverView>
    );
  },
});

// The Title line
// TODO: Extract general title class for the title and subtitle & pass in class?
var MRGridCellTitle = React.createClass({
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
      <div className={classes}>{this.props.title}</div>
    );
  },
});

// The Subtitle line
var MRGridCellSubtitle = React.createClass({
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
      <div className={classes}>{this.props.subtitle}</div>
    );
  },
});

// Information slider -- include background title, subtitle
var MRGridCellInfoSlider = React.createClass({
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
      <div className={classes}>
        <MRGridCellTitle
          title={this.props.title}
          shouldTruncate={true} />
        <MRGridCellSubtitle
          subtitle={this.props.subtitle}
          shouldTruncate={true}  />
      </div>
    );
  },
});

// The Grid Cell - containing an image and information slider
var MRGridCell = React.createClass({
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
      <div
        className={classes}
        onClick={this.handleClick}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}>
        <MRGridCellImage
          imageSrc={this.props.imageSrc}
          isHovered={isHovered} />
        <MRGridCellInfoSlider
          title={this.props.title}
          subtitle={this.props.subtitle}
          isHovered={isHovered} />
      </div>
    );
  }
});

// Render component
React.render(
  <MRGridCell
    title={"Cool New Project"}
    subtitle={"An Awesome Project Using React"}
    imageSrc={'http://lorempixel.com/400/200/'}
    url={"#click"} />,
  document.getElementById('container'));
