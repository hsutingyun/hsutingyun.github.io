document.addEventListener('DOMContentLoaded', function () {
  // Banner Animation with GSAP
  console.clear();
  gsap.registerPlugin(ScrollTrigger);

  window.addEventListener("load", () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: true,
          markers: true
        }
      })
      .to(".hero img", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut"
      })
  });

  const contentSections = document.querySelectorAll('.content-section');

  // animate-storytelling 先暫放
  $(document).ready(function () {
    var div1_pos = $("#div1").offset().top;
    var space1_pos = $("#space1").offset().top;
    var winh = $(window).height();
    $(window).scroll(function () {
      var scrolled = $(window).scrollTop();
      var div1_scrolled = scrolled - div1_pos;
      if (div1_scrolled > 0 && scrolled < space1_pos - winh) {
        $("#naruto1").css(
          "left",
          $("#naruto1").data("left") + div1_scrolled * 0.01 + "%"
        );
        $("#sasuke1").css(
          "left",
          $("#sasuke1").data("left") - div1_scrolled * 0.02 + "%"
        );
        $("#naruto1").css(
          "top",
          $("#naruto1").data("top") + div1_scrolled * 0.055 + "%"
        );
        $("#sasuke1").css(
          "top",
          $("#sasuke1").data("top") + div1_scrolled * -0.06 + "%"
        );

        $("#naruto1").css(
          "width",
          $("#naruto1").data("width") + div1_scrolled * 0.01 + "%"
        );
        $("#sasuke1").css(
          "width",
          $("#sasuke1").data("width") + div1_scrolled * 0.01 + "%"
        );

        console.log(
          "div1_pos:" + div1_pos + "\tscrolled:" + scrolled + "\tspace1:" + space1_pos
        );
      }
    });
  });
  // Flip Card Functionality
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', function () {
      this.classList.toggle('flipped');
    });
  });

  // Text Adventure Game Class
  class TextAdventure {
    constructor() {
      this.characterData = {
        eric: {
          name: 'Eric',
          avatar: 'https://hsutingyun.github.io/ntujour2024/移工報導圖片/小J角色/小J1.png',
          scenes: {
            start: {
              text: "如果家裡照顧長者的移工懷孕的話，您會怎麼辦？",
              choices: [{
                  text: "那移工還能照顧爸爸嗎……但人家懷孕就辭退好像也不合乎情理。",
                  nextScene: "difficulties"
                },
                {
                  text: "為什麼這麼多年都選擇租屋呢？",
                  nextScene: "whyRent"
                }
              ]
            },
            difficulties: {
              text: "您有聽說過任何的協助資源嗎？",
              choices: [{
                  text: "這聽起來很辛苦呢",
                  nextScene: "experience"
                },
                {
                  text: "那你有想過買房嗎？",
                  nextScene: "buyHouse"
                }
              ]
            },
            experience: {
              text: "是啊，但也是種生活經驗...",
              choices: [{
                text: "返回",
                nextScene: "start"
              }]
            },
            buyHouse: {
              text: "當然想過，但目前的房價實在太高了...",
              choices: [{
                text: "返回",
                nextScene: "start"
              }]
            },
            whyRent: {
              text: "主要是因為工作地點常常變動...",
              choices: [{
                text: "返回",
                nextScene: "start"
              }]
            }
          }
        },
        xiaolin: {
          name: '小琳',
          avatar: 'https://hsutingyun.github.io/ntujour2024/移工報導圖片/小J角色/小J1.png',
          scenes: {
            start: {
              text: "你好，我是小琳，和先生帶著四個孩子一起租屋生活。",
              choices: [{
                  text: "帶著孩子租屋一定很不容易吧？",
                  nextScene: "familyLife"
                },
                {
                  text: "為什麼選擇租屋而不買房呢？",
                  nextScene: "whyRent"
                }
              ]
            },
            familyLife: {
              text: "確實不容易，特別是找房子的時候...",
              choices: [{
                text: "返回",
                nextScene: "start"
              }]
            },
            whyRent: {
              text: "現在的房價實在太高了，首付都付不起...",
              choices: [{
                text: "返回",
                nextScene: "start"
              }]
            }
          }
        },
        oldwang: {
          name: '老扁',
          avatar: 'https://hsutingyun.github.io/ntujour2024/移工報導圖片/小J角色/小J1.png',
          scenes: {
            start: {
              text: "我住在這裡很多年了，從年輕時就住在這個地下室...",
              choices: [{
                  text: "您為什麼會選擇住在地下室呢？",
                  nextScene: "whyBasement"
                },
                {
                  text: "這些年來生活上有遇到什麼困難嗎？",
                  nextScene: "difficulties"
                }
              ]
            },
            whyBasement: {
              text: "因為便宜，而且地點方便...",
              choices: [{
                text: "返回",
                nextScene: "start"
              }]
            },
            difficulties: {
              text: "颱風天最麻煩，地下室常常會淹水...",
              choices: [{
                text: "返回",
                nextScene: "start"
              }]
            }
          }
        }
      };

      this.currentCharacter = null;
      this.currentScene = null;
      this.initializeUI();
    }

    initializeUI() {
      const characterBtns = document.querySelectorAll('.character-btn');
      characterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const character = btn.dataset.character;
          this.startGame(character);
        });
      });

      const backBtn = document.querySelector('.back-btn');
      if (backBtn) {
        backBtn.addEventListener('click', () => this.returnToSelection());
      }
    }

    startGame(character) {
      console.log('Starting game with character:', character);
      this.currentCharacter = character;

      const gameContainers = document.querySelectorAll('.game-container');
      const charSelection = document.querySelector('.character-selection');
      const dialogContainer = gameContainers[1]; // 第二個 game-container
      const backBtn = document.querySelector('.back-btn');

      if (charSelection) charSelection.style.display = 'none';
      if (dialogContainer) dialogContainer.style.display = 'block';
      if (backBtn) backBtn.style.display = 'block';

      const avatar = document.querySelector('.character-avatar');
      if (avatar) {
        avatar.style.backgroundImage = `url(${this.characterData[character].avatar})`;
      }

      this.showScene('start');
    }

    showScene(sceneId) {
      console.log('Showing scene:', sceneId);
      const character = this.characterData[this.currentCharacter];
      const scene = character.scenes[sceneId];

      if (!scene) {
        console.error('Scene not found:', sceneId);
        return;
      }

      this.currentScene = sceneId;

      const dialogText = document.getElementById('dialog-text');
      const choicesContainer = document.querySelector('.choices');

      if (!dialogText || !choicesContainer) {
        console.error('Dialog elements not found!');
        return;
      }

      dialogText.textContent = scene.text;
      choicesContainer.innerHTML = '';

      scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice.text;
        button.addEventListener('click', () => this.showScene(choice.nextScene));
        choicesContainer.appendChild(button);
      });
    }

    returnToSelection() {
      const gameContainers = document.querySelectorAll('.game-container');
      const dialogContainer = gameContainers[1];
      const charSelection = document.querySelector('.character-selection');
      const backBtn = document.querySelector('.back-btn');

      if (dialogContainer) dialogContainer.style.display = 'none';
      if (charSelection) charSelection.style.display = 'block';
      if (backBtn) backBtn.style.display = 'none';

      this.currentCharacter = null;
      this.currentScene = null;
    }
  }

  // 初始化遊戲
  const game = new TextAdventure();

  // Image Transition Effects
  const deleteButton = document.getElementById('delete-image');
  const displayedImage = document.getElementById('displayed-image');

  if (deleteButton && displayedImage) {
    deleteButton.addEventListener('click', function () {
      displayedImage.style.transform = 'scale(0)';
      displayedImage.style.opacity = '0';
      setTimeout(() => {
        displayedImage.classList.add('hidden');
      }, 500);
    });
  }

  // Video Background and Content Sections with ScrollTrigger
  const video = document.querySelector('.video-container video');
  const articleContainer = document.querySelector('.article-container');

  if (video && articleContainer) {
    // 初始時暫停視頻
    video.pause();

    // 使用 GSAP ScrollTrigger 來控制視頻播放
    ScrollTrigger.create({
      trigger: '.article-container',
      start: 'top 100%', // 當 article-container 的頂部到達視窗 80% 的位置時
      end: 'bottom 20%', // 當 article-container 的底部到達視窗 20% 的位置時
      onEnter: () => {
        video.play().catch(error => {
          console.log("Video play was prevented:", error);
        });
      },
      onLeave: () => {
        video.pause();
      },
      onEnterBack: () => {
        video.play().catch(error => {
          console.log("Video play was prevented:", error);
        });
      },
      onLeaveBack: () => {
        video.pause();
      }
    });

    // 處理視頻循環
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play().catch(error => {
        console.log("Video replay was prevented:", error);
      });
    });

    // 處理頁面可見性變化
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        video.pause();
      } else {
        // 檢查是否在觸發區域內
        const trigger = ScrollTrigger.getById('videoTrigger');
        if (trigger && trigger.isActive) {
          video.play().catch(error => {
            console.log("Video play was prevented:", error);
          });
        }
      }
    });
  }

  // Intersection Observer for content sections
  const observerOptions = {
    root: null,
    threshold: 0.3,
    rootMargin: '0px'
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  contentSections.forEach(section => {
    sectionObserver.observe(section);
  });
});
