export const WordFrequencyCounter = {
    id: "word-frequency-counter",
    title: "Word Frequency Counter",
    examples: [
      {
        id: 1,
        input: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."`,
        output: `{
          Lorem: 1,
          ipsum: 1,
          dolor: 1,
          sit: 1,
          amet: 1,
          consectetur: 1,
          adipiscing: 1,
          elit: 1,
          Sed: 1,
          do: 1,
          eiusmod: 1,
          tempor: 1,
          incididunt: 1,
          ut: 1,
          labore: 1,
          et: 1,
          dolore: 1,
          magna: 1,
          aliqua: 1
        }`,
      },
      {
        id: 2,
        input: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
        output: `{
          Lorem: 1,
          ipsum: 1,
          dolor: 2,
          sit: 1,
          amet: 1,
          consectetur: 1,
          adipiscing: 1,
          elit: 1,
          Sed: 1,
          do: 1,
          eiusmod: 1,
          tempor: 1,
          incididunt: 1,
          ut: 2,
          labore: 1,
          et: 1,
          dolore: 2,
          magna: 1,
          aliqua: 1,
          Ut: 1,
          enim: 1,
          ad: 1,
          minim: 1,
          veniam: 1,
          quis: 1,
          nostrud: 1,
          exercitation: 1,
          ullamco: 1,
          laboris: 1,
          nisi: 1,
          aliquip: 1,
          ex: 1,
          ea: 1,
          commodo: 1,
          consequat: 1,
          Duis: 1,
          aute: 1,
          irure: 1,
          in: 2,
          reprehenderit: 1,
          voluptate: 1,
          velit: 1,
          esse: 1,
          cillum: 1,
          eu: 1,
          fugiat: 1,
          nulla: 1,
          pariatur: 1,
          Excepteur: 1,
          sint: 1,
          occaecat: 1,
          cupidatat: 1,
          non: 1,
          proident: 1,
          sunt: 1,
          culpa: 1,
          qui: 1,
          officia: 1,
          deserunt: 1,
          mollit: 1,
          anim: 1,
          id: 1,
          est: 1,
          laborum: 1
        }`,
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
          Create a function named <code>countWordFrequency</code> that takes a string of text as input and returns an object containing the frequency of each word in the text. 
        </p>
      </div>
      <div class="sample-test-cases">
        <h5 class="test-case-title">Sample Test Cases</h5>
        <p class="example-title">Example 1:</p>
        <div class="example">
          <code class="code-block">Input: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</code>
          <code class="code-block">Output: {"Lorem": 1, "ipsum": 1, "dolor": 1, "sit": 1, "amet": 1, "consectetur": 1, "adipiscing": 1, "elit": 1, "Sed": 1, "do": 1, "eiusmod": 1, "tempor": 1, "incididunt": 1, "ut": 1, "labore": 1, "et": 1, "dolore": 1, "magna": 1, "aliqua": 1}</code>
        </div>
        <p class="example-title">Example 2:</p>
        <div class="example">
          <code class="code-block">Input: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</code>
          <code class="code-block">Output: {"Lorem": 1, "ipsum": 1, "dolor": 2, "sit": 1, "amet": 1, "consectetur": 1, "adipiscing": 1, "elit": 1, "Sed": 1, "do": 1, "eiusmod": 1, "tempor": 1, "incididunt": 1, "ut": 2, "labore": 1, "et": 1, "dolore": 2, "magna": 1, "aliqua": 1, "Ut": 1, "enim": 1, "ad": 1, "minim": 1", "veniam": 1, "quis": 1, "nostrud": 1, "exercitation": 1, "ullamco": 1, "laboris": 1, "nisi": 1, "aliquip": 1, "ex": 1, "ea": 1, "commodo": 1, "consequat": 1, "Duis": 1, "aute": 1, "irure": 1, "in": 2, "reprehenderit": 1, "voluptate": 1, "velit": 1, "esse": 1, "cillum": 1, "eu": 1, "fugiat": 1, "nulla": 1, "pariatur": 1, "Excepteur": 1, "sint": 1, "occaecat": 1, "cupidatat": 1, "non": 1, "proident": 1, "sunt": 1, "culpa": 1, "qui": 1, "officia": 1, "deserunt": 1, "mollit": 1, "anim": 1, "id": 1, "est": 1, "laborum": 1}</code>
      </div>
    </div>
    <div class="constraints">
      <h5 class="constraints-title">Constraints</h5>
      <ul class="constraints-list">
        <li class="constraint-item">Words are case-sensitive, so "Hello" and "hello" are considered different words.</li>
        <li class="constraint-item">Ignore punctuation and special characters while counting words.</li>
      </ul>
    </div>
  `,
  testCode: [
    `countWordFrequency("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")`,
    `countWordFrequency("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")`
  ]
};
  