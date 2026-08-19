import React from "react";
import Card from "./Card";

function Concepts() {

  const concepts = [
    {
      title: "Fragments",
      description: "Fragments allow multiple elements without an extra DOM element."
    },
    {
      title: "Custom Hooks",
      description: "Custom Hooks allow reusable stateful logic."
    },
    {
      title: "React.memo",
      description: "React.memo can prevent unnecessary component re-rendering."
    },
    {
      title: "useMemo",
      description: "useMemo can cache expensive calculations."
    },
    {
      title: "useCallback",
      description: "useCallback can cache function references."
    },
    {
      title: "Portals",
      description: "Portals render content outside the normal DOM hierarchy."
    },
    {
      title: "List Rendering",
      description: "map() can dynamically render lists."
    },
    {
      title: "Destructuring",
      description: "Destructuring extracts values from objects and arrays."
    },
    {
      title: "Lazy Loading",
      description: "React.lazy and Suspense can load components when needed."
    }
  ];

  return (
    <div>

      <h2>Weekly Concepts</h2>

      {concepts.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}

    </div>
  );
}

export default Concepts;