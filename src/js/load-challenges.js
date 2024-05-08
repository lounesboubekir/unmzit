// Array of challenge file paths
const challengeFiles = [
    'src/challenges/osint.html',
    'src/challenges/detctive.html', 
    'src/challenges/crypto.html', 
    'src/challenges/math.html',
    'src/challenges/codeing.html'
    
  ];
  
  // Function to load a challenge file
  function loadChallenge(filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(html => {
        const challengeContainer = document.getElementById('challenges');
        const div = document.createElement('div');
        div.innerHTML = html;
        challengeContainer.appendChild(div);
      })
      .catch(error => console.error(`Error loading ${filePath}:`, error));
  }
  
  // Load all challenge files
  challengeFiles.forEach(loadChallenge);