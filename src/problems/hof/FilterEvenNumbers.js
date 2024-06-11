export const FilterEvenNumbers = {
    id: "filter-even-numbers",
    title: "Filtering Even Numbers",
    examples: [
      {
        id: 1,
        input: `[1, 2, 3, 4, 5, 6]`,
        output: `[2, 4, 6]`,
      },
      {
        id: 2,
        input: `[10, 15, 20, 25, 30]`,
        output: `[10, 20, 30]`,
      },
      {
        id: 3,
        input: `[5, 7, 9, 11]`,
        output: `[]`,
      },
      {
        id: 4,
        input: `[0, 2, 4, 6, 8, 10]`,
        output: `[0, 2, 4, 6, 8, 10]`,
      },
      {
        id: 5,
        input: `[100, 200, 300, 401]`,
        output: `[100, 200, 300]`,
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
          Create a function named <code>filterEven</code> that takes an array of numbers as an argument and returns a new array containing only the even numbers. 
          Use the <code>filter</code> higher-order function.
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: [1, 2, 3, 4, 5]</code>
          <code class="code-block">Output: [2, 4]</code>
          <code class="code-block">
              Note: Only even numbers should be in the output.
          </code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: [11, 22, 33, 44]</code>
          <code class="code-block">Output: [22, 44]</code>
          <code class="code-block">
            Explanation: Filter out all odd numbers.
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
      `filterEven([1, 2, 3, 4, 5, 6])`,
      `filterEven([10, 15, 20, 25, 30])`,
      `filterEven([5, 7, 9, 11])`,
      `filterEven([0, 2, 4, 6, 8, 10])`,
      `filterEven([100, 200, 300, 401])`
    ]
  }
  