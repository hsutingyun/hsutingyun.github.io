// Banner Animation
console.clear();
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: true
      }
    })
    .to("img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero", {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
});

// Memory Card Game
class MemoryGame {
  // Memory Game code remains unchanged
}

// Text Adventure Game
class TextAdventure {
  // Text Adventure code remains unchanged
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Memory Game when scrolled into view
  ScrollTrigger.create({
    trigger: ".memory-game",
    start: "top center",
    onEnter: () => {
      const game = new MemoryGame();
      game.initialize();
    }
  });

  // Initialize Text Adventure
  const adventure = new TextAdventure();
  adventure.initialize();

  // Video API Integration
  const video = document.getElementById('main-video');
  if (video) {
    // Video event listeners remain unchanged
  }
});


///////////////////////////////////
// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Banner Image Zoom Effect
gsap.to(".banner-image", {
  scale: 1.2,
  ease: "none",
  scrollTrigger: {
    trigger: "#banner",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// Introduction Parallax and Animation
gsap.to(".parallax-text", {
  y: 0,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#introduction",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none reverse"
  }
});

// Memory Card Game
class MemoryGame {
  constructor() {
    this.cards = [];
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.initialized = false;
  }

  initialize() {
    if (this.initialized) return;

    const cardContainer = document.querySelector('.cards-container');
    const cardPairs = [1, 1, 2, 2, 3, 3, 4, 4]; // 可以增加更多配對
    this.cards = this.shuffle(cardPairs);

    this.cards.forEach((value, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.dataset.value = value;
      card.dataset.index = index;
      card.addEventListener('click', () => this.flipCard(card));
      cardContainer.appendChild(card);
    });

    this.initialized = true;
  }

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  flipCard(card) {
    if (this.flippedCards.length === 2) return;
    if (card.classList.contains('flipped')) return;

    card.classList.add('flipped');
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      setTimeout(() => this.checkMatch(), 500);
    }
  }

  checkMatch() {
    const [card1, card2] = this.flippedCards;
    const match = card1.dataset.value === card2.dataset.value;

    if (match) {
      this.matchedPairs++;
      if (this.matchedPairs === this.cards.length / 2) {
        alert('恭喜你完成遊戲！');
      }
    } else {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
    }

    this.flippedCards = [];
  }
}

// Text Adventure Game
class TextAdventure {
  constructor() {
    this.currentScene = 'start';
    this.storyData = {
      start: {
        text: '請選擇您要體驗的視角：',
        choices: [{
            text: '雇主視角',
            nextScene: 'employer_1'
          },
          {
            text: '移工視角',
            nextScene: 'worker_1'
          },
          {
            text: '民眾視角',
            nextScene: 'public_1'
          }
        ]
      },
      employer_1: {
        text: '作為雇主，您面臨...',
        choices: [{
            text: '選項A',
            nextScene: 'employer_2a'
          },
          {
            text: '選項B',
            nextScene: 'employer_2b'
          }
        ]
      },
      worker_1: {
        text: '作為移工，您正在...',
        choices: [{
            text: '選項A',
            nextScene: 'worker_2a'
          },
          {
            text: '選項B',
            nextScene: 'worker_2b'
          }
        ]
      },
      // 可以繼續添加更多場景
    };
  }

  initialize() {
    this.displayScene(this.currentScene);
  }

  displayScene(sceneId) {
    const scene = this.storyData[sceneId];
    const storyText = document.getElementById('story-text');
    const choices = document.getElementById('choices');

    storyText.textContent = scene.text;
    choices.innerHTML = '';

    scene.choices.forEach(choice => {
      const button = document.createElement('button');
      button.className = 'choice-btn';
      button.textContent = choice.text;
      button.addEventListener('click', () => this.makeChoice(choice.nextScene));
      choices.appendChild(button);
    });
  }

  makeChoice(nextScene) {
    this.currentScene = nextScene;
    this.displayScene(nextScene);
  }
}

// Sticky Section
ScrollTrigger.create({
  trigger: ".sticky-section",
  start: "top top",
  end: "bottom bottom",
  pin: ".sticky-image"
});

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Memory Game when scrolled into view
  ScrollTrigger.create({
    trigger: ".memory-game",
    start: "top center",
    onEnter: () => {
      const game = new MemoryGame();
      game.initialize();
    }
  });

  // Initialize Text Adventure
  const adventure = new TextAdventure();
  adventure.initialize();

  // Video API Integration
  const video = document.getElementById('main-video');
  if (video) {
    // Add video event listeners
    video.addEventListener('play', () => {
      console.log('Video started playing');
    });

    video.addEventListener('pause', () => {
      console.log('Video paused');
    });

    // Add custom video controls if needed
    // ...
  }
});

