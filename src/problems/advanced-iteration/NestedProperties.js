export const AccessNestedProperties = {
    id: "access-nested-properties",
    title: "Access Nested Properties",
    examples: [
      {
        id: 1,
        input: `{
          "user": {
            "name": "John",
            "address": {
              "street": "123 Main St",
              "city": "New York",
              "zipcode": "10001"
            }
          }
        }`,
        output: `"New York"`,
      },
      {
        id: 2,
        input: `{
          "user": {
            "name": "Jane",
            "address": {
              "city": "Los Angeles",
              "zipcode": "90001"
            }
          }
        }`,
        output: `undefined`,
      },
      {
        id: 3,
        input: `{
          "company": {
            "name": "ABC Inc.",
            "employees": [
              {
                "name": "Alice",
                "department": {
                  "name": "HR"
                }
              },
              {
                "name": "Bob"
              }
            ]
          }
        }`,
        output: `"HR"`,
      },
      {
        id: 4,
        input: `{
          "user": {
            "name": "Jack"
          }
        }`,
        output: `undefined`,
      }
    ],
    header: `
      <div class="difficulty-container">
        <p class="difficulty">Difficulty: Medium</p>  
      </div>`,
    body: `
      <div class="problem-statement">
        <h5 class="subtitle">Problem Statement</h5>
        <p class="description">
          Create a function named <code>safeAccess</code> that takes a nested object and a string representing a property path as arguments and returns the value at that path in the object. If any part of the path is undefined, return <code>undefined</code>. Utilize the optional chaining operator (<code>?.</code>) for safe property access.
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: {"user": {"name": "John", "address": {"street": "123 Main St", "city": "New York", "zipcode": "10001"}}}</code>
          <code class="code-block">Output: "New York"</code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: {"user": {"name": "Jane", "address": {"city": "Los Angeles", "zipcode": "90001"}}}</code>
          <code class="code-block">Output: undefined</code>
        </div>
      </div>
      <div class="constraints">
        <h5 class="constraints-title">Constraints</h5>
        <ul class="constraints-list">
          <li class="constraint-item">The input object may be arbitrarily nested.</li>
          <li class="constraint-item">The property path string may contain multiple levels separated by dots.</li>
        </ul>
      </div>
    `,
    testCode: [
      `safeAccess({"user": {"name": "John", "address": {"street": "123 Main St", "city": "New York", "zipcode": "10001"}}}, "user.address.city")`,
      `safeAccess({"user": {"name": "Jane", "address": {"city": "Los Angeles", "zipcode": "90001"}}}, "user.address.street")`,
      `safeAccess({"company": {"name": "ABC Inc.", "employees": [{"name": "Alice", "department": {"name": "HR"}},{"name": "Bob"}]}}, "company.employees[0].department.name")`,
      `safeAccess({"user": {"name": "Jack"}}, "user.address.city")`
    ]
  }
  