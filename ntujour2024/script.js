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

  const contentSections = document.querySelectorAll('.content-section');
  // scrolltrigger
  gsap.registerPlugin(ScrollTrigger);

  // 單個動畫控制
  gsap.to(".hero2", {
    scrollTrigger: {
      trigger: ".hero2",
      scrub: true,
      pin: true,
      start: "top top", // 改為從頂部開始
      end: "+=100%", // 減少滾動距離
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

        if (textIndex === 4) {
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
                text: "不知道怎麼辦。",
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
                nextScene: "start"
              }]
            },
          }
        },
        xiaolin: {
          name: 'Amy',
          avatar: 'https://hsutingyun.github.io/ntujour2024/picture/Characters/11.png',
          scenes: {
            start: {
              text: "你好，我是Amy，和先生帶著四個孩子一起租屋生活。",
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
          name: '小J',
          avatar: 'https://hsutingyun.github.io/ntujour2024/picture/Characters/12.png',
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
  document.querySelectorAll('.content-text6').forEach(content => {
    ScrollTrigger.create({
      trigger: content,
      start: 'top 70%',
      end: 'bottom 30%',
      toggleClass: {
        targets: content,
        className: 'active'
      }
    });
  });

  // 處理影片播放
  document.querySelectorAll('.video-section6').forEach(section => {
    const video = section.querySelector('video');

    ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        // 暫停所有其他影片
        document.querySelectorAll('video').forEach(v => {
          if (v !== video) {
            v.pause();
            v.classList.remove('active');
          }
        });
        // 播放當前影片
        video.play().catch(error => {
          console.log("Video play was prevented:", error);
        });
        video.classList.add('active');
      },
      onLeave: () => {
        video.pause();
        video.classList.remove('active');
      },
      onEnterBack: () => {
        // 暫停所有其他影片
        document.querySelectorAll('video').forEach(v => {
          if (v !== video) {
            v.pause();
            v.classList.remove('active');
          }
        });
        // 播放當前影片
        video.play().catch(error => {
          console.log("Video play was prevented:", error);
        });
        video.classList.add('active');
      },
      onLeaveBack: () => {
        video.pause();
        video.classList.remove('active');
      }
    });

    // 影片循環播放  
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play().catch(error => {
        console.log("Video replay was prevented:", error);
      });
    });
  });

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

  init()
});
