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
      "——故事開始——",
      "小麥（化名）來臺工作前已懷有身孕。",
      "這天他臥在雇主家中的床將孩子生下，",
      "面對時刻注視自己的監視器，",
      "他將棉被緊緊的覆蓋下半身，仍難掩嬰兒的哭聲迴盪……",
      "生下孩子的事情曝光了，網路的謾罵不斷蔓延……",
      "",
      "",
      ""
    ];

    const monitorDialog = document.querySelector('.monitor-dialog');
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

        if (textIndex == 0) {
          monitorDialog.classList.add('center');
        } else {
          monitorDialog.classList.remove('center');
        }

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
  // Text Adventure Game更新
  class MigrantWorkerGame {
    constructor() {
      this.currentCharacter = null;
      this.gameState = {
        reputation: 50,
        resources: 50,
        currentScene: 0
      };
      this.init();
    }

    init() {
      this.bindEvents();
      this.showCharacterSelection();
    }

    bindEvents() {
      document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', (e) => {
          const character = e.currentTarget.dataset.character;
          this.selectCharacter(character);
        });
      });

      document.getElementById('restart-btn').addEventListener('click', () => {
        this.restart();
      });
    }

    selectCharacter(character) {
      this.currentCharacter = character;
      this.gameState = {
        currentScene: 0
      };

      // 更新UI
      document.querySelectorAll('.character-card').forEach(card => {
        card.classList.remove('selected');
      });
      document.querySelector(`[data-character="${character}"]`).classList.add('selected');

      setTimeout(() => {
        this.startGame();
      }, 500);
    }

    startGame() {
      document.getElementById('character-selection').style.display = 'none';
      document.getElementById('game-content').style.display = 'block';

      const characterData = {
        worker: {
          emoji: '👷',
          title: '移工',
          description: '來自東南亞的外籍勞工，為了家庭的未來而遠離故鄉工作。面對語言隔閡、文化差異和工作挑戰，需要在異鄉中找到生存之道。'
        },
        ngo: {
          emoji: '🤝',
          title: 'NGO工作者',
          description: '致力於維護移工權益的社會工作者。透過法律協助、政策倡議和社會教育，努力改善移工的處境，促進社會公平正義。'
        },
        employer: {
          emoji: '👔',
          title: '雇主',
          description: '面臨人力需求的企業主。需要在營運成本、法規遵循和人道關懷之間找到平衡點，同時承擔企業社會責任。'
        },
        government: {
          emoji: '🏛️',
          title: '政府官員',
          description: '負責制定和執行移工政策的公務員。需要在經濟發展、社會和諧和人權保障之間取得平衡，回應各方關切。'
        }
      };

      const character = characterData[this.currentCharacter];
      document.getElementById('character-avatar').textContent = character.emoji;
      document.getElementById('character-title').textContent = character.title;
      document.getElementById('character-description').textContent = character.description;

      this.showScene();
    }

    showScene() {
      const scenes = this.getScenes();
      const currentScene = scenes[this.gameState.currentScene];

      if (!currentScene) {
        this.showEnding();
        return;
      }

      document.getElementById('story-text').innerHTML = currentScene.text;
      this.showChoices(currentScene.choices);
    }

    showChoices(choices) {
      const choicesContainer = document.getElementById('choices');
      choicesContainer.innerHTML = '';

      choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.textContent = choice.text;
        button.addEventListener('click', () => {
          this.makeChoice(choice);
        });
        choicesContainer.appendChild(button);
      });
    }

    makeChoice(choice) {
      this.gameState.currentScene = choice.nextScene;

      setTimeout(() => {
        this.showScene();
      }, 300);
    }

    getScenes() {
      const scenes = {
        worker: [{
            text: '你是來自東南亞的移工，剛抵達台灣。仲介告訴你工作條件和薪資，但實際情況似乎與當初承諾的不同。你發現工時比預期長，薪資也被扣除了許多費用。',
            choices: [{
                text: '直接向雇主抗議不合理的工作條件',
                nextScene: 1
              },
              {
                text: '默默承受，擔心失去工作機會',
                nextScene: 2
              },
              {
                text: '尋求其他移工的建議和支持',
                nextScene: 3
              }
            ]
          },
          {
            text: '你勇敢地向雇主表達不滿，雇主起初很生氣，但後來意識到確實有問題。他答應改善工作條件，但警告你不要再惹麻煩。',
            choices: [{
                text: '感謝雇主的理解，努力工作證明自己',
                nextScene: 4
              },
              {
                text: '要求書面承諾，確保權益受到保障',
                nextScene: 5
              }
            ]
          },
          {
            text: '你選擇忍受不公平的待遇，工作雖然辛苦，但至少穩定。然而，長期的壓力開始影響你的身心健康。',
            choices: [{
                text: '終於決定尋求外界協助',
                nextScene: 6
              },
              {
                text: '繼續忍耐，希望情況會改善',
                nextScene: 7
              }
            ]
          },
          {
            text: '你與其他移工分享經驗，發現大家都遇到類似問題。你們決定一起尋求NGO組織的協助。',
            choices: [{
                text: '組織移工聯盟，集體爭取權益',
                nextScene: 8
              },
              {
                text: '個別尋求法律援助',
                nextScene: 9
              }
            ]
          }
        ],
        ngo: [{
            text: '作為NGO工作者，你接到一個移工的求助電話。他反映雇主違法扣薪、超時工作，還限制他的行動自由。你需要決定如何幫助他。',
            choices: [{
                text: '立即前往現場了解情況',
                nextScene: 1
              },
              {
                text: '先收集更多證據再行動',
                nextScene: 2
              },
              {
                text: '建議他先向勞工局申訴',
                nextScene: 3
              }
            ]
          },
          {
            text: '你親自到現場，發現情況比想像中嚴重。雇主不但拒絕配合，還威脅要遣返移工。你需要採取更強硬的措施。',
            choices: [{
                text: '聯繫媒體曝光此事',
                nextScene: 4
              },
              {
                text: '尋求法律途徑解決',
                nextScene: 5
              }
            ]
          },
          {
            text: '你謹慎地收集證據，包括工時記錄、薪資條等。有了充分的證據後，你更有信心為移工爭取權益。',
            choices: [{
                text: '與雇主協商，尋求和解',
                nextScene: 6
              },
              {
                text: '直接向勞工局檢舉',
                nextScene: 7
              }
            ]
          }
        ],
        employer: [{
            text: '你是一家製造業公司的老闆，面臨人力不足的問題。你正在考慮聘請移工，但需要在成本控制和合法聘雇之間找到平衡。',
            choices: [{
                text: '通過合法管道聘請移工，提供合理薪資',
                nextScene: 1
              },
              {
                text: '尋找更便宜的勞力，降低成本',
                nextScene: 2
              },
              {
                text: '投資自動化設備，減少對人力的依賴',
                nextScene: 3
              }
            ]
          },
          {
            text: '你選擇合法聘雇移工，雖然成本較高，但工作效率很好。移工們也很感激你的公平對待。',
            choices: [{
                text: '建立良好的勞雇關係，提供職業訓練',
                nextScene: 4
              },
              {
                text: '維持現狀，穩定經營',
                nextScene: 5
              }
            ]
          },
          {
            text: '你選擇了壓低成本的做法，但很快就面臨勞工抗議和政府稽查。你的公司形象受到損害。',
            choices: [{
                text: '立即改善工作條件，挽回形象',
                nextScene: 6
              },
              {
                text: '堅持原有做法，認為這是市場競爭',
                nextScene: 7
              }
            ]
          }
        ],
        government: [{
            text: '你是負責移工政策的政府官員。最近移工權益問題頻傳，你需要制定新的政策來平衡各方利益。',
            choices: [{
                text: '加強對雇主的監管和處罰',
                nextScene: 1
              },
              {
                text: '提高移工的保障和福利',
                nextScene: 2
              },
              {
                text: '平衡各方利益，謹慎改革',
                nextScene: 3
              }
            ]
          },
          {
            text: '你推動了嚴格的雇主監管政策，違法雇主面臨重罰。雖然一些企業抗議，但移工權益得到了保障。',
            choices: [{
                text: '繼續強化執法，不向壓力屈服',
                nextScene: 4
              },
              {
                text: '適度調整政策，尋求平衡',
                nextScene: 5
              }
            ]
          },
          {
            text: '你提高了移工的薪資保障和福利，但也增加了政府的財政負擔。一些民眾質疑政策的必要性。',
            choices: [{
                text: '堅持人權立場，繼續推動改革',
                nextScene: 6
              },
              {
                text: '調整政策，減輕財政壓力',
                nextScene: 7
              }
            ]
          }
        ]
      };

      return scenes[this.currentCharacter] || [];
    }

    showEnding() {
      const endings = this.getEndings();
      const choicesContainer = document.getElementById('choices');
      choicesContainer.innerHTML = '';

      const endingDiv = document.createElement('div');
      endingDiv.className = 'ending';
      endingDiv.innerHTML = `
                    <h3>故事結局</h3>
                    <p>${endings}</p>
                `;

      document.getElementById('story-text').appendChild(endingDiv);
    }

    getEndings() {
      const endings = {
        worker: '你在異鄉的路途雖然充滿挑戰，但透過不同的選擇，你學會了如何在困境中生存，也理解了移工在台灣面臨的各種處境。每一個決定都會帶來不同的結果，這就是移工生活的真實寫照。',
        ngo: '作為NGO工作者，你見證了移工權益爭取的艱辛過程。無論選擇哪條路，你都在為社會正義而努力。每一個案例都是寶貴的經驗，讓你更了解如何有效地幫助需要協助的人。',
        employer: '身為雇主，你體驗了在商業利益與人道關懷之間的掙扎。不同的選擇會帶來不同的後果，也讓你思考企業在社會中應該扮演的角色和責任。',
        government: '作為政府官員，你面臨了政策制定的複雜性。每個決定都需要考慮多方利益，平衡經濟發展與人權保障。這個經驗讓你更深刻理解治理的挑戰。'
      };

      return endings[this.currentCharacter] || '感謝你完成這個故事體驗。';
    }

    showCharacterSelection() {
      document.getElementById('character-selection').style.display = 'grid';
      document.getElementById('game-content').style.display = 'none';
    }

    restart() {
      this.currentCharacter = null;
      this.gameState = {
        currentScene: 0
      };
      this.showCharacterSelection();
    }
  }

  // 啟動遊戲
  window.addEventListener('DOMContentLoaded', () => {
    new MigrantWorkerGame();
  });


  //數據
  let currentChart = null;
  const chartElement = document.getElementById('dynamicChart');
  const ctx = chartElement.getContext('2d');

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
    Chart.defaults.font.size = parseFloat(getComputedStyle(chartElement).fontSize);
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

  const marks = document.querySelectorAll('mark');

  const marks_observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation class when element comes into view
        entry.target.classList.add('animate');
        // Unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, {
    // Trigger when 30% of the element is visible
    threshold: 0.3,
    // Add margin to trigger slightly before the element is fully in view
    rootMargin: '20px'
  });

  marks.forEach(mark => marks_observer.observe(mark));
});
