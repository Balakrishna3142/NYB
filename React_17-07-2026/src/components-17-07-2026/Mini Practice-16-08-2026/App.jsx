import React, { useState } from "react";
import { createPortal } from "react-dom";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Open Modal
  const openModal = () => {
    setShowModal(true);
  };

  // Close Modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Change Event
  const handleChange = (e) => {
    setName(e.target.value);
  };

  // Focus Event
  const handleFocus = () => {
    console.log("Input focused");
  };

  // Blur Event
  const handleBlur = () => {
    console.log("Input lost focus");
  };

  // Submit Event
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Hello " + name + "!");
  };

  return (
    <div>
      <h1>React Portal Modal</h1>

      <button onClick={openModal}>
        Open Modal
      </button>

      {showModal &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "10px"
              }}
            >
              <h2>Modal Popup</h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />

                <br /><br />

                <button type="submit">
                  Submit
                </button>

                <button
                  type="button"
                  onClick={closeModal}
                >
                  Close
                </button>
              </form>

              <p>{message}</p>
            </div>
          </div>,

          document.getElementById("portal-root")
        )}
    </div>
  );
}

export default App;