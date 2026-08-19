import React, { Component, useState } from "react";

// =====================================================
// 1. FUNCTIONAL COMPONENT
// =====================================================

function FunctionalEvents() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // -------------------------------
  // Click Event - Function Reference
  // -------------------------------

  const handleClick = () => {
    alert("Button clicked!");
  };

  // -------------------------------
  // Click Event - Parameter
  // -------------------------------

  const handleGreeting = (userName) => {
    alert("Hello " + userName);
  };

  // -------------------------------
  // Change Event
  // -------------------------------

  const handleChange = (event) => {
    setName(event.target.value);
  };

  // -------------------------------
  // Submit Event
  // -------------------------------

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage("Form submitted successfully!");
  };

  // -------------------------------
  // Focus Event
  // -------------------------------

  const handleFocus = () => {
    console.log("Input is focused");
  };

  // -------------------------------
  // Blur Event
  // -------------------------------

  const handleBlur = () => {
    console.log("Input lost focus");
  };

  return (
    <div>
      <h2>Functional Component Events</h2>

      {/* =================================
          1. CLICK - FUNCTION REFERENCE
         ================================= */}

      <h3>1. Click Event</h3>

      <button onClick={handleClick}>
        Click Me
      </button>

      {/* =================================
          2. CLICK - INLINE EVENT
         ================================= */}

      <h3>2. Inline Event Handling</h3>

      <button
        onClick={() => alert("Inline event clicked!")}
      >
        Inline Click
      </button>

      {/* =================================
          3. PARAMETER PASSING
         ================================= */}

      <h3>3. Passing Parameter</h3>

      <button
        onClick={() => handleGreeting("Ravi")}
      >
        Say Hello
      </button>

      {/* =================================
          4. CHANGE EVENT
         ================================= */}

      <h3>4. Change Event</h3>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <p>Name: {name}</p>

      {/* =================================
          5. FORM SUBMIT
         ================================= */}

      <h3>5. Submit Event</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter something"
        />

        <button type="submit">
          Submit
        </button>
      </form>

      <p>{message}</p>

      {/* =================================
          6. FOCUS EVENT
         ================================= */}

      <h3>6. Focus Event</h3>

      <input
        type="text"
        onFocus={handleFocus}
        placeholder="Click inside this input"
      />

      {/* =================================
          7. BLUR EVENT
         ================================= */}

      <h3>7. Blur Event</h3>

      <input
        type="text"
        onBlur={handleBlur}
        placeholder="Click and then leave"
      />
    </div>
  );
}


// =====================================================
// 2. CLASS COMPONENT
// =====================================================

class ClassEvents extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      text: ""
    };

    // Function binding
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // ---------------------------------
  // Click Event
  // ---------------------------------

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  // ---------------------------------
  // Change Event
  // ---------------------------------

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  // ---------------------------------
  // Submit Event
  // ---------------------------------

  handleSubmit(event) {
    event.preventDefault();

    alert("Class component form submitted!");
  }

  // ---------------------------------
  // Parameter Passing
  // ---------------------------------

  handleGreeting(name) {
    alert("Hello " + name);
  }

  render() {
    return (
      <div>
        <h2>Class Component Events</h2>

        {/* Click */}

        <h3>Click Event</h3>

        <button onClick={this.handleClick}>
          Count: {this.state.count}
        </button>

        {/* Change */}

        <h3>Change Event</h3>

        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Enter text"
        />

        <p>
          Text: {this.state.text}
        </p>

        {/* Parameter */}

        <h3>Passing Parameter</h3>

        <button
          onClick={() => this.handleGreeting("Kiran")}
        >
          Greet Kiran
        </button>

        {/* Submit */}

        <h3>Submit Event</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter email"
          />

          <button type="submit">
            Submit Form
          </button>
        </form>
      </div>
    );
  }
}


// =====================================================
// 3. MAIN APP
// =====================================================

function App() {
  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      <h1>React Event Handling</h1>

      <FunctionalEvents />

      <hr />

      <ClassEvents />

    </div>
  );
}

export default App;