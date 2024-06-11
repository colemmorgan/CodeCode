export const NonMutatingStringReplacement = {
    id: "string-replacement",
    title: "String Replacement",
    examples: [
      {
        id: 1,
        input: `["hello world", "world", "there"]`,
        output: "hello there",
      },
      {
        id: 2,
        input: `["abcabc", "a", "x"]`,
        output: "xbcxbc",
      },
      {
        id: 3,
        input: `["foo bar foo", "foo", "baz"]`,
        output: "baz bar baz",
      },
      {
        id: 4,
        input: `["replace-me", "-", "/"]`,
        output: "replace/me",
      },
      {
        id: 5,
        input: `["no change", "change", "same"]`,
        output: "no same",
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
          Create a function named <code>replaceString</code> that takes three arguments: a string, a substring to replace, and a replacement string. 
          The function should return a new string where all occurrences of the substring are replaced by the replacement string. 
          The original string should not be mutated.
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: ["hello world", "world", "there"]</code>
          <code class="code-block">Output: "hello there"</code>
          <code class="code-block">
              Note: Replace all occurrences of the substring.
          </code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: ["foo foo", "foo", "bar"]</code>
          <code class="code-block">Output: "bar bar"</code>
          <code class="code-block">
            Explanation: All instances of "foo" are replaced with "bar".
          </code>
        </div>
      </div>
      <div class="constraints">
        <h5 class="constraints-title">Constraints</h5>
        <ul class="constraints-list">
          <li class="constraint-item">The input string will not be empty.</li>
          <li class="constraint-item">The substring to replace will not be an empty string.</li>
          <li class="constraint-item">The function should not mutate the original string.</li>
        </ul>
      </div>
    `,
    testCode: [
      `replaceString("hello world", "world", "there")`,
      `replaceString("abcabc", "a", "x")`,
      `replaceString("foo bar foo", "foo", "baz")`,
      `replaceString("replace-me", "-", "/")`,
      `replaceString("no change", "change", "same")`
    ]
  }
  