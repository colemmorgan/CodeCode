export const ShortScaleFormatting = {
    id: "short-scale-formatting",
    title: "Short Scale Formatting",
    examples: [
      {
        id: 1,
        input: `1000`,
        output: "1 thousand",
      },
      {
        id: 2,
        input: `1500000`,
        output: "1.5 million",
      },
      {
        id: 3,
        input: `1234567890`,
        output: "1.23 billion",
      },
      {
        id: 4,
        input: `987654321000`,
        output: "987.65 billion",
      },
      {
        id: 5,
        input: `3500`,
        output: "3.5 thousand",
      },
      {
        id: 6,
        input: `10`,
        output: "10",
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
          Create a function named <code>formatShortScale</code> that takes in a number as an argument. 
          The function should return a string representing the number in short scale format.
          For example, 1000 should be formatted as "1 thousand" and 1500000 as "1.5 million".
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: 1000</code>
          <code class="code-block">Output: "1 thousand"</code>
          <code class="code-block">
              Note: Convert the number to short scale format.
          </code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: 1234567</code>
          <code class="code-block">Output: "1.23 million"</code>
          <code class="code-block">
            Explanation: Convert the number to short scale format with appropriate rounding.
          </code>
        </div>
      </div>
      <div class="constraints">
        <h5 class="constraints-title">Constraints</h5>
        <ul class="constraints-list">
          <li class="constraint-item">The input number will be a positive integer.</li>
          <li class="constraint-item">The input number will not exceed \(10^{12}\).</li>
          <li class="constraint-item">The function should round to two decimal places for non-integer parts.</li>
        </ul>
      </div>
    `,
    testCode: [
      `formatShortScale(1000)`,
      `formatShortScale(1500000)`,
      `formatShortScale(1234567890)`,
      `formatShortScale(987654321000)`,
      `formatShortScale(3500)`,
      `formatShortScale(10)`
    ]
  }