
var React = window.React = require('react'),
    ReactDOM = require('react-dom'),
    mountNode = document.getElementById('app'),
    RenderMapForm = require('./Map/MapForm.js');

var GottaGo = React.createClass({
  render: function() {
    return (
      <div>
        <RenderMapForm />
      </div>
    );
  }
});

ReactDOM.render(<GottaGo />, mountNode);
