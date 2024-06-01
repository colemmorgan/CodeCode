export const CaesarCipher = {
  id: "caesar-cipher",
  title: "Caesar Cipher",
  examples: [
    {
      id: 1,
      input: "HELLO",
      output: "KHOOR",
    },
    {
      id: 2,
      input: "WORLD",
      output: "ZRUOG",
    },
    {
      id: 3,
      input: "CAESAR",
      output: "FDHVDU",
    },
    {
      id: 4,
      input: "SHIFT",
      output: "VKLIW",
    },
    {
      id: 5,
      input: "CIPHER",
      output: "FLSKHU",
    },
  ],
  header: `<h3 class="title">Caesar Cipher</h3>
    <div class="difficulty-container">
      <p class="difficulty">Difficulty: Easy 5-10 Minutes</p>
  
    </div>`,
  body: `  
      <div class="problem-statement">
          <h5 class="subtitle">Problem Statement</h5>
          <p class="description">
            Create a function named CaesarCipher that takes in a string as an argument. The function should return 
            an encrypted string using a shift of k = 3. This means that an A will become D and Z will become C.
          </p>
        </div>
        <div class="sample-test-cases">
          <h5 class="test-case-title">Sample Test Cases</h5>
          <p class="example-title">Example 1:</p>
          <div class="example">
            <code class="code-block">Input: "HELLO"</code>
            <code class="code-block">Output: "KHOOR"</code>
            <code class="code-block">
              Explanation: Each string can be rearranged to match another.
            </code>
          </div>
          <p class="example-title">Example 2:</p>
          <div class="example">
            <code class="code-block">Input: "CIPHER"</code>
            <code class="code-block">Output: "FLPKHU"</code>
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
    console.log(CaesarCipher("HELLO"))
    console.log(CaesarCipher("WORLD"))
    console.log(CaesarCipher("CAESAR"))
    console.log(CaesarCipher("SHIFT"))
    console.log(CaesarCipher("CIPHER"))
    `,
};
