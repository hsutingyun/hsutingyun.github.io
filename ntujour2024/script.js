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

//翻翻卡
$(document).ready(function () {
  $(window).scroll(function () {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const cardsSection = $('.cards-section');
    const cardsContainer = $('.cards-container');

    // 當捲動到第一個螢幕高度時，顯示卡片區域
    if (scrollPosition > windowHeight * 0.8) {
      cardsSection.addClass('visible');
      cardsContainer.addClass('visible');
    } else {
      cardsSection.removeClass('visible');
      cardsContainer.removeClass('visible');
    }

    // 控制提示文字的顯示
    if (scrollPosition > windowHeight * 1.5) {
      $('.prompt-text').css('opacity', '1');
    } else {
      $('.prompt-text').css('opacity', '0');
    }

    // 控制卡片翻轉
    if (scrollPosition > windowHeight * 2.5) {
      $('.box').addClass('flipped');
      $('.prompt-text').css('opacity', '0');
    } else {
      $('.box').removeClass('flipped');
    }
  });
});

// 文字冒險遊戲
class VisualNovel {
  constructor() {
    this.scenes = {
      start: {
        text: "你之前租過什麼樣的房子啊？",
        choices: [{
            text: "我之前住在套房，但空間太小了",
            next: "scene2a"
          },
          {
            text: "其實這是我第一次租房子",
            next: "scene2b"
          },
          {
            text: "我之前住學校宿舍",
            next: "scene2c"
          }
        ]
      },
      scene2a: {
        text: "這樣啊，那這間雙人房應該很適合你，空間比套房大很多喔！",
        choices: [{
            text: "房租大概是多少呢？",
            next: "scene3a"
          },
          {
            text: "附近有什麼生活機能嗎？",
            next: "scene3b"
          }
        ]
      },
      scene2b: {
        text: "第一次租房子啊！那我來跟你介紹一下這邊的環境吧！",
        choices: [{
            text: "好的，謝謝！",
            next: "scene3c"
          },
          {
            text: "我想先了解一下租金...",
            next: "scene3a"
          }
        ]
      },
      scene2c: {
        text: "學校宿舍畢竟有些限制，在外面住會自由很多！",
        choices: [{
            text: "對啊，所以想找間好一點的房子",
            next: "scene3d"
          },
          {
            text: "請問這邊的規定大概有哪些？",
            next: "scene3e"
          }
        ]
      },
      scene3a: {
        text: "這間雙人房是12000元，包含管理費和網路喔！",
        choices: [{
            text: "水電費呢？",
            next: "scene4a"
          },
          {
            text: "可以再談價格嗎？",
            next: "scene4b"
          }
        ]
      },
      // ... 可以繼續添加更多場景
    };

    this.currentScene = 'start';
    this.init();
  }

  init() {
    this.showScene(this.currentScene);
  }

  showScene(sceneId) {
    const scene = this.scenes[sceneId];
    if (!scene) return;

    // 更新對話文本
    const dialogText = document.getElementById('dialog-text');
    dialogText.textContent = scene.text;

    // 更新選項按鈕
    const choices = document.getElementById('choices');
    choices.innerHTML = '';

    scene.choices.forEach(choice => {
      const button = document.createElement('button');
      button.className = 'choice-button';
      button.textContent = choice.text;
      button.addEventListener('click', () => this.makeChoice(choice.next));
      choices.appendChild(button);
    });
  }

  makeChoice(nextScene) {
    this.currentScene = nextScene;
    this.showScene(nextScene);
  }
}
// 轉場
document.addEventListener("DOMContentLoaded", () => {
  // Selecting DOM Elements
  const deleteButton = document.getElementById("delete-image");
  const displayedImage = document.getElementById("displayed-image");
  const dissolveFilter = document.getElementById("dissolve-filter");
  const displacementMap = dissolveFilter.querySelector("feDisplacementMap");
  const bigNoise = dissolveFilter.querySelector(
    'feTurbulence[result="bigNoise"]'
  );

  const safariWarning = document.querySelector(".safari-warning");
  const mainContainer = document.querySelector(".container");

  let isAnimating = false; // Flag to prevent multiple animations

  /**
   * Function to detect Safari browser
   * @returns {boolean} - True if Safari, false otherwise
   */
  function isSafariBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    return (
      ua.includes("safari") && !ua.includes("chrome") && !ua.includes("android")
    );
  }

  // Check if the browser is Safari
  if (isSafariBrowser()) {
    // Hide the main content
    mainContainer.classList.add("hidden");
    // Show the Safari warning message
    safariWarning.classList.remove("hidden");
    return; // Exit the script to prevent further execution
  }

  // Array of Image URLs
  const images = [
    "https://i.ibb.co/2sxT6jZ/Retro-80s-Human-Flying-Poster-cropped.jpg",
    "https://i.ibb.co/W5qWCkK/mishkadoing-summer-flowers-sky-close-up-details-painting-grad-0e9886ef-403e-4514-866f-e7806fa3dad8-1.jpg",
    "https://i.ibb.co/Xp6s8KR/Monet-Flowers-Rocks-Corals.png",
    "https://i.ibb.co/cYp3hCD/Field-of-Wildflowers-Constellations.png",
    "https://i.ibb.co/5FP5HD9/Summer-Flowers-Sky-Close-Up.png",
    "https://i.ibb.co/cL1fKgc/Summer-Flowers-Painting.png"
  ];

  let currentIndex = 0; // Track the current image index

  /**
   * Sets a random seed for the turbulence effect to vary the noise pattern
   */
  function setRandomSeed() {
    const randomSeed = Math.floor(Math.random() * 1000);
    bigNoise.setAttribute("seed", randomSeed);
  }

  /**
   * Easing function for smooth animation (Ease Out Cubic)
   * @param {number} t - Current time progress (0 to 1)
   * @returns {number} - Eased progress
   */
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  const maxDisplacementScale = 2000; // Maximum displacement scale for the effect

  /**
   * Displays the next image in the array with reset styles
   */
  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    displayedImage.src = images[currentIndex];
    displayedImage.style.display = "block";
    displayedImage.style.transform = "scale(1)";
    displayedImage.style.opacity = "1";
    displacementMap.setAttribute("scale", "0");

    deleteButton.classList.remove("hidden");
  }

  /**
   * Handles the delete button click event to trigger the dissolve animation
   */
  deleteButton.addEventListener("click", () => {
    // Prevent animation if already animating or image is hidden
    if (isAnimating || displayedImage.style.display === "none") return;
    isAnimating = true;

    setRandomSeed(); // Vary the noise pattern

    deleteButton.classList.add("hidden"); // Hide the delete button during animation

    const duration = 1000; // Animation duration in milliseconds
    const startTime = performance.now(); // Record the start time

    /**
     * Animation loop using requestAnimationFrame for smooth updates
     * @param {number} currentTime - The current time in milliseconds
     */
    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // Clamp progress between 0 and 1
      const easedProgress = easeOutCubic(progress); // Apply easing

      // Calculate and apply displacement scale based on eased progress
      const displacementScale = easedProgress * maxDisplacementScale;
      displacementMap.setAttribute("scale", displacementScale);

      // Slightly scale the image for a dynamic effect
      const scaleFactor = 1 + 0.1 * easedProgress;
      displayedImage.style.transform = `scale(${scaleFactor})`;

      // Adjust image opacity to create a fading effect
      let opacity;
      if (progress < 0.5) {
        opacity = 1;
      } else {
        const opacityProgress = (progress - 0.5) / 0.5;
        opacity = 1 - opacityProgress;
      }
      displayedImage.style.opacity = opacity;

      if (progress < 1) {
        // Continue the animation
        requestAnimationFrame(animate);
      } else {
        // Reset styles and show the next image after animation completes
        setTimeout(() => {
          displayedImage.style.display = "none";
          displayedImage.style.transform = "scale(1)";
          displayedImage.style.opacity = "1";
          displacementMap.setAttribute("scale", "0");
          isAnimating = false;
          showNextImage();
        }, 0);
      }
    }

    // Start the animation
    requestAnimationFrame(animate);
  });

  // Initialize the first image display
  displayedImage.src = images[currentIndex];
  displayedImage.style.display = "block";
});
// Video
// script.js
class ScrollytellingVideo {
  constructor() {
    this.video = document.getElementById('main-video');
    this.sections = document.querySelectorAll('.content-section');
    this.currentSection = 0;
    this.isScrolling = false;
    this.scrollTimeout = null;

    this.init();
  }

  init() {
    // 初始化 Intersection Observer
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;
          const videoTime = parseFloat(section.dataset.videoTime);
          this.playVideoAtTime(videoTime);
          section.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, options);

    // 觀察所有段落
    this.sections.forEach(section => {
      this.observer.observe(section);
    });

    // 監聽滾動事件
    window.addEventListener('scroll', () => {
      if (!this.isScrolling) {
        window.requestAnimationFrame(() => {
          this.handleScroll();
          this.isScrolling = false;
        });
      }
      this.isScrolling = true;
    });

    // 初始化視頻控制
    this.video.addEventListener('loadedmetadata', () => {
      this.video.currentTime = 0;
    });
  }

  playVideoAtTime(time) {
    if (this.video.readyState >= 2) {
      this.video.currentTime = time;
      this.video.play().catch(error => {
        console.log("Video play failed:", error);
      });
    }
  }

  handleScroll() {
    // 計算當前滾動位置相對於文檔高度的百分比
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    // 基於滾動百分比調整視頻透明度
    const overlay = document.querySelector('.video-overlay');
    overlay.style.backgroundColor = `rgba(0, 0, 0, ${0.3 + (scrollPercent / 200)})`;

    // 防抖動處理
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.video.pause();
    }, 150);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ScrollytellingVideo();
});
// 當網頁載入完成後初始化遊戲
//document.addEventListener('DOMContentLoaded', () => {
//new VisualNovel();
//});

// Banner Animation Claude.ai
//console.clear();
//gsap.registerPlugin(ScrollTrigger);
//window.addEventListener("load", () => {
//gsap
//.timeline({
//scrollTrigger: {
//trigger: ".wrapper",
//start: "top top",
//end: "+=150%",
//pin: true,
//scrub: true,
//markers: true
//}
//})
//.to("img", {
//scale: 2,
//z: 350,
//transformOrigin: "center center",
//ease: "power1.inOut"
//})
//.to(
//".section.hero", {
//scale: 1.1,
//transformOrigin: "center center",
//ease: "power1.inOut"
//},
//"<"
//);
//});

// Memory Card Game
//class MemoryGame {
// Memory Game code remains unchanged
//}

// Text Adventure Game
//class TextAdventure {
// Text Adventure code remains unchanged
}

// Initialize components when DOM is loaded
//document.addEventListener('DOMContentLoaded', () => {
// Initialize Memory Game when scrolled into view
//ScrollTrigger.create({
//trigger: ".memory-game",
//start: "top center",
//onEnter: () => {
//const game = new MemoryGame();
//game.initialize();
//}
//});

// Initialize Text Adventure
//const adventure = new TextAdventure();
//adventure.initialize();

// Video API Integration
//const video = document.getElementById('main-video');
//if (video) {
// Video event listeners remain unchanged
//}
//});


///////////////////////////////////
// Initialize GSAP
//gsap.registerPlugin(ScrollTrigger);

// Banner Image Zoom Effect
//gsap.to(".banner-image", {
//scale: 1.2,
//ease: "none",
//scrollTrigger: {
//trigger: "#banner",
//start: "top top",
//end: "bottom top",
//scrub: true
//}
//});

// Introduction Parallax and Animation
//gsap.to(".parallax-text", {
//y: 0,
//opacity: 1,
//duration: 1,
//scrollTrigger: {
//trigger: "#introduction",
//start: "top center",
//end: "bottom center",
//toggleActions: "play none none reverse"
//}
//});

// Memory Card Game
//class MemoryGame {
//constructor() {
//this.cards = [];
//this.flippedCards = [];
//this.matchedPairs = 0;
//this.initialized = false;
//}

//initialize() {
//if (this.initialized) return;

//const cardContainer = document.querySelector('.cards-container');
//const cardPairs = [1, 1, 2, 2, 3, 3, 4, 4]; // 可以增加更多配對
//this.cards = this.shuffle(cardPairs);

//    this.cards.forEach((value, index) => {
//    const card = document.createElement('div');
//  card.className = 'card';
//card.dataset.value = value;
//card.dataset.index = index;
//card.addEventListener('click', () => this.flipCard(card));
//cardContainer.appendChild(card);
//});

//this.initialized = true;
//}

//shuffle(array) {
//return array.sort(() => Math.random() - 0.5);
//}

//flipCard(card) {
//if (this.flippedCards.length === 2) return;
//if (card.classList.contains('flipped')) return;

//    card.classList.add('flipped');
//  this.flippedCards.push(card);

//if (this.flippedCards.length === 2) {
// setTimeout(() => this.checkMatch(), 500);
//}
//}

//checkMatch() {
//const [card1, card2] = this.flippedCards;
//const match = card1.dataset.value === card2.dataset.value;

// if (match) {
// this.matchedPairs++;
// if (this.matchedPairs === this.cards.length / 2) {
//  alert('恭喜你完成遊戲！');
//}
//} else {
//card1.classList.remove('flipped');
//card2.classList.remove('flipped');
// }

//this.flippedCards = [];
// }
//}

// Text Adventure Game
//class TextAdventure {
//constructor() {
//this.currentScene = 'start';
//this.storyData = {
// start: {
// text: '請選擇您要體驗的視角：',
//choices: [{
//  text: '雇主視角',
//nextScene: 'employer_1'
//},
//{
// text: '移工視角',
//nextScene: 'worker_1'
//},
//{
//text: '民眾視角',
//nextScene: 'public_1'
//}
// ]
//},
//employer_1: {
//text: '作為雇主，您面臨...',
//choices: [{
//  text: '選項A',
//nextScene: 'employer_2a'
//},
//{
//text: '選項B',
//nextScene: 'employer_2b'
//}
//]
//},
//worker_1: {
/// text: '作為移工，您正在...',
//choices: [{
//  text: '選項A',
//nextScene: 'worker_2a'
//},
///{
//text: '選項B',
//nextScene: 'worker_2b'
//}
/]
//},
// 可以繼續添加更多場景
//};
//}

//initialize() {
//this.displayScene(this.currentScene);
//}

//displayScene(sceneId) {
//const scene = this.storyData[sceneId];
//const storyText = document.getElementById('story-text');
//const choices = document.getElementById('choices');

//   storyText.textContent = scene.text;
//   choices.innerHTML = '';

//  scene.choices.forEach(choice => {
//    const button = document.createElement('button');
//    button.className = 'choice-btn';
//    button.textContent = choice.text;
//   button.addEventListener('click', () => this.makeChoice(choice.nextScene));
//   choices.appendChild(button);
//  });
// }

//makeChoice(nextScene) {
//  this.currentScene = nextScene;
//  this.displayScene(nextScene);
// }
//}

// Sticky Section
//ScrollTrigger.create({
// trigger: ".sticky-section",
//start: "top top",
//end: "bottom bottom",
//pin: ".sticky-image"
//});

// Initialize components when DOM is loaded
//document.addEventListener('DOMContentLoaded', () => {
// Initialize Memory Game when scrolled into view
//ScrollTrigger.create({
//  trigger: ".memory-game",
// start: "top center",
// onEnter: () => {
//   const game = new MemoryGame();
//   game.initialize();
//  }
//});

// Initialize Text Adventure
// const adventure = new TextAdventure();
// adventure.initialize();

// Video API Integration
// const video = document.getElementById('main-video');
// if (video) {
// Add video event listeners
//  video.addEventListener('play', () => {
//    console.log('Video started playing');
//  });

// video.addEventListener('pause', () => {
//    console.log('Video paused');
//  });

// Add custom video controls if needed
// ...
// }
//});
