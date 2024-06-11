export const FibSeq = {
    id: "fibonacci-sequence",
    title: "Generating Fibonacci Sequence",
    examples: [
      {
        id: 1,
        input: `5`,
        output: `[0, 1, 1, 2, 3]`,
      },
      {
        id: 2,
        input: `8`,
        output: `[0, 1, 1, 2, 3, 5, 8, 13]`,
      },
      {
        id: 3,
        input: `12`,
        output: `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]`,
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
          Create a function named <code>generateFibonacci</code> that takes a number <i>n</i> as input and returns an array containing the first <i>n</i> numbers of the Fibonacci sequence.
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: 5</code>
          <code class="code-block">Output: [0, 1, 1, 2, 3]</code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: 8</code>
          <code class="code-block">Output: [0, 1, 1, 2, 3, 5, 8, 13]</code>
        </div>
      </div>
      <div class="constraints">
        <h5 class="constraints-title">Constraints</h5>
        <ul class="constraints-list">
          <li class="constraint-item">The input number <i>n</i> will be non-negative.</li>
        </ul>
      </div>
    `,
    testCode: [
      `generateFibonacci(5)`,
      `generateFibonacci(8)`,
      `generateFibonacci(12)`
    ]
  }