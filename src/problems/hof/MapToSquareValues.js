export const MapToSquareValues = {
    id: "map-to-square-values",
    title: "Mapping to Square Values",
    examples: [
      {
        id: 1,
        input: `[1, 2, 3, 4]`,
        output: `[1, 4, 9, 16]`,
      },
      {
        id: 2,
        input: `[5, 10, 15]`,
        output: `[25, 100, 225]`,
      },
      {
        id: 3,
        input: `[0, 7, 8, 9]`,
        output: `[0, 49, 64, 81]`,
      },
      {
        id: 4,
        input: `[12, 13, 14]`,
        output: `[144, 169, 196]`,
      },
      {
        id: 5,
        input: `[-1, -2, -3]`,
        output: `[1, 4, 9]`,
      }
    ],
    header: `
      <div class="difficulty-container">
        <p class="difficulty">Difficulty: Easy</p>  
      </div>`,
    body: `
      <div class="problem-statement">
        <h5 class="subtitle">Problem Statement</h5>
        <p class="description">
          Create a function named <code>squareValues</code> that takes an array of numbers as an argument and returns a new array with each number squared. 
          Use the <code>map</code> higher-order function.
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: [1, 2, 3]</code>
          <code class="code-block">Output: [1, 4, 9]</code>
          <code class="code-block">
              Note: Each number in the array is squared.
          </code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: [0, 2, 4]</code>
          <code class="code-block">Output: [0, 4, 16]</code>
          <code class="code-block">
            Explanation: Map each element to its square.
          </code>
        </div>
      </div>
      <div class="constraints">
        <h5 class="constraints-title">Constraints</h5>
        <ul class="constraints-list">
          <li class="constraint-item">The input array will only contain integers.</li>
          <li class="constraint-item">The input array will not be empty.</li>
        </ul>
      </div>
    `,
    testCode: [
      `squareValues([1, 2, 3, 4])`,
      `squareValues([5, 10, 15])`,
      `squareValues([0, 7, 8, 9])`,
      `squareValues([12, 13, 14])`,
      `squareValues([-1, -2, -3])`
    ]
  }
  