export const FindFirstNegative = {
    id: "find-first-negative",
    title: "Finding First Negative",
    examples: [
      {
        id: 1,
        input: `[1, 3, -5, 7, -9]`,
        output: `-5`,
      },
      {
        id: 2,
        input: `[10, 20, 30, 5]`,
        output: `undefined`,
      },
      {
        id: 3,
        input: `[-1, -2, -3, -4]`,
        output: `-1`,
      },
      {
        id: 4,
        input: `[100, 50, 200, 150]`,
        output: `undefined`,
      },
      {
        id: 5,
        input: `[0, 1, 2, 3, 4]`,
        output: `undefined`,
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
          Create a function named <code>findFirstNegative</code> that takes an array of numbers as an argument and returns the first negative number found in the array. 
          Use the <code>find</code> higher-order function.
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: [1, 3, -5, 7, -9]</code>
          <code class="code-block">Output: -5</code>
          <code class="code-block">
              Note: The first negative number found is returned.
          </code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: [10, 20, 30, 5]</code>
          <code class="code-block">Output: undefined</code>
          <code class="code-block">
            Explanation: No negative numbers are present.
          </code>
        </div>
      </div>
      <div class="constraints">
        <h5 class="constraints-title">Constraints</h5>
        <ul class="constraints-list">
          <li class="constraint-item">The input array will only contain integers.</li>
          <li class="constraint-item">The input array may contain positive, negative, or zero values.</li>
        </ul>
      </div>
    `,
    testCode: [
      `findFirstNegative([1, 3, -5, 7, -9])`,
      `findFirstNegative([10, 20, 30, 5])`,
      `findFirstNegative([-1, -2, -3, -4])`,
      `findFirstNegative([100, 50, 200, 150])`,
      `findFirstNegative([0, 1, 2, 3, 4])`
    ]
  }
  