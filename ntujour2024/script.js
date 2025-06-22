// Showing and hiding loading screen elements
document.addEventListener('DOMContentLoaded', () => {
  var loadingScreen = document.querySelector(".loading-screen-content");
  loadingScreen.scrollIntoView();
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "hidden";
  var button = document.querySelector(".finish-loading");
  button.setAttribute("disabled", "");
  window.addEventListener('load', () => {
    var button = document.querySelector(".finish-loading");
    button.removeAttribute("disabled");
    button.innerHTML = "確認";
    button.addEventListener('click', () => {
      var loadingScreen = document.querySelector(".loading-screen-content");
      loadingScreen.style.display = "none";
      document.body.style.overflowY = "";
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Banner Animation with GSAP
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
        }
      })
      .to(".hero img", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut"
      })
  });

  // scrolltrigger
  gsap.registerPlugin(ScrollTrigger);

  // 單個動畫控制
  gsap.to(".hero2", {
    scrollTrigger: {
      trigger: ".hero2",
      scrub: true,
      pin: true,
      start: "top top", // 改為從頂部開始
      end: "bottom -400%",
      toggleClass: "active",
      ease: "power2"
    }
  });

  // 圖片視差效果
  gsap.to(".hero2__image", {
    scrollTrigger: {
      trigger: ".hero2",
      scrub: 0.5,
      start: "top top",
      end: "bottom top" // 修改結束點
    },
    y: "-30%"
  });
  // monitor
  const monitorSection = () => {
    const monitorTexts = [
      "小麥（化名）來臺工作前已懷有身孕。",
      "這天他臥在雇主家中的床將孩子生下，",
      "面對時刻注視自己的監視器，",
      "他將棉被緊緊的覆蓋下半身，仍難掩嬰兒的哭聲迴盪……",
      "",
      "",
      ""
    ];

    const monitorText = document.querySelector('.monitor-text');
    const sceneLayers = document.querySelectorAll('.scene-layer');
    const typingHand = document.querySelector('.typing-hand');
    const stickyNotes = document.querySelectorAll('.sticky-note');

    if (!monitorText || !sceneLayers.length || !typingHand || !stickyNotes.length) {
      console.error('Monitor elements not found. Please check HTML structure.');
      return;
    }

    let notesShown = false;

    const showStickyNotes = () => {
      if (!notesShown) {
        notesShown = true;
        stickyNotes.forEach((note, index) => {
          setTimeout(() => {
            note.classList.add('visible');
          }, index * 500);
        });
      }
    };

    const hideStickyNotes = () => {
      notesShown = false;
      stickyNotes.forEach(note => {
        note.classList.remove('visible');
      });
    };

    const getScrollProgress = () => {
      const elem = document.querySelector('.scroll-container');
      const rect = elem.getBoundingClientRect();
      const top = rect.top;
      const height = rect.height;
      const dist = height * .9;
      const progress = top / dist * -1;
      return progress;
    }

    const updateScene = () => {
      const scrollProgress = getScrollProgress();
      const textIndex = Math.floor(scrollProgress * monitorTexts.length);

      if (textIndex >= 0 && textIndex < monitorTexts.length) {
        monitorText.textContent = monitorTexts[textIndex];
        monitorText.style.opacity = '1';
        monitorText.style.transform = 'translateY(0)';

        if (textIndex >= 4) {
          typingHand.style.opacity = '1';
          showStickyNotes();
        } else {
          typingHand.style.opacity = '0';
          hideStickyNotes();
        }
      }

      sceneLayers.forEach((layer, index) => {
        const speed = (index + 1) * 0.6;
        const yPos = -scrollProgress * 100 * speed;
        layer.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', updateScene);
    window.addEventListener('load', updateScene);
  };

  // Initialize monitor section
  monitorSection();
  // Flip Card Functionality
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', function () {
      this.classList.toggle('flipped');
    });
  });
  // Text Adventure Game
  class VisualNovelDialog {
    constructor() {
      this.characterData = {
        oldwang: {
          name: '小J',
          avatar: 'https://hsutingyun.github.io/ntujour2024/picture/Characters/12.png',
          scenes: {
            start: {
              dialog: [{
                  type: 'character',
                  text: "我住在這裡很多年了，從年輕時就住在這個地下室..."
                },
                {
                  type: 'question',
                  options: [{
                      text: "屋頂漏水、蟑螂滿地的頂加生記",
                      nextScene: "leakage"
                    },
                    {
                      text: "辛酸血淚累積而成的找房經驗",
                      nextScene: "experience"
                    }
                  ]
                }
              ]
            },
            leakage: {
              dialog: [{
                  type: 'character',
                  text: "每到雨季就特別困擾，房東也不太理會這些問題..."
                },
                {
                  type: 'question',
                  options: [{
                    text: "那您有想過要搬家嗎？",
                    nextScene: "moveOut"
                  }]
                }
              ]
            },
            moveOut: {
              dialog: [{
                  type: 'character',
                  text: "想是想啦，但現在房租都漲很多，找到便宜又合適的很難..."
                },
                {
                  type: 'question',
                  options: [{
                    text: "返回",
                    nextScene: "start"
                  }]
                }
              ]
            },
            experience: {
              dialog: [{
                  type: 'character',
                  text: "找房子真的很辛苦，常常看到合適的，一問價錢就傻眼了..."
                },
                {
                  type: 'question',
                  options: [{
                    text: "您都是怎麼找房子的呢？",
                    nextScene: "searchMethod"
                  }]
                }
              ]
            },
            searchMethod: {
              dialog: [{
                  type: 'character',
                  text: "以前都是到處問親朋好友，現在比較多用網路找，但有時候照片跟實際差很多..."
                },
                {
                  type: 'question',
                  options: [{
                    text: "返回",
                    nextScene: "start"
                  }]
                }
              ]
            }
          }
        }
      };

      this.currentCharacter = 'oldwang';
      this.currentScene = null;
      this.currentDialogIndex = 0;
      this.initializeGame();
    }

    initializeGame() {
      const dialogBox = document.querySelector('.dialog-box');
      // const continueHint = document.querySelector('.continue-hint');

      // 點擊對話框繼續對話
      dialogBox.addEventListener('click', () => {
        const currentScene = this.characterData[this.currentCharacter].scenes[this.currentScene];
        if (!currentScene) return;

        const currentDialog = currentScene.dialog[this.currentDialogIndex];
        if (!currentDialog) return;

        if (currentDialog.type === 'character') {
          this.currentDialogIndex++;
          this.updateDialog();
        }
      });

      this.startGame();
    }

    startGame() {
      const character = this.characterData[this.currentCharacter];

      // 設置角色資訊
      const avatar = document.querySelector('.character-avatar');
      const name = document.querySelector('.character-name');
      if (avatar) avatar.style.backgroundImage = `url(${character.avatar})`;
      if (name) name.textContent = character.name;

      this.showScene('start');
    }

    showScene(sceneId) {
      const character = this.characterData[this.currentCharacter];
      const scene = character.scenes[sceneId];

      if (!scene) {
        console.error('Scene not found:', sceneId);
        return;
      }

      this.currentScene = sceneId;
      this.currentDialogIndex = 0;
      this.updateDialog();
    }

    updateDialog() {
      const scene = this.characterData[this.currentCharacter].scenes[this.currentScene];
      const currentDialog = scene.dialog[this.currentDialogIndex];

      const dialogText = document.getElementById('dialog-text');
      // const questionBox = document.querySelector('.question-box');
      // const continueHint = document.querySelector('.continue-hint');

      if (!currentDialog) return;

      if (currentDialog.type === 'character') {
        // 顯示角色對話
        dialogText.textContent = currentDialog.text;
        // questionBox.style.display = 'none';
        // continueHint.style.display = 'block';
      } else if (currentDialog.type === 'question') {
        // 顯示問題選項
        dialogText.textContent = '';
        // questionBox.style.display = 'flex';
        // continueHint.style.display = 'none';

        // 更新問題按鈕
        // questionBox.innerHTML = '';
        currentDialog.options.forEach(option => {
          const button = document.createElement('button');
          button.className = 'question-btn';
          button.textContent = option.text;
          button.addEventListener('click', () => {
            this.showScene(option.nextScene);
          });
          // questionBox.appendChild(button);
        });
      }
    }
  }

  // 初始化遊戲
  window.onload = () => {
    const game = new VisualNovelDialog();
  };
  // Text Adventure Game Class
  class TextAdventure {
    constructor() {
      this.characterData = {
        eric: {
          name: '阿賀',
          avatar: 'https://hsutingyun.github.io/ntujour2024/picture/Characters/c1.PNG',
          scenes: {
            start: {
              text: "點擊角色 yada yada",
              choices: [{
                text: "林先生您好，請自我介紹一下。",
                nextScene: "step1"
              }, ]
            },
            step1: {
              text: "我在一個關心移工權益的NGO擔任志工，關心在台移工的基本人權，期許外國來台工作者在未來都能享有安心生育以及撫養小孩的權利。",
              choices: [{
                text: '您認為，「生育孩子」屬於移工在台灣工作期間的基本權益嗎？',
                nextScene: 'step2_1'
              }, {
                text: '若要改善移工的懷孕困境，得先從哪個部分著手呢？',
                nextScene: 'step2_2'
              }]
            },
            step2_1: {
              text: '《性工法》保障勞工的生育權益，而這當然也包含移工朋友們！\n雖然多數民眾對此抱持顧慮，但我們這些志工仍會透過社會倡議，讓更多人理解移工媽媽們的處境。',
              choices: [{
                text: 'yada yada',
                nextScene: 'ending'
              }]
            },
            ending: {
              text: "對話內容已結束，請按右上角按鍵，和其他人聊聊吧！。"
            }
          }
        },
        xiaolin: {
          name: 'Amy',
          avatar: 'https://hsutingyun.github.io/ntujour2024/picture/Characters/c2.PNG',
          scenes: {
            start: {
              text: "點擊角色yada yada",
              choices: [{
                text: "小姐您好，我們想聽聽您的工作生活。",
                nextScene: "step1"
              }]
            },
            step1: {
              text: "我是小雅，為了賺錢來到台灣工作。至今來台灣也五年了。丈夫和小孩都在印尼，幾乎兩年沒看到他們了。最近一起來的朋友剛懷孕，讓我也想要有第二胎……",
              choices: [{
                text: "請問您近期有懷孕的計畫嗎?",
                nextScene: "step2_1"
              }, {
                text: "如果在台灣懷孕了，您會怎麼尋求幫助呢?",
                nextScene: "step2_2"
              }]
            },
            step2_1: {
              text: "可能回印尼再考慮吧。現在的工作要每天24小時照顧阿公，還需要把阿公抱上床或馬桶，實在不適合懷孕……",
              choices: [{
                text: '您的朋友在台灣懷孕時，有人幫忙嗎?',
                nextScene: 'step3_1'
              }, {
                text: '為什麼這麼久沒有回家了呢?',
                nextScene: 'step3_2'
              }]
            },
            step2_2: {
              text: '不知道耶……我試圖在TikTok上尋找資訊，可是上面說法很亂，就連我朋友也不知道哪個才是真的。',
              choices: [{
                text: '您的朋友在台灣懷孕時，有人幫忙嗎?',
                nextScene: 'step3_1'
              }, {
                text: '為什麼這麼久沒有回家了呢?',
                nextScene: 'step3_2'
              }]
            },
            step3_1: {
              text: '她的朋友有幫忙吧……聽說有些台灣人能協助我們處理懷孕的事，但我不清楚是誰，也不知道怎麼找到他們。',
              choices: [{
                text: 'yada yada',
                nextScene: 'ending'
              }]
            },
            step3_2: {
              text: '雖然很想要回印尼看看家人，但是回去的話，這裡就沒人能照顧阿公了，沒有辦法啊……',
              choices: [{
                text: 'yada yada',
                nextScene: 'ending'
              }]
            },
            ending: {
              text: "對話內容已結束，請按右上角按鍵，和其他人聊聊吧！。"
            }
          }
        },
        oldwang: {
          name: '小J',
          avatar: 'https://hsutingyun.github.io/ntujour2024/picture/Characters/c3.PNG',
          scenes: {
            start: {
              text: "點擊角色 yada yada",
              choices: [{
                text: "黃女士您好，請問您有僱用外籍移工的經驗嗎?",
                nextScene: "step1"
              }, ]
            },
            step1: {
              text: '有，我曾經請過印尼移工照顧過媽媽，雖然那只有短短的三個月而已。',
              choices: [{
                text: '您覺得台灣人對於移工足夠友善嗎?',
                nextScene: 'step2_1'
              }, {
                text: '如果家裡的移工有在台懷孕的計畫，您會支持他嗎？',
                nextScene: 'step2_2'
              }]
            },
            step2_1: {
              text: '挺友善的吧。畢竟移工的工作是台灣人不太想做的，或多或少也是挺包容他們的……\n但老實說，新聞和FB上好像還是有一些比較偏激的意見存在啦。',
              choices: [{
                text: 'yada yada',
                nextScene: 'ending'
              }]
            },
            step2_2: {
              text: '我、我還是希望不要耶...…如果移工懷有身孕的同時還得把媽媽抱上抱下，感覺很容易受傷啊……若有個萬一，誰要負責呢？',
              choices: [{
                text: 'yada yada',
                nextScene: 'ending'
              }]
            },
            ending: {
              text: "對話內容已結束，請按右上角按鍵，和其他人聊聊吧！。"
            }
          }
        },
        fourth: {
          name: '小J',
          avatar: 'https://hsutingyun.github.io/ntujour2024/picture/Characters/c3.PNG',
          scenes: {
            start: {
              text: '點擊角色 yada yada',
              choices: [{
                text: '您好，我們有幾個問題想請教您。',
                nextScene: 'step1'
              }]
            },
            step1: {
              text: '你們好，我是在勞動部任職的小蔡，為台灣的勞工把關權益，有什麼好奇的都歡迎問我吧。',
              choices: [{
                text: '現今臺灣社會中，移工的權益問題為何對我們如此重要?',
                nextScene: 'step2_1'
              }, {
                text: '婦女移工的懷孕權益逐漸獲得保障，但移工寶寶的安置似乎仍是問題？',
                nextScene: 'step2_2'
              }]
            },
            step2_1: {
              text: '移工挹注許多產業的勞動力，如台灣高齡化後所面臨的人力缺口，就需要仰賴這群來自異鄉的朋友支持。\n因此，創造一個讓移工安心工作、平安養育的環境，以吸引移工來台灣，就會是社會的重要課題。',
              choices: [{
                text: 'yada yada',
                nextScene: 'ending'
              }]
            },
            step2_2: {
              text: '嗯……寶寶們後續的安置與醫療問題的確需要關心，但這方面是衛服部與其他單位負責，我們就比較難介入……\n實際上，許多社會工作需要各政府部門謹慎分工來完成，雖然依法行政有其必要，卻也因此缺乏彈性，讓改革難以完善。',
              choices: [{
                text: 'yada yada',
                nextScene: 'ending'
              }]
            },
            ending: {
              text: "對話內容已結束，請按右上角按鍵，和其他人聊聊吧！。"
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

  //數據
  let currentChart = null;
  const ctx = document.getElementById('dynamicChart').getContext('2d');

  // 創建圖表的函數
  function createChart(type, labels, data, prefix, title) {
    // 如果已經有圖表，先銷毀它
    if (currentChart) {
      currentChart.destroy();
    }

    // 根據圖表類型設置不同的配置
    const config = {
      type: type,
      data: {
        labels: labels,
        datasets: [{
          label: prefix,
          data: data,
          backgroundColor: [
            'rgba(255, 0, 0, 0.75)',
            'rgba(255, 221, 51, 0.5)',
            'rgba(255, 255, 255, 0.5)',
            'rgba(75, 192, 192, 0.5)'
          ],
          borderColor: [
            'rgb(255, 255, 255)',
            'rgb(255, 221, 51)',
            'rgb(255, 255, 255)',
            'rgb(255, 255, 255)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: title
          }
        }
      }
    };

    // 為不同類型的圖表添加特定選項
    if (type === 'line') {
      config.options.scales = {
        x: {
          border: {
            display: true,
            color: '#FAFAFA'
          }
        },
        y: {
          beginAtZero: true,
          border: {
            display: true,
            color: '#FAFAFA'
          }
        }
      };
    }

    Chart.defaults.color = '#FAFAFA';
    Chart.overrides['line'].plugins = {
      legend: {
        display: false
      }
    };
    // 創建新圖表
    currentChart = new Chart(ctx, config);
  }

  // 設置 Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section4 = entry.target;
        const chartType = section4.dataset.chart;
        const values = section4.dataset.values.split(',').map(Number);
        const labels = section4.dataset.labels.split(',');
        const prefix = section4.dataset.prefix;
        const title = section4.dataset.title;

        // 更新圖表
        createChart(chartType, labels, values, prefix, title);
      }
    });
  }, {
    threshold: 0.5
  });

  // 觀察所有段落
  document.querySelectorAll('.section4').forEach(section4 => {
    observer.observe(section4);
  });

  // 初始化第一個圖表
  const firstSection = document.querySelector('.section4');
  createChart(
    firstSection.dataset.chart,
    firstSection.dataset.labels.split(','),
    firstSection.dataset.values.split(',').map(Number)
  );

  // 圖文搭配
  const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section4 = entry.target;
        const chartType = section4.dataset.chart;
        const values = section4.dataset.values.split(',').map(Number);
        const labels = section4.dataset.labels.split(',');
        const prefix = section4.dataset.prefix;
        const title = section4.dataset.title;

        // 更新圖表
        createChart(chartType, labels, values, prefix, title);
      }
    });
  }, {
    threshold: 0.5
  });

  // 圖文搭配觀察器（新加入的）
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section5 = entry.target;
        const imageId = section5.dataset.image;

        // 隱藏所有圖片
        document.querySelectorAll('.sticky-image img').forEach(img => {
          img.classList.remove('active');
        });

        // 顯示對應的圖片
        document.querySelector(`.sticky-image img[data-image="${imageId}"]`).classList.add('active');
      }
    });
  }, {
    threshold: 0.5
  });

  // 分別觀察不同類型的段落
  document.querySelectorAll('.section4').forEach(section4 => {
    chartObserver.observe(section4);
  });

  document.querySelectorAll('.section5').forEach(section5 => {
    imageObserver.observe(section5);
  });

  // 時間軸
  (function () {
    "use strict";

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();

  // Video Background and Content Sections with ScrollTrigger
  // 處理文字動畫
  window.addEventListener('load', () => {
    document.querySelectorAll('.content-text6').forEach(content => {
      ScrollTrigger.create({
        trigger: content,
        start: 'top center',
        end: 'bottom center',
        toggleClass: 'active'
      });
    });
    document.querySelectorAll('.video-section6').forEach(section => {
      const video = section.querySelector('video');

      video.addEventListener('ended', () => {
        video.classList.add('blur');
      });
      video.addEventListener('play', () => {
        video.classList.remove('blur');
      });

      function pauseOthers(video) {
        document.querySelectorAll('video').forEach(v => {
          if (v !== video) {
            v.pause();
            v.classList.remove('active');
          }
        });
      }

      function playVideo(video) {
        video.play().catch(error => {
          console.log("Video play was prevented:", error);
        });
        video.classList.add('active');
      }

      function pauseVideo(video) {
        video.pause();
        video.classList.remove('active');
      }
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          pauseOthers(video);
          playVideo(video);
        },
        onLeave: () => {
          pauseVideo(video);
        },
        onEnterBack: () => {
          pauseOthers(video);
          playVideo(video);
        },
        onLeaveBack: () => {
          pauseVideo(video);
        }
      });
    });
  });

  // 處理影片播放
});
