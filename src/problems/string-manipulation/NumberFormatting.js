export const NumberFormatting = {
    id: "number-formatting-1",
    title: "Number Formatting 1",
    starterCode:"",
    examples: [
      {
        id: 1,
        input: "9728",
        output: "9.73K",
      },
      {
        id: 2,
        input: "123,670,000",
        output: "123.67M",
      },
      {
        id: 3,
        input: "10",
        output: "10.00",
      },
      {
        id: 4,
        input: "8000",
        output: "8.00k",
      },
      {
        id: 5,
        input: "2,400,000",
        output: "2.40M",
      },
    ],
    header: `
      <div class="difficulty-container">
        <p class="difficulty">Difficulty: Easy 5-10 Minutes</p>
    
      </div>`,
    body: `  
        <div class="problem-statement">
            <h5 class="subtitle">Problem Statement</h5>
            <p class="description">
              Create a number
            </p>
          </div>
          <div class="sample-test-cases">
            <h5 class="test-case-title">Sample Test Cases</h5>
            <p class="example-title">Example 1:</p>
            <div class="example">
              <code class="code-block">Input: "123,670,000"</code>
              <code class="code-block">Output: "123.67M"</code>
              <code class="code-block">
                Explanation: Each string can be rearranged to match another.
              </code>
            </div>
            <p class="example-title">Example 2:</p>
            <div class="example">
              <code class="code-block">Input: 8000</code>
              <code class="code-block">Output: 8.00K</code>
              <code class="code-block">
                Explanation: Each string can be rearranged to match another.
              </code>
            </div>
          </div>
          <div class="constraints">
            <h5 class="constraints-title">Constraints</h5>
            <ul class="constraints-list">
              <li class="constraint-item">Must use the map function</li>
              <li class="constraint-item">Must use the map function</li>
            </ul>
          </div>
     `,
    testCode: `
      console.log(CaesarCipher(9728))
      console.log(CaesarCipher(123670000))
      console.log(CaesarCipher(10))
      console.log(CaesarCipher(8000))
      console.log(CaesarCipher(2400000))
      `,
  };