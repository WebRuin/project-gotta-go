var React = window.React = require('react'),
    jsonfile = require('jsonfile');


var StoreFormData = React.createClass({
  var file = '../formData.json'
  var obj = this.props.data

  jsonfile.writeFile(file, obj, {spaces: 2}, function(err) {
    console.error(err)
  })
})

module.exports = StoreFormData;
