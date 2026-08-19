import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";

// ==================================================
// 1. MODAL COMPONENT
// ==================================================

function Modal({ closeModal }) {
  return createPortal(
    <div className="overlay">
      <div className="modal">
        <h2>Modal Example</h2>

        <p>
          This Modal is rendered using React Portal.
        </p>

        <p>
          It is rendered outside the normal App DOM hierarchy.
        </p>

        <button onClick={closeModal}>
          Close Modal
        </button>
      </div>
    </div>,

    document.getElementById("portal-root")
  );
}

// ==================================================
// 2. POPUP COMPONENT
// ==================================================

function Popup({ closePopup }) {
  return createPortal(
    <div className="popup">
      <h3>Popup Example</h3>

      <p>This is a popup created using Portal.</p>

      <button onClick={closePopup}>
        Close
      </button>
    </div>,

    document.getElementById("portal-root")
  );
}

// ==================================================
// 3. TOOLTIP COMPONENT
// ==================================================

function Tooltip({ children }) {
  return createPortal(
    <div className="tooltip">
      {children}
    </div>,

    document.getElementById("portal-root")
  );
}

// ==================================================
// 4. MAIN APP
// ==================================================

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="app">

      <h1>React Portals Examples</h1>

      <p>
        This program demonstrates Modal, Popup and Tooltip
        using ReactDOM.createPortal().
      </p>

      <hr />

      {/* ==========================================
          MODAL
         ========================================== */}

      <h2>1. Modal using Portal</h2>

      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && (
        <Modal
          closeModal={() => setShowModal(false)}
        />
      )}

      <hr />

      {/* ==========================================
          POPUP
         ========================================== */}

      <h2>2. Popup using Portal</h2>

      <button onClick={() => setShowPopup(true)}>
        Open Popup
      </button>

      {showPopup && (
        <Popup
          closePopup={() => setShowPopup(false)}
        />
      )}

      <hr />

      {/* ==========================================
          TOOLTIP
         ========================================== */}

      <h2>3. Tooltip using Portal</h2>

      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        Hover Me
      </button>

      {showTooltip && (
        <Tooltip>
          This is a Tooltip created using React Portal!
        </Tooltip>
      )}

      <hr />

      {/* ==========================================
          REAL WORLD USE CASES
         ========================================== */}

      <h2>4. Real-World Uses of Portals</h2>

      <ul>
        <li>Modal Dialogs</li>
        <li>Popup Menus</li>
        <li>Tooltips</li>
        <li>Dropdown Menus</li>
        <li>Notifications</li>
        <li>Alert Messages</li>
        <li>Loading Screens</li>
        <li>Cookie Consent Dialogs</li>
      </ul>

    </div>
  );
}

export default App;