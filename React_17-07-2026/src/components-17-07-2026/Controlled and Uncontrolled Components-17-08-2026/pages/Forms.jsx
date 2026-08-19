import React from "react";

class Forms extends React.Component {

  constructor(props) {
    super(props);

    // Controlled Component state
    this.state = {
      name: "",
      email: ""
    };

    // Uncontrolled Component ref
    this.nameRef = React.createRef();
  }

  // Controlled input
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  };

  // Controlled Form
  handleControlledSubmit = (event) => {
    event.preventDefault();

    alert(
      "Controlled Form\n" +
      "Name: " + this.state.name +
      "\nEmail: " + this.state.email
    );
  };

  // Uncontrolled Form
  handleUncontrolledSubmit = (event) => {
    event.preventDefault();

    const name =
      this.nameRef.current.value;

    alert(
      "Uncontrolled Form\n" +
      "Name: " + name
    );
  };

  render() {
    return (
      <div>

        {/* ========================= */}
        {/* CONTROLLED COMPONENT */}
        {/* ========================= */}

        <h2>Controlled Component</h2>

        <form
          onSubmit={this.handleControlledSubmit}
        >

          <input
            type="text"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />

          <br /><br />

          <input
            type="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />

          <br /><br />

          <button type="submit">
            Submit Controlled
          </button>

        </form>

        <p>
          Name: {this.state.name}
        </p>

        <p>
          Email: {this.state.email}
        </p>


        <hr />


        {/* ========================= */}
        {/* UNCONTROLLED COMPONENT */}
        {/* ========================= */}

        <h2>Uncontrolled Component</h2>

        <form
          onSubmit={this.handleUncontrolledSubmit}
        >

          <input
            type="text"
            placeholder="Enter Name"
            ref={this.nameRef}
          />

          <br /><br />

          <button type="submit">
            Submit Uncontrolled
          </button>

        </form>

      </div>
    );
  }
}

export default Forms;