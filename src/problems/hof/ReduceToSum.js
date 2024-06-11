export const ReduceToSum = {
    id: "reduce-to-sum",
    title: "Reducing to Sum",
    examples: [
      {
        id: 1,
        input: `[1, 2, 3, 4]`,
        output: `10`,
      },
      {
        id: 2,
        input: `[5, 5, 5, 5]`,
        output: `20`,
      },
      {
        id: 3,
        input: `[10, -10, 10, -10]`,
        output: `0`,
      },
      {
        id: 4,
        input: `[0, 100, 200]`,
        output: `300`,
      },
      {
        id: 5,
        input: `[-1, -2, -3, -4]`,
        output: `-10`,
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
          Create a function named <code>sumArray</code> that takes an array of numbers as an argument and returns the sum of all elements. 
          Use the <code>reduce</code> higher-order function.
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: [1, 2, 3]</code>
          <code class="code-block">Output: 6</code>
          <code class="code-block">
              Note: Sum all elements of the array.
          </code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: [4, 4, 4]</code>
          <code class="code-block">Output: 12</code>
          <code class="code-block">
            Explanation: The result is the sum of all numbers.
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
      `sumArray([1, 2, 3, 4])`,
      `sumArray([5, 5, 5, 5])`,
      `sumArray([10, -10, 10, -10])`,
      `sumArray([0, 100, 200])`,
      `sumArray([-1, -2, -3, -4])`
    ]
  }
  