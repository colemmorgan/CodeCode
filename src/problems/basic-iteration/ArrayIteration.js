export const ArrayIteration = {
  id: "basic-array-iteration",
  title: "Basic Array Iteration",
  examples: [
    {
      id: 1,
      input: `["a","b","c","d","e","f"]`,
      output: "a\nb\nc\nd\ne\nf",
    },
    {
      id: 2,
      input: `["A","B","C","D","E","F"]`,
      output: "A\nB\nC\nD\nE\nF",
    },
    {
      id: 3,
      input: `["A",34,12,"C","D"]`,
      output: "A\n34\n12\nC\nD",
    },
    {
      id: 4,
      input: `[true,false,[],{}]`,
      output: "true\nfalse\n[]\n{}",
    },
    {
      id: 5,
      input: "[true]",
      output: "true",
    }
  ],
  header: `
    <div class="difficulty-container">
      <p class="difficulty">Difficulty: Very Easy</p>  
    </div>`,
  body: `
    <div class="problem-statement">
      <h5 class="subtitle">Problem Statement</h5>
      <p class="description">
        Create a function named iterator that takes in an array as an argument. The function 
        should print each individual element of the array.
      </p>
    </div>
    <div class="sample-test-cases">
      <h5 class="test-case-title">Sample Test Cases</h5>
      <p class="example-title">Example 1:</p>
      <div class="example">
        <code class="code-block">Input: ["A","B","C","D","E"]</code>
        <code class="code-block">Output: "A\\nB\\nC\\nD\\nE\\n"</code>
        <code class="code-block">
            Note: Each character should be on a new line.
        </code>
      </div>
      <p class="example-title">Example 2:</p>
      <div class="example">
        <code class="code-block">Input: [" ", "A","B","C","D"]</code>
        <code class="code-block">Output: " \\nA\\nB\\nC\\nD\\n"</code>
        <code class="code-block">
          Explanation: Each character should be on a new line.
        </code>
      </div>
    </div>
    <div class="constraints">
      <h5 class="constraints-title">Constraints</h5>
      <ul class="constraints-list">
        <li class="constraint-item">No constraints.</li>
      </ul>
    </div>
  `,
        testCode: [`iterator(["a","b","c","d","e","f"])`,
        `iterator(["A","B","C","D","E","F"])`,
        `iterator(["A",34,12,"C","D"])`,
        `iterator([true,false,[],{}])`,
        `iterator([true])`]
        
        
    
}