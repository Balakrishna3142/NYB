import React, {
  lazy,
  Suspense,
  useState
} from "react";


// ==================================================
// 1. NORMAL IMPORT EXAMPLE
// ==================================================

// Normal component
function NormalComponent() {
  return (
    <div>
      <h3>Normal Component</h3>
      <p>
        This component is loaded immediately
        when the application starts.
      </p>
    </div>
  );
}


// ==================================================
// 2. LAZY LOADED COMPONENT
// ==================================================

const LazyComponent = lazy(() =>
  Promise.resolve({
    default: function LazyComponent() {
      return (
        <div>
          <h3>Lazy Component</h3>

          <p>
            This component is loaded only when
            it is required.
          </p>
        </div>
      );
    }
  })
);


// ==================================================
// 3. LAZY LOADED PAGE
// ==================================================

const LazyPage = lazy(() =>
  Promise.resolve({
    default: function LazyPage() {
      return (
        <div>
          <h2>Lazy Loaded Page</h2>

          <p>
            This page was loaded using React.lazy().
          </p>

          <p>
            In a real application, this page can
            be stored in a separate file.
          </p>
        </div>
      );
    }
  })
);


// ==================================================
// 4. LOADING COMPONENT
// ==================================================

function Loading() {
  return (
    <div>
      <h3>Loading...</h3>

      <p>
        Please wait, lazy component is loading.
      </p>
    </div>
  );
}


// ==================================================
// 5. MAIN APP
// ==================================================

function App() {

  const [showLazy, setShowLazy] = useState(false);
  const [showPage, setShowPage] = useState(false);

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial"
      }}
    >

      <h1>React Lazy Loading Example</h1>

      <p>
        Lazy Loading loads components only when
        they are needed.
      </p>

      <hr />


      {/* =========================================
          1. NORMAL IMPORT
         ========================================= */}

      <h2>1. Normal Import</h2>

      <NormalComponent />

      <p>
        Normal components are loaded immediately.
      </p>


      <hr />


      {/* =========================================
          2. LAZY COMPONENT
         ========================================= */}

      <h2>2. Lazy Loaded Component</h2>

      <button
        onClick={() => setShowLazy(true)}
      >
        Load Lazy Component
      </button>

      {showLazy && (

        <Suspense fallback={<Loading />}>

          <LazyComponent />

        </Suspense>

      )}


      <hr />


      {/* =========================================
          3. LAZY LOADED PAGE
         ========================================= */}

      <h2>3. Lazy Loaded Page</h2>

      <button
        onClick={() => setShowPage(true)}
      >
        Open Lazy Page
      </button>

      {showPage && (

        <Suspense fallback={<Loading />}>

          <LazyPage />

        </Suspense>

      )}


      <hr />


      {/* =========================================
          4. PERFORMANCE COMPARISON
         ========================================= */}

      <h2>4. Performance Comparison</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Normal Import</th>
            <th>Lazy Loading</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>
              Loads immediately
            </td>

            <td>
              Loads when required
            </td>
          </tr>

          <tr>
            <td>
              Larger initial bundle
            </td>

            <td>
              Smaller initial bundle
            </td>
          </tr>

          <tr>
            <td>
              More initial loading
            </td>

            <td>
              Faster initial loading
            </td>
          </tr>

          <tr>
            <td>
              Suitable for small components
            </td>

            <td>
              Suitable for large pages/components
            </td>
          </tr>

        </tbody>

      </table>


      <hr />


      {/* =========================================
          5. REAL WORLD USE CASES
         ========================================= */}

      <h2>5. Real-World Uses</h2>

      <ul>
        <li>Large Dashboard Pages</li>
        <li>Admin Pages</li>
        <li>Reports</li>
        <li>Settings Pages</li>
        <li>Charts</li>
        <li>Heavy Components</li>
        <li>Routes / Pages</li>
      </ul>

    </div>
  );
}

export default App;