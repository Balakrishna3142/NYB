function JSXValidationPage() {
  return (
    <div>
      <h1>Valid and Invalid JSX</h1>

      {/* Valid JSX */}
      <h2>Hello React</h2>

      <p>Welcome to JSX</p>

      <div>
        <h3>Parent Element</h3>
        <p>Child Element</p>
      </div>

      <img src="image.jpg" alt="Example" />

      {/* Invalid JSX Examples */}

      {/* 
      1. Invalid: Multiple elements without parent

      <h1>Hello</h1>
      <p>React</p>
      */}

      {/* 
      2. Invalid: class instead of className

      <div class="box">Hello</div>
      */}

      {/* 
      3. Invalid: Unclosed tag

      <h1>Hello
      */}

      {/* 
      4. Invalid: HTML 'for' instead of 'htmlFor'

      <label for="name">Name</label>
      */}

    </div>
  );
}

export default JSXValidationPage;