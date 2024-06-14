export const NonMutatingArrayReversal = {
    id: "array-reversal",
    title: "Array Reversal",
    examples: [
      {
        id: 1,
        input: `[1, 2, 3, 4, 5]`,
        output: "[5, 4, 3, 2, 1]",
      },
      {
        id: 2,
        input: `["a", "b", "c", "d"]`,
        output: `["d", "c", "b", "a"]`,
      },
      {
        id: 3,
        input: `[true, false, null, 42]`,
        output: `[42, null, false, true]`,
      },
      {
        id: 4,
        input: `[{}]`,
        output: `[{}]`,
      },
      {
        id: 5,
        input: `[]`,
        output: `[]`,
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
          Create a function named <code>reverseArray</code> that takes an array as an argument and returns a new array with the elements reversed. 
          The original array should not be mutated.
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: [1, 2, 3]</code>
          <code class="code-block">Output: [3, 2, 1]</code>
          <code class="code-block">
              Note: The original array remains unchanged.
          </code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: ["x", "y", "z"]</code>
          <code class="code-block">Output: ["z", "y", "x"]</code>
          <code class="code-block">
            Explanation: The reversed array is a new array.
          </code>
        </div>
      </div>
      <div class="constraints">
        <h5 class="constraints-title">Constraints</h5>
        <ul class="constraints-list">
          <li class="constraint-item">The input array will not be null.</li>
          <li class="constraint-item">The function should not use array mutation methods such as <code>reverse</code>.</li>
        </ul>
      </div>
    `,
    testCode: [
      `reverseArray([1, 2, 3, 4, 5])`,
      `reverseArray(["a", "b", "c", "d"])`,
      `reverseArray([true, false, null, 42])`,
      `reverseArray([{}])`,
      `reverseArray([])`
    ]
  }