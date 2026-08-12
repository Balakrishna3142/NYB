import { Link } from "react-router-dom";

const lessons = [
  ["Components", "/components"],
  ["Props", "/props"],
  ["JSX", "/jsx"],
  ["Parent and Child", "/jsx1"],
  ["Component Hierarchy", "/parent"],
  ["Dummy Components", "/dummytwo"],
  ["Nesting Components", "/nesting"],
  ["Reusable Components", "/organizing"],
  ["State", "/state"],
  ["Local State", "/local-state"],
  ["Local State Practice", "/local-state-practice"],
  ["Global State", "/global-state"],
  ["Local vs Global State", "/local-vs-global"],
  ["Context API", "/context-api"],
  ["Context Implementation", "/context-implementation"],
  ["Context Counter", "/context-counter"],
  ["Theme Context", "/theme-context"],
  ["Context vs Redux vs Reducer", "/context-redux-reducer"],
  ["Mini Assignment", "/mini-assignment"],
  ["Mini Project", "/mini-project"],
  ["Redux Mini Project", "/redux-mini-project"],
  ["Global State Management", "/global-state-management"],
  ["Props Drilling", "/props-drilling"],
  ["useReducer", "/use-reducer"],
  ["State and Reducer", "/state-and-reducer"],
  ["Reducer Counter", "/reducer-counter"],
  ["useState Hook", "/use-state-hook"],
  ["Redux Toolkit", "/redux-toolkit"],
  ["Redux Architecture", "/redux-architecture"],
  ["Redux Store", "/redux-store"],
  ["Redux Actions", "/redux-actions"],
  ["Redux State", "/redux-state"],
  ["Redux Introduction", "/redux-introduction"],
  ["Component Basics", "/component-basics"],
  ["Fetch Users", "/fetch-users"],
  ["Axios", "/axios"],
  ["Async API", "/async-api"],
  ["API Integration", "/api-integration"],
  ["Error Handling", "/error-handling"],
  ["Conditional Rendering", "/conditional-rendering"],
  ["Event Handling", "/event-handling"],
  ["Functional vs Class", "/functional-vs-class"],
  ["Props Exercise", "/props-exercise"],
  ["Props vs State", "/props-vs-state"],
  ["Fetch vs Axios", "/fetch-vs-axios"],
];

function LearningDashboard() {
  return (
    <main>
      <h1>React Learning Projects</h1>
      <p>Select a topic to open its page.</p>
      <nav aria-label="Learning topics">
        {lessons.map(([label, path]) => (
          <Link key={path} to={path}>
            {label}
          </Link>
        ))}
      </nav>
    </main>
  );
}

export default LearningDashboard;
