export const CountNestedObjectKeys = {
  id: "count-object-keys",
  title: "Counting Object Keys",
  examples: [
    {
      id: 1,
      input: `{
          "a": 1,
          "b": {
            "c": 2,
            "d": {
              "e": 3
            }
          }
        }`,
      output: `4`,
    },
    {
      id: 2,
      input: `{
          "a": 1,
          "b": {
            "c": 2,
            "d": {
              "e": 3,
              "f": 4,
              "g": {
                "h": 5
              }
            }
          }
        }`,
      output: `7`,
    },
    {
      id: 3,
      input: `{
          "a": {
            "b": {
              "c": {
                "d": {
                  "e": 1
                }
              }
            }
          }
        }`,
      output: `5`,
    },
    {
      id: 4,
      input: `{
          "a": 1,
          "b": 2,
          "c": {
            "d": 3,
            "e": {
              "f": 4,
              "g": 5
            }
          }
        }`,
      output: `5`,
    },
  ],
  header: `
      <div class="difficulty-container">
        <p class="difficulty">Difficulty: Medium</p>  
      </div>`,
  body: `
      <div class="problem-statement">
        <h5 class="subtitle">Problem Statement</h5>
        <p class="description">
          Create a function named <code>countKeys</code> that takes a nested object as an argument and returns the total count of all keys in the object and its nested objects.
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: {"a": 1, "b": {"c": 2, "d": {"e": 3}}}</code>
          <code class="code-block">Output: 4</code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: {"a": 1, "b": {"c": 2, "d": {"e": 3, "f": 4, "g": {"h": 5}}}}</code>
          <code class="code-block">Output: 7</code>
        </div>
      </div>
      <div class="constraints">
        <h5 class="constraints-title">Constraints</h5>
        <ul class="constraints-list">
          <li class="constraint-item">The input object may be arbitrarily nested.</li>
          <li class="constraint-item">The input object may contain strings,
  numbers, booleans, objects, or arrays as values.</li>
      </ul>
    </div>
  `,
  testCode: [
    `countKeys({"a": 1, "b": {"c": 2, "d": {"e": 3}}})`,
    `countKeys({"a": 1, "b": {"c": 2, "d": {"e": 3, "f": 4, "g": {"h": 5}}}})`,
    `countKeys({"a": {"b": {"c": {"d": {"e": 1}}}}})`,
    `countKeys({"a": 1, "b": 2, "c": {"d": 3, "e": {"f": 4, "g": 5}}})`,
  ],
};
