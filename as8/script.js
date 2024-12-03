const gameState = {
  currentStep: 0,
  dialogue: [],
  score: 0
};

const dialogueSteps = [{
    girlfriend: "女友：（戳戳）寶寶，我今天心情不好所以去買了麵包。",
    choices: [{
        text: "你買了什麼麵包？怎麼沒有買我的？",
        next: 1
      },
      {
        text: "寶你怎麼了？怎麼會心情不好？",
        next: 2
      }
    ]
  },
  {
    girlfriend: "女友：我說我今天心情不好買麵包誒！",
    choices: [{
        text: "所以你買了什麼麵包？",
        next: 3,
        score: -1
      },
      {
        text: "寶貝你怎麼了？",
        next: 2,
        score: -1
      }
    ]
  },
  {
    girlfriend: "女友：就是今天主管%#$%^&&。",
    choices: [{
        text: "(陳述事實)告訴女友是他的問題。",
        next: 3,
        score: 1
      },
      {
        text: "（提供情緒價值）寶你怎麼這麼可憐，要好好休息喔。",
        next: 4,
        score: 3
      }
    ]
  },
  {
    girlfriend: "(女友爆氣R.I.P)",
    choices: [{
      text: "（重生，再試一次）",
      next: 0,
      score: 0
    }]
  },
  {
    girlfriend: "謝謝寶寶聽我說...好愛你喔～",
    choices: [{
      text: "（恭喜你成功存活！）",
      next: 5,
      score: 0
    }]
  },
  {
    girlfriend: "（遊戲結束）"
  }
];

function updateDialogue(message, isGirlfriend = true) {
  const dialogueDiv = document.getElementById('dialogue');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isGirlfriend ? 'girlfriend-message' : 'player-message'}`;
  messageDiv.textContent = message;
  dialogueDiv.appendChild(messageDiv);
}

function updateChoices(choices) {
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';
  choices.forEach(choice => {
    const button = document.createElement('button');
    button.className = 'choice-btn';
    button.textContent = choice.text;
    button.onclick = () => makeChoice(choice);
    choicesDiv.appendChild(button);
  });
}

function makeChoice(choice) {
  updateDialogue(choice.text, false);
  if (choice.score) {
    gameState.score += choice.score;
  }

  gameState.currentStep = choice.next;
  if (gameState.currentStep === 0) {
    document.getElementById('dialogue').innerHTML = '';
  }

  const nextStep = dialogueSteps[gameState.currentStep];
  if (nextStep) {
    updateDialogue(nextStep.girlfriend);
    updateChoices(nextStep.choices);
  }
}

// 開始遊戲
window.onload = () => {
  const firstStep = dialogueSteps[0];
  updateDialogue(firstStep.girlfriend);
  updateChoices(firstStep.choices);
};
