var React = window.React = require('react');

var RenderMap = React.createClass({

  onScriptLoaded: function() {
      // Render a map with the center point given by the component's lat and lng
      // properties.
      var center = new google.maps.LatLng(this.props.lat, this.props.lng);
      var mapOptions = {
          zoom: 12,
          center: center,
          disableDefaultUI: true,
          draggable: false,
          zoomControl: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
        };
      var map = new google.maps.Map(this.getDOMNode(), mapOptions);
  },
  onScriptError: function() {
      // Show the user an error message.
  },
  render: function() {
      return <div className="mapCanvas"/>;
  },
});

module.exports = RenderMap;
