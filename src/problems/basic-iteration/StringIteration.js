export const StringIteration = {
  id: "basic-string-iteration",
  title: "Basic String Iteration",
  examples: [
    {
      id: 1,
      input: "abcdef",
      output: "a\nb\nc\nd\ne\nf",
    },
    {
      id: 2,
      input: "ABCDEF",
      output: "A\nB\nC\nD\nE\nF",
    },
    {
      id: 3,
      input: "ABC DEF",
      output: "A\nB\nC\n \nD\nE\nF",
    },
    {
      id: 4,
      input: "T E S T",
      output: "T\n \nE\n \nS\n \nT",
    },
  ],
  header: ` <div class="difficulty-container">
          <p class="difficulty">Difficulty: Very Easy</p>  
        </div>`,

  body: `
        <div class="problem-statement">
          <h5 class="subtitle">Problem Statement</h5>
          <p class="description">
            Create a function named iterator that takes in a string as an argument. The function 
            should print each individual character of the string.
          </p>
        </div>
        <div class="sample-test-cases">
          <h5 class="test-case-title">Sample Test Cases</h5>
          <p class="example-title">Example 1:</p>
          <div class="example">
            <code class="code-block">Input: "abcde"</code>
            <code class="code-block">Output: "a\\n\\nb\\nc\\nd\\ne"</code>
            <code class="code-block">
                Note: Each character should be on a new line.
            </code>
          </div>
          <p class="example-title">Example 2:</p>
          <div class="example">
            <code class="code-block">Input: "ABC DEF"</code>
            <code class="code-block">Output: "A\nB\nC\n \nD\nE\F"</code>
            <code class="code-block">
              Explanation: Each character should be on a new line.
            </code>
          </div>
        </div>
        <div class="constraints">
          <h5 class="constraints-title">Constraints</h5>
          <ul class="constraints-list">
            <li class="constraint-item">No contraints.</li>
          </ul>
        </div>
        `,
  testCode: [
    `(iterator("abcdef"))`,
    `(iterator("ABCDEF"))`,
    `(iterator("ABC DEF"))`,
    `(iterator("T E S T"))`,
  ],
};
