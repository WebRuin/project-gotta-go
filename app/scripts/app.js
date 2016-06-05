
var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Timer = require("./ui/Timer"),
    mountNode = document.getElementById("app");

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.bathrooms.map(createItem)}</ul>;
  }
});
var TodoApp = React.createClass({
  getInitialState: function() {
    return {bathrooms: [], pottyName: '', address: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextbathrooms = this.state.bathrooms.concat([this.state.text]);
    var nextText = '';
    this.setState({bathrooms: nextbathrooms, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList bathrooms={this.state.bathrooms} />
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label for='pottyName'>Potty Name</label>
            <input id='pottyName' onChange={this.onChange} value={this.state.text} />
          </fieldset>
          <fieldset>
            <button>{'Add #' + (this.state.bathrooms.length + 1)}</button>
          </fieldset>
        </form>
        <RenderForm />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
});

var RenderForm = React.createClass({
  render: function(){
    return(
      <form action="process_form.php" class="TTWForm" method="post" novalidate="">
        <fieldset>
           <label for="bathroomName">Bathroom Name</label>
           <input type="text" name="bathroomName" id="bathroomName" required="required" />

           <label for="streetAddress">Street Address</label>
           <input type="text" name="streetAddress" id="streetAddress" required="required" />

           <label for="city">City</label>
           <input type="text" name="city" id="city" required="required" />

           <label for="state">State</label>
           <input type="text" name="state" id="state" required="required" />

           <label for="zip">Zip</label>
           <input type="text" name="zip" id="zip" required="required" />
        </fieldset>

        <fieldset>
          <label for="bathroomType">Bathroom Type</label>
            <input type="checkbox" name="bathroomType" id="bathroomType" value="Single - Unisex" />
            <span class="option-title">Single - Unisex</span>
            <br />

            <input type="checkbox" name="bathroomType" id="bathroomType" value="Dual - Male/Female" />
            <span class="option-title">Dual - Male/Female</span>
            <br />

            <input type="checkbox" name="bathroomType" id="bathroomType" value="Handicap" />
            <span class="option-title">Handicap</span>
            <br />
        </fieldset>

        <fieldset>
          <label for="accessibility">Accessibility</label>
            <input type="checkbox" name="accessibility" id="accessibility" value="Do you need a key?" />
            <span class="option-title">Do you need a key?</span>
            <br />

            <input type="checkbox" name="accessibility" id="accessibility" value="Do you need to be a customer?" />
            <span class="option-title">Do you need to be a customer?</span>
            <br />
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    )
  }
});

ReactDOM.render(<TodoApp />, mountNode);
