export const ObjectIteration = {
    id:"basic-object-iteration",
    title: "Basic Object Iteration",
    examples: [
      {
        "id": 1,
        "input": `{id:1, name:"user"}`,
        "output": "id:1\nname:user"
      },
      {
        "id": 2,
        "input": "{nums: 432}",
        "output": "nums:432"
      },
      {
        "id": 3,
        "input": "{age:21, legal:true}",
        "output": "age:21\nlegal:true"
      },
      {
        "id": 4,
        "input": `{\"obj\": {\"name\": "test"}}`,
        "output": "obj:easy"
      },
    ],
          header: ` <div class="difficulty-container">
          <p class="difficulty">Difficulty: Easy</p>  
        </div>`,
        body:`
        <div class="problem-statement">
          <h5 class="subtitle">Problem Statement</h5>
          <p class="description">
            Create a function named iterator that takes in an object as an argument. The function 
            should print each individual key-value pair of the object in the format Key:Value.
          </p>
        </div>
        <div class="sample-test-cases">
          <h5 class="test-case-title">Sample Test Cases</h5>
          <p class="example-title">Example 1:</p>
          <div class="example">
            <code class="code-block">Input: {id:1,name:"user"}</code>
            <code class="code-block">Output: "id:1 name:user"</code>
            <code class="code-block">
                Note: Each Key-Value pair should be on a new line.
            </code>
          </div>
          <p class="example-title">Example 2:</p>
          <div class="example">
            <code class="code-block">Input: {nums:[4,3,2]}</code>
            <code class="code-block">Output: nums:[4,3,2]</code>
            <code class="code-block">
              Note: Each Key-Value pair should be on a new line.
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
        testCode: [`iterator({id:1,name:"user"})`,
        `iterator({nums:432})`,
        `iterator({age:21,legal:true})`,
        `iterator({obj: "easy"})`]
        
        
    
}