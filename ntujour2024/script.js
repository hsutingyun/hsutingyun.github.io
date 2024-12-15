// Showing and hiding loading screen elements
document.addEventListener('DOMContentLoaded', () => {
  var loadingScreen = document.querySelector(".loading-screen-content");
  loadingScreen.scrollIntoView();
  document.body.style.overflow = "hidden";
  var button = document.querySelector(".finish-loading");
  button.setAttribute("disabled", "");
  window.addEventListener('load', () => {
    var button = document.querySelector(".finish-loading");
    button.removeAttribute("disabled");
    button.innerHTML = "確認";
    button.addEventListener('click', () => {
      var loadingScreen = document.querySelector(".loading-screen-content");
      loadingScreen.style.display = "none";
      document.body.style.overflow = "";
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
          markers: false
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
        const speed = (index + 1) * 0.2;
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
      const continueHint = document.querySelector('.continue-hint');

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
      const questionBox = document.querySelector('.question-box');
      const continueHint = document.querySelector('.continue-hint');

      if (!currentDialog) return;

      if (currentDialog.type === 'character') {
        // 顯示角色對話
        dialogText.textContent = currentDialog.text;
        questionBox.style.display = 'none';
        continueHint.style.display = 'block';
      } else if (currentDialog.type === 'question') {
        // 顯示問題選項
        dialogText.textContent = '';
        questionBox.style.display = 'flex';
        continueHint.style.display = 'none';

        // 更新問題按鈕
        questionBox.innerHTML = '';
        currentDialog.options.forEach(option => {
          const button = document.createElement('button');
          button.className = 'question-btn';
          button.textContent = option.text;
          button.addEventListener('click', () => {
            this.showScene(option.nextScene);
          });
          questionBox.appendChild(button);
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
          avatar: 'https://hsutingyun.github.io/ntujour2024/picture/Characters/10.png',
          scenes: {
            start: {
              text: "如果家裡照顧長者的移工懷孕怎麼辦？",
              choices: [{
                text: "那移工還能照顧爸爸嗎……但人家懷孕就辭退好像也不合乎情理。",
                nextScene: "difficulties"
              }, ]
            },
            difficulties: {
              text: "您有聽說過任何的協助資源嗎？",
              choices: [{
                text: "沒有啊！網路資訊好複雜，看不懂啦……也不知道可以去哪裡問。",
                nextScene: "experience"
              }, ]
            },
            experience: {
              text: "仲介有針對這種情況說明如何處理嗎？",
              choices: [{
                text: "仲介說早早和懷孕移工解約比較好啦，我也不了解有沒有其他辦法。",
                nextScene: "ending"
              }]
            },
            ending: {
              text: "對話結束，請按上方按鈕返回。"
            }
          }
        },
        xiaolin: {
          name: 'Amy',
          avatar: 'https://hsutingyun.github.io/ntujour2024/picture/Characters/11.png',
          scenes: {
            start: {
              text: "如果懷孕的話，您會怎麼做呢？",
              choices: [{
                text: "還是想將小孩生下來吧，畢竟是個生命啊！",
                nextScene: "familyLife"
              }, ]
            },
            familyLife: {
              text: "若遇到雇主反對怎麼辦？",
              choices: [{
                text: "那樣只能離開了嗎？可是仲介費的債沒還完的話……我也不知道怎麼辦！",
                nextScene: "whyborn"
              }, ]
            },
            whyborn: {
              text: "那小孩如何撫養呢？",
              choices: [{
                text: "雖然很想送回家鄉，但是又不想加重家人的負擔...…或許會尋找臺灣有沒有朋友能幫忙照顧小孩。",
                nextScene: "ending"
              }]
            },
            ending: {
              text: "對話結束，請按上方按鈕返回。"
            }
          }
        },
        oldwang: {
          name: '小J',
          avatar: 'https://hsutingyun.github.io/ntujour2024/picture/Characters/12.png',
          scenes: {
            start: {
              text: "您認為懷孕移工的工作權需要保障嗎？",
              choices: [{
                text: "那當然！同樣是女性，懷孕就解雇的話太不合理了！",
                nextScene: "whyBasement"
              }, ]
            },
            whyBasement: {
              text: "那您認為我們目前政策有什麼缺失嗎?",
              choices: [{
                text: "比起缺失，倒不如說根本沒有好好推廣吧，移工和雇主對資訊的認知都不一樣！",
                nextScene: "policy"
              }]
            },
            policy: {
              text: "您知道有哪些措施可以應對雇主在移工待產期間的需求呢？",
              choices: [{
                text: "嗯…...我知道可以申請「暫緩轉換雇主函」，但詳細過程也不太清楚。",
                nextScene: "ending"
              }]
            },
            ending: {
              text: "對話結束，請按上方按鈕返回。"
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
  function createChart(type, labels, data) {
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
          label: '數據',
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
        maintainAspectRatio: false
      }
    };

    // 為不同類型的圖表添加特定選項
    if (type === 'line') {
      config.options.scales = {
        y: {
          beginAtZero: true
        }
      };
    }

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

        // 更新圖表
        createChart(chartType, labels, values);
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

        // 更新圖表
        createChart(chartType, labels, values);
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

  // Video Background and Content Sections with ScrollTrigger
  // 處理文字動畫
  window.addEventListener('load', () => {
    document.querySelectorAll('.content-text6').forEach(content => {
      ScrollTrigger.create({
        trigger: content,
        start: 'top center',
        end: 'bottom center',
        markers: true,
        toggleClass: 'active'
      });
    });
    document.querySelectorAll('.video-section6').forEach(section => {
      const video = section.querySelector('video');
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
  
      // 影片循環播放  
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        playVideo(video);
      });
    });
  });

  // 處理影片播放

  // babyending //
  let timer
  let rot
  const eye = $(".eye")
  const pupils = CSSRulePlugin.getRule(".eye:after")

  // Functions //
  // Moon
  function rotateMoon() {
    const rotateTL = gsap.timeline({
      repeat: -1,
      yoyo: true
    })
    rotateTL.set("#body", {
      transformOrigin: "50% 50%"
    })
    rotateTL.to("#body", {
      rotateZ: 12,
      duration: 6,
      ease: "power1.inOut"
    })
  }

  function floatMoon() {
    const floatTL = gsap.timeline({
      repeat: -1,
      yoyo: true
    })
    floatTL.to("#body", 2, {
      y: -6,
      ease: "power1.inOut"
    })

    const mouthCheeksTL = gsap.timeline({
      repeat: -1,
      yoyo: true
    })
    mouthCheeksTL.to("#mouth-cheeks", 2, {
      y: -3,
      ease: "power1.inOut"
    })
  }

  function shimmeringStars() {
    const starsTL = gsap.timeline({
      repeat: -1,
      delay: 1
    })

    starsTL.to("#star-7", .5, {
      morphSVG: "#star-7-morph",
      ease: "power3.Out"
    })
    starsTL.to("#star-7", .5, {
      morphSVG: "#star-7",
      ease: "power3.Out"
    })

    starsTL.to("#star-3", .5, {
      delay: -.15,
      morphSVG: "#star-3-morph",
      ease: "power3.Out"
    })
    starsTL.to("#star-3", .5, {
      morphSVG: "#star-3",
      ease: "power3.Out"
    })

    starsTL.to("#star-12", .5, {
      delay: -.35,
      morphSVG: "#star-12-morph",
      ease: "power3.Out"
    })
    starsTL.to("#star-12", .5, {
      morphSVG: "#star-12",
      ease: "power3.Out"
    })

    starsTL.to("#star-11", .5, {
      delay: -.7,
      morphSVG: "#star-11-morph",
      ease: "power3.Out"
    })
    starsTL.to("#star-11", .5, {
      morphSVG: "#star-11",
      ease: "power3.Out"
    })

    starsTL.to("#star-2", .5, {
      delay: -.35,
      morphSVG: "#star-2-morph",
      ease: "power3.Out"
    })
    starsTL.to("#star-2", .5, {
      morphSVG: "#star-2",
      ease: "power3.Out"
    })

    starsTL.to("#star-1", .5, {
      delay: -.7,
      morphSVG: "#star-1-morph",
      ease: "power3.Out"
    })
    starsTL.to("#star-1", .5, {
      morphSVG: "#star-1",
      ease: "power3.Out"
    })

    starsTL.to("#star-6", .5, {
      delay: -.7,
      morphSVG: "#star-6-morph",
      ease: "power3.Out"
    })
    starsTL.to("#star-6", .5, {
      morphSVG: "#star-6",
      ease: "power3.Out"
    })

    starsTL.to("#star-8", .5, {
      delay: -.9,
      morphSVG: "#star-8-morph",
      ease: "power3.Out"
    })
    starsTL.to("#star-8", .5, {
      morphSVG: "#star-8",
      ease: "power3.Out"
    })

    starsTL.to("#star-4", .5, {
      delay: -.9,
      morphSVG: "#star-4-morph",
      ease: "power3.Out"
    })
    starsTL.to("#star-4", .5, {
      morphSVG: "#star-4",
      ease: "power3.Out"
    })

    starsTL.to("#star-9", .5, {
      delay: -.35,
      morphSVG: "#star-9-morph",
      ease: "power3.Out"
    })
    starsTL.to("#star-9", .5, {
      morphSVG: "#star-9",
      ease: "power3.Out"
    })

    starsTL.to("#star-10", .5, {
      delay: -.35,
      morphSVG: "#star-10-morph",
      ease: "power3.Out"
    })
    starsTL.to("#star-10", .5, {
      morphSVG: "#star-10",
      ease: "power3.Out"
    })

    starsTL.to("#star-5", .5, {
      delay: -.35,
      morphSVG: "#star-5-morph",
      ease: "power3.Out"
    })
    starsTL.to("#star-5", .5, {
      morphSVG: "#star-5",
      ease: "power3.Out"
    })
  }

  // Pointer
  function track() {
    document.addEventListener("mousemove", (e) => {
      pointerEyesStart()
      pointerMouthStart()

      clearTimeout(timer)

      timer = setTimeout(() => {
        pointerEyesStop()
        pointerMouthStop()
      }, 300)
    })
  }

  function pointerEyesStart() {
    const x = (eye.offset().left) + (eye.width() / 2)
    const y = (eye.offset().top) + (eye.height() / 2)
    const rad = Math.atan2(event.pageX - x, event.pageY - y)
    rot = (rad * (180 / Math.PI) * -1) + 180
    gsap.to(eye, 0, {
      rotateZ: rot
    })
  }

  function pointerEyesStop() {}

  function pointerMouthStart() {
    gsap.to("#mouth", .5, {
      morphSVG: "#mouth-morph"
    })
    gsap.to("#teeth", .5, {
      y: -1
    })
  }

  function pointerMouthStop() {
    gsap.to("#mouth", .5, {
      morphSVG: "#mouth",
      ease: "back.out(1.7)"
    })
  }

  function shy() {
    $("#moon").on("mouseenter", () => {
      gsap.to("#cheek-left, #cheek-right", 1, {
        fill: "#f7d4e8"
      })
      gsap.to("#cheek-left, #cheek-right", 1, {
        scale: 1.5,
        y: 3,
        transformOrigin: "50% 50%"
      })

      gsap.to(pupils, 2, {
        bottom: "11px",
        ease: "elastic.out"
      })
    })
    $("#moon").on("mouseleave", () => {
      gsap.to("#cheek-left, #cheek-right", 1, {
        fill: "#d3dced"
      })
      gsap.to("#cheek-left, #cheek-right", 1, {
        scale: 1,
        y: 0,
        transformOrigin: "50% 50%"
      })

      gsap.to(pupils, 2, {
        bottom: "16px",
        ease: "elastic.out"
      })
    })
  }

  // Initialize
  function init() {
    rotateMoon()
    floatMoon()
    shimmeringStars()
    track()
    shy()
  }

  init();
});
