export const NonMutatingObjectMerge = {
    id: "object-merge",
    title: "Object Merge",
    examples: [
      {
        id: 1,
        input: `[{ a: 1, b: 2 }, { b: 3, c: 4 }]`,
        output: `{"a":1,"b":3,"c":4}`,
      },
      {
        id: 2,
        input: `[{ foo: "bar" }, { foo: "baz", qux: "quux" }]`,
        output: `{"foo":"baz","qux":"quux"}`,
      },
      {
        id: 3,
        input: `[{ x: 10 }, { y: 20 }, { z: 30 }]`,
        output: `{"x":10,"y":20,"z":30}`,
      },
      {
        id: 4,
        input: `[{}, { a: 1 }]`,
        output: `{"a":1}`,
      },
      {
        id: 5,
        input: `[{}]`,
        output: `{}`,
      }
    ],
    header: `
      <div class="difficulty-container">
        <p class="difficulty">Difficulty: Medium</p>  
      </div>`,
    body: `
      <div class="problem-statement">
        <h5 class="subtitle">Problem Statement</h5>
        <p class="description">
          Create a function named <code>mergeObjects</code> that takes an array of objects as an argument and returns a new object that merges all the properties from the objects in the array. 
          The original objects should not be mutated.
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: [{ a: 1 }, { b: 2 }]</code>
          <code class="code-block">Output: {"a":1,"b":2}</code>
          <code class="code-block">
              Note: Properties in later objects overwrite earlier ones.
          </code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: [{ x: "y" }, { x: "z", y: "a" }]</code>
          <code class="code-block">Output: {"x":"z","y":"a"}</code>
          <code class="code-block">
            Explanation: Merge all properties, with later ones overwriting earlier ones.
          </code>
        </div>
      </div>
      <div class="constraints">
        <h5 class="constraints-title">Constraints</h5>
        <ul class="constraints-list">
          <li class="constraint-item">The input array will not contain null or undefined objects.</li>
          <li class="constraint-item">The input array will not be empty.</li>
          <li class="constraint-item">Properties from later objects in the array overwrite those from earlier objects.</li>
          <li class="constraint-item">The function should not mutate the original objects.</li>
        </ul>
      </div>
    `,
    testCode: [
      `mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }])`,
      `mergeObjects([{ foo: "bar" }, { foo: "baz", qux: "quux" }])`,
      `mergeObjects([{ x: 10 }, { y: 20 }, { z: 30 }])`,
      `mergeObjects([{}, { a: 1 }])`,
      `mergeObjects([{}])`
    ]
  }
  