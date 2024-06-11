export const ProperCaseFormatting = {
    id: "proper-case-formatting",
    title: "Proper Case String Formatting",
    examples: [
      {
        id: 1,
        input: `"hello world"`,
        output: "Hello world",
      },
      {
        id: 2,
        input: `"JAVA SCRIPT"`,
        output: "Java script",
      },
      {
        id: 3,
        input: `"oPENai GPT-4"`,
        output: "Openai gpt-4",
      },
      {
        id: 4,
        input: `"123 Testing STRING"`,
        output: "123 testing string",
      },
      {
        id: 5,
        input: `"a"`,
        output: "A",
      },
      {
        id: 6,
        input: `"CAPITALIZATION"`,
        output: "Capitalization",
      },
      {
        id: 7,
        input: `"muLtiple caSes hERe"`,
        output: "Multiple cases here",
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
          Create a function named <code>properCase</code> that takes a string as an argument. 
          The function should return the string with the first letter capitalized and the rest in lowercase.
          For example, "hello world" should be formatted as "Hello world".
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: "hello world"</code>
          <code class="code-block">Output: "Hello world"</code>
          <code class="code-block">
              Note: Only the first letter should be capitalized.
          </code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: "JAVA SCRIPT"</code>
          <code class="code-block">Output: "Java script"</code>
          <code class="code-block">
            Explanation: Convert the first character to uppercase, all others to lowercase.
          </code>
        </div>
      </div>
      <div class="constraints">
        <h5 class="constraints-title">Constraints</h5>
        <ul class="constraints-list">
          <li class="constraint-item">The input string will contain only printable ASCII characters.</li>
          <li class="constraint-item">The input string will not be empty.</li>
          <li class="constraint-item">The input string may contain numbers and special characters.</li>
        </ul>
      </div>
    `,
    testCode: [
      `properCase("hello world")`,
      `properCase("JAVA SCRIPT")`,
      `properCase("oPENai GPT-4")`,
      `properCase("123 Testing STRING")`,
      `properCase("a")`,
      `properCase("CAPITALIZATION")`,
      `properCase("muLtiple caSes hERe")`
    ]
  }