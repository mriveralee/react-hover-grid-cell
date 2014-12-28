"use strict";

// The Grid Cell Image
// TODO: Add cropping & centering of image
var MRGridCellImage = React.createClass({
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
      <img className={classes} src={this.props.src} />
    );
  },
});

// The Title line
// TODO: Extract general title class for the title and subtitle & pass in class?
var MRGridCellTitle = React.createClass({
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
      <div className={classes}>{this.props.title}</div>
    );
  },
});

// The Subtitle line
var MRGridCellSubtitle = React.createClass({
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
    var cx = React.addons.classSet;
    var classes = cx({
      'mr-project-grid-item-info-slider': true,
      'hovered': this.props.isHovered,
    });
    return (
      <div className={classes}>
        <MRGridCellTitle title={this.props.title} />
        <MRGridCellSubtitle subtitle={this.props.subtitle} />
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
    var cx = React.addons.classSet;
    var classes = cx({
      'mr-project-grid-item ': true,
    });

    return <div
              className={classes}
              onClick={this.handleClick}
              onMouseEnter={this.handleOnMouseEnter}
              onMouseLeave={this.handleOnMouseLeave}>
              <MRGridCellImage src={this.props.imageSrc} />
              <MRGridCellInfoSlider
                title={this.props.title}
                subtitle={this.props.subtitle}
                isHovered={this.state.isHovered} />
            </div>;
  }
});

// Render component
React.render(
  <MRGridCell
    title={"Cool New Project"}
    subtitle={"An Awesome Project Using React"}
    imageSrc={'http://lorempixel.com/300/300/'}
    url={"#click"} />,
  document.getElementById('container'));
