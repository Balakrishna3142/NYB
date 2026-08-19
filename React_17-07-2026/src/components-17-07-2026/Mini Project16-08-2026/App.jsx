import React, {
  Fragment,
  PureComponent,
  memo,
  lazy,
  Suspense,
  useState,
  useMemo,
  useCallback
} from "react";

import { createPortal } from "react-dom";


// ======================================================
// 1. CUSTOM HOOK
// ======================================================

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount(count + 1);
  };

  return { count, increase };
}


// ======================================================
// 2. HIGHER ORDER COMPONENT (HOC)
// ======================================================

function withTitle(Component) {
  return function EnhancedComponent(props) {
    return (
      <div>
        <h2>Higher Order Component</h2>
        <Component {...props} />
      </div>
    );
  };
}

function UserInfo({ name }) {
  return (
    <p>
      User Name: {name}
    </p>
  );
}

const EnhancedUserInfo = withTitle(UserInfo);


// ======================================================
// 3. PURE COMPONENT
// ======================================================

class MyPureComponent extends PureComponent {
  render() {
    console.log("Pure Component Rendered");

    return (
      <div>
        <h2>Pure Component</h2>

        <p>
          Count: {this.props.count}
        </p>
      </div>
    );
  }
}


// ======================================================
// 4. REACT.MEMO()
// ======================================================

const MemoComponent = memo(function MemoComponent({
  name
}) {
  console.log("React.memo Component Rendered");

  return (
    <div>
      <h2>React.memo()</h2>

      <p>
        Name: {name}
      </p>
    </div>
  );
});


// ======================================================
// 5. LAZY LOADING
// ======================================================

const LazyComponent = lazy(() =>
  Promise.resolve({
    default: function LazyComponent() {
      return (
        <div>
          <h2>Lazy Loaded Component</h2>

          <p>
            This component is loaded using React.lazy().
          </p>
        </div>
      );
    }
  })
);


// ======================================================
// 6. MODAL USING REACT PORTAL
// ======================================================

function Modal({ closeModal }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
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

        <h2>React Portal Modal</h2>

        <p>
          This Modal is rendered using createPortal().
        </p>

        <button onClick={closeModal}>
          Close
        </button>

      </div>

    </div>,

    document.body
  );
}


// ======================================================
// 7. MAIN APP
// ======================================================

function App() {

  // ----------------------------------------------------
  // STATE DESTRUCTURING
  // ----------------------------------------------------

  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showLazy, setShowLazy] = useState(false);

  // Custom Hook
  const { count, increase } = useCounter(0);


  // ----------------------------------------------------
  // LIST DATA
  // ----------------------------------------------------

  const students = [
    {
      id: 1,
      name: "Ravi",
      marks: 85
    },
    {
      id: 2,
      name: "Kiran",
      marks: 65
    },
    {
      id: 3,
      name: "Sita",
      marks: 40
    }
  ];


  // ----------------------------------------------------
  // useMemo()
  // ----------------------------------------------------

  const totalMarks = useMemo(() => {

    console.log("Calculating total marks...");

    return students.reduce(
      (total, student) =>
        total + student.marks,
      0
    );

  }, []);


  // ----------------------------------------------------
  // useCallback()
  // ----------------------------------------------------

  const handleMessage = useCallback(() => {

    alert("Memoized function called!");

  }, []);


  // ----------------------------------------------------
  // EVENT BINDING
  // ----------------------------------------------------

  const handleChange = (event) => {
    setName(event.target.value);
  };


  const handleSubmit = (event) => {

    event.preventDefault();

    alert("Hello " + name);

  };


  const handleFocus = () => {
    console.log("Input focused");
  };


  const handleBlur = () => {
    console.log("Input lost focus");
  };


  // ----------------------------------------------------
  // FRAGMENT
  // ----------------------------------------------------

  return (
    <Fragment>

      <div
        style={{
          padding: "30px",
          fontFamily: "Arial"
        }}
      >

        <h1>
          React Final Mini Project
        </h1>

        <p>
          All React Concepts in One Application
        </p>

        <hr />


        {/* =================================================
            1. FRAGMENTS
           ================================================= */}

        <h2>1. Fragments</h2>

        <Fragment>
          <p>First element inside Fragment</p>
          <p>Second element inside Fragment</p>
        </Fragment>


        <hr />


        {/* =================================================
            2. HIGHER ORDER COMPONENT
           ================================================= */}

        <EnhancedUserInfo
          name="Ravi"
        />


        <hr />


        {/* =================================================
            3. CUSTOM HOOK
           ================================================= */}

        <h2>Custom Hook</h2>

        <p>
          Count: {count}
        </p>

        <button onClick={increase}>
          Increase Count
        </button>


        <hr />


        {/* =================================================
            4. PURE COMPONENT
           ================================================= */}

        <MyPureComponent
          count={count}
        />


        <hr />


        {/* =================================================
            5. REACT.MEMO()
           ================================================= */}

        <MemoComponent
          name="Kiran"
        />

        <button onClick={handleMessage}>
          Call Memoized Function
        </button>


        <hr />


        {/* =================================================
            6. useMemo()
           ================================================= */}

        <h2>useMemo()</h2>

        <p>
          Total Marks: {totalMarks}
        </p>

        <p>
          useMemo prevents unnecessary recalculation.
        </p>


        <hr />


        {/* =================================================
            7. useCallback()
           ================================================= */}

        <h2>useCallback()</h2>

        <button onClick={handleMessage}>
          useCallback Button
        </button>

        <p>
          Function is memoized using useCallback().
        </p>


        <hr />


        {/* =================================================
            8. EVENT BINDING
           ================================================= */}

        <h2>Event Binding</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <button type="submit">
            Submit
          </button>

        </form>

        <p>
          Name: {name}
        </p>


        <hr />


        {/* =================================================
            9. LIST RENDERING
           ================================================= */}

        <h2>List Rendering</h2>

        <ul>

          {students.map(
            ({ id, name, marks }) => (

              <li key={id}>

                {name} - {marks} Marks -

                {marks >= 50
                  ? " Pass"
                  : " Fail"}

              </li>

            )
          )}

        </ul>


        <hr />


        {/* =================================================
            10. DESTRUCTURING
           ================================================= */}

        <h2>Destructuring</h2>

        <p>
          Object destructuring is used in
          the list above.
        </p>

        <p>
          Example:
        </p>

        <code>
          {"{ id, name, marks }"}
        </code>

        <p>
          State destructuring:
        </p>

        <code>
          {"const [name, setName] = useState('')"}
        </code>


        <hr />


        {/* =================================================
            11. REACT PORTAL
           ================================================= */}

        <h2>React Portal</h2>

        <button
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>


        {showModal && (

          <Modal
            closeModal={() =>
              setShowModal(false)
            }
          />

        )}


        <hr />


        {/* =================================================
            12. LAZY LOADING
           ================================================= */}

        <h2>Lazy Loading</h2>

        <button
          onClick={() => setShowLazy(true)}
        >
          Load Lazy Component
        </button>


        {showLazy && (

          <Suspense
            fallback={
              <h3>
                Loading...
              </h3>
            }
          >

            <LazyComponent />

          </Suspense>

        )}


        <hr />


        {/* =================================================
            FINAL SUMMARY
           ================================================= */}

        <h2>
          Concepts Demonstrated
        </h2>

        <ul>

          <li>Fragments</li>

          <li>Higher Order Components</li>

          <li>Custom Hooks</li>

          <li>Pure Components</li>

          <li>React.memo()</li>

          <li>useMemo()</li>

          <li>useCallback()</li>

          <li>React Portals</li>

          <li>Event Binding</li>

          <li>List Rendering</li>

          <li>Destructuring</li>

          <li>React.lazy()</li>

          <li>Suspense</li>

        </ul>

      </div>

    </Fragment>
  );
}

export default App;