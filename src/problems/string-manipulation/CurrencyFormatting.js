export const CurrencyFormatting = {
    id: "usd-currency-formatting",
    title: "USD Currency Formatting",
    examples: [
      {
        id: 1,
        input: `1234.5`,
        output: "$1,234.50",
      },
      {
        id: 2,
        input: `1000000`,
        output: "$1,000,000.00",
      },
      {
        id: 3,
        input: `123456789.123`,
        output: "$123,456,789.12",
      },
      {
        id: 4,
        input: `0.789`,
        output: "$0.79",
      },
      {
        id: 5,
        input: `45`,
        output: "$45.00",
      },
      {
        id: 6,
        input: `1000000.456`,
        output: "$1,000,000.46",
      },
      {
        id: 7,
        input: `1234567890123.987`,
        output: "$1,234,567,890,123.99",
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
          Create a function named <code>formatCurrency</code> that takes a number as an argument. 
          The function should return a string representing the number formatted as valid USD currency.
          The format should include the dollar sign, commas as thousands separators, and exactly two decimal places.
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: 1234.5</code>
          <code class="code-block">Output: "$1,234.50"</code>
          <code class="code-block">
              Note: Include the dollar sign, commas, and two decimal places.
          </code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: 987654321.789</code>
          <code class="code-block">Output: "$987,654,321.79"</code>
          <code class="code-block">
            Explanation: Properly format the number as USD currency.
          </code>
        </div>
      </div>
      <div class="constraints">
        <h5 class="constraints-title">Constraints</h5>
        <ul class="constraints-list">
          <li class="constraint-item">The input number will be a positive number.</li>
          <li class="constraint-item">The input number can be an integer or a floating-point number.</li>
          <li class="constraint-item">The input number will not exceed \(10^{15}\).</li>
          <li class="constraint-item">The function should round to exactly two decimal places.</li>
        </ul>
      </div>
    `,
    testCode: [
      `formatCurrency(1234.5)`,
      `formatCurrency(1000000)`,
      `formatCurrency(123456789.123)`,
      `formatCurrency(0.789)`,
      `formatCurrency(45)`,
      `formatCurrency(1000000.456)`,
      `formatCurrency(1234567890123.987)`
    ]
  }