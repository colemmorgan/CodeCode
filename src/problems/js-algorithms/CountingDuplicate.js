export const CountDuplicates = {
    id: "count-duplicates",
    title: "Counting Duplicates",
    examples: [
      {
        id: 1,
        input: `"hello"`,
        output: `2`,
      },
      {
        id: 2,
        input: `"abracadabra"`,
        output: `5`,
      },
      {
        id: 3,
        input: `"indivisibility"`,
        output: `1`,
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
          Create a function named <code>countDuplicates</code> that takes a string as input and returns the count of duplicate characters in the string. 
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: "hello"</code>
          <code class="code-block">Output: 2</code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: "abracadabra"</code>
          <code class="code-block">Output: 5</code>
        </div>
      </div>
      <div class="constraints">
        <h5 class="constraints-title">Constraints</h5>
        <ul class="constraints-list">
          <li class="constraint-item">The input string may contain alphabetic characters in both upper and lower case.</li>
        </ul>
      </div>
    `,
    testCode: [
      `countDuplicates("hello")`,
      `countDuplicates("abracadabra")`,
      `countDuplicates("indivisibility")`
    ]
  }
  