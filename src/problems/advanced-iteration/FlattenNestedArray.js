export const FlattenNestedArray = {
    id: "flatten-nested-array",
    title: "Flatten Nested Array",
    examples: [
      {
        id: 1,
        input: `[[1, 2, [3]], 4, [5, [6, 7]]]`,
        output: `[1, 2, 3, 4, 5, 6, 7]`,
      },
      {
        id: 2,
        input: `[[1, 2], [3, [4, 5]], 6, [7, 8, [9]]]`,
        output: `[1, 2, 3, 4, 5, 6, 7, 8, 9]`,
      },
      {
        id: 3,
        input: `[[1, [2, [3, [4]]]], [5], 6]`,
        output: `[1, 2, 3, 4, 5, 6]`,
      },
      {
        id: 4,
        input: `[[1], [2], [3], [4], [5]]`,
        output: `[1, 2, 3, 4, 5]`,
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
          Create a function named <code>flattenArray</code> that takes a nested array as an argument and returns a new array with all nested arrays flattened into a single array.
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: [[1, 2, [3]], 4, [5, [6, 7]]]</code>
          <code class="code-block">Output: [1, 2, 3, 4, 5, 6, 7]</code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: [[1, 2], [3, [4, 5]], 6, [7, 8, [9]]]</code>
          <code class="code-block">Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]</code>
        </div>
      </div>
      <div class="constraints">
        <h5 class="constraints-title">Constraints</h5>
        <ul class="constraints-list">
          <li class="constraint-item">The input array may be arbitrarily nested.</li>
          <li class="constraint-item">The input array may contain integers or other arrays.</li>
        </ul>
      </div>
    `,
    testCode: [
      `flattenArray([[1, 2, [3]], 4, [5, [6, 7]]])`,
      `flattenArray([[1, 2], [3, [4, 5]], 6, [7, 8, [9]]])`,
      `flattenArray([[1, [2, [3, [4]]]], [5], 6])`,
      `flattenArray([[1], [2], [3], [4], [5]])`
    ]
  }
  