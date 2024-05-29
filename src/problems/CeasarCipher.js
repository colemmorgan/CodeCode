export const CaesarCipher = {
    id: "caesar-cipher",
    title: "Caesar Cipher",
    examples: [
        {
            "id": 1,
            "original": "HELLO",
            "encrypted": "KHOOR"
          },
          {
            "id": 2,
            "original": "WORLD",
            "encrypted": "ZRUOG"
          },
          {
            "id": 3,
            "original": "CAESAR",
            "encrypted": "FDHVDU"
          },
          {
            "id": 4,
            "original": "SHIFT",
            "encrypted": "VKLIW"
          },
          {
            "id": 5,
            "original": "CIPHER",
            "encrypted": "FLPKHU"
          }
    ],

    code: `
    <div class="container">
      <div class="content">
        <h3 class="title">Shift Cipher</h3>
        <div class="difficulty-container">
          <p class="difficulty">Difficulty: Easy 5-10 Minutes</p>
          <span class="like-icon">
            <AiOutlineLike />
          </span>
          <span class="dislike-icon">
            <AiOutlineDislike />
          </span>
        </div>
        <div class="problem-statement">
          <h5 class="subtitle">Problem Statement</h5>
          <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            officia aliquam vel sunt, reprehenderit adipisci unde molestias,
            accusantium doloremque cumque deleniti ipsum incidunt hic assumenda
            distinctio tenetur maxime corrupti! Laborum.
          </p>
        </div>
        <div class="sample-test-cases">
          <h5 class="test-case-title">Sample Test Cases</h5>
          <p class="example-title">Example 1:</p>
          <div class="example">
            <code class="code-block">Input: [2,3,5]</code>
            <code class="code-block">Output: True</code>
            <code class="code-block">
              Explanation: Each string can be rearranged to match another.
            </code>
          </div>
          <p class="example-title">Example 2:</p>
          <div class="example">
            <code class="code-block">Input: [2,3,5]</code>
            <code class="code-block">Output: True</code>
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
      </div>
    </div>`
}