var React = window.React = require('react'),
    NewBathroomLocation = require('./NewBathroomLocation.js'),
    AddBathroomLocationForm = require('./AddBathRoomLocationForm.js');

var RenderMapForm = React.createClass({

  getInitialState: function() {
    return {
      bathroomLocation: {}
    }
  },

  addBathroomLocation: function(bathroomLocationData) {

    var timeStamp = (new Date()).getTime();

    this.state.bathroomLocation['bathroomLocation-id' + timeStamp] = bathroomLocationData;
    this.setState({
      BathroomLocation: this.state.bathroomLocation
    });
  },

  renderBathroomLocation: function() {
    return (
      //Plot stuff on a map
      <div></div>
    )
  },

  render: function() {
    return (
	    <div className="row medium-8 large-7 columns">

	      <ol className="bathroomLocation-list block-bathroomLocations">
            {
              Object
                .keys(this.state.bathroomLocation)
                 // Creating a NEW array
                .map(this.renderBathroomLocation)
            }
	      </ol>

	      <AddBathroomLocationForm addBathroomLocation={this.addBathroomLocation}/>

        <pre>{JSON.stringify(this.state, null, 2)}</pre>

	    </div>
    )
  }
});

module.exports = RenderMapForm;
