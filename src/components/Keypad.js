import React from 'react';

// Define the Keypad component as a class component
class Keypad extends React.Component {

  // Event handler for the change event
  handleChange = () => {
    console.log('Entering password...'); // Log a message when the input value changes
  };

  // Render method to output the component's UI
  render() {
    return (
      <input
        type="password"       // Define the input type as password
        onChange={this.handleChange} // Attach the change event handler
      />
    );
  }
}

export default Keypad; // Export the component as the default export