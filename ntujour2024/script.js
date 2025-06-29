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
      "", "", ""
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

        if (textIndex >= 6) {
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
            text: '我是小雅，為了賺錢來到台灣工作。至今來台灣也五年了。丈夫和小孩都在印尼，幾乎兩年沒看到他們了。最近一起來的朋友剛懷孕，讓我也想要有第二胎……',
            choices: [{
                text: '請問您近期有懷孕的計畫嗎?',
                nextScene: 1
              },
              {
                text: '如果在台灣懷孕了，您會怎麼尋求幫助呢?',
                nextScene: 2
              }
            ]
          },
          {
            text: '可能回印尼再考慮吧。現在的工作要每天24小時照顧阿公，還需要把阿公抱上床或馬桶，實在不適合懷孕……',
            choices: [{
                text: '如果在台灣懷孕了，您會怎麼尋求幫助呢?',
                nextScene: 3
              }
            ]
          },
          {
            text: '不知道耶……我試圖在TikTok上尋找資訊，可是上面說法很亂，就連我朋友也不知道哪個才是真的。',
            choices: [{
                text: '請問您近期有懷孕的計畫嗎?',
                nextScene: 4
              }
            ]
          },
          {
            text: '不知道耶……我試圖在TikTok上尋找資訊，可是上面說法很亂，就連我朋友也不知道哪個才是真的。',
          },
          {
            text: '可能回印尼再考慮吧。現在的工作要每天24小時照顧阿公，還需要把阿公抱上床或馬桶，實在不適合懷孕……'
          }
        ],
        ngo: [{
            text: '我在一個關心移工權益的NGO擔任志工，關心在台移工的基本人權，期許外國來台工作者在未來都能享有安心生育以及撫養小孩的權利。',
            choices: [{
                text: '您認為，「生育孩子」屬於移工在台灣工作期間的基本權益嗎？',
                nextScene: 1
              },
              {
                text: '若要改善移工的懷孕困境，得先從哪個部分著手呢？',
                nextScene: 2
              }
            ]
          },
          {
            text: '《性工法》保障勞工的生育權益，而這當然也包含移工朋友們！\n雖然多數民眾對此抱持顧慮，但我們這些志工仍會透過社會倡議，讓更多人理解移工媽媽們的處境。',
            choices: [{
                text: '若要改善移工的懷孕困境，得先從哪個部分著手呢？',
                nextScene: 3
              }
            ]
          },
          {
            text: '我認為是「法律宣導」的部分吧。\n移工基於語言障礙，難以理解台灣法律；而許多雇主也不清楚移工懷孕後可申請的相關措施……這使得雙方都不知道怎麼保障自己的權益，唉！',
            choices: [{
                text: '您認為，「生育孩子」屬於移工在台灣工作期間的基本權益嗎？',
                nextScene: 4
              }
            ]
          },
          {
            text: '我認為是「法律宣導」的部分吧。\n移工基於語言障礙，難以理解台灣法律；而許多雇主也不清楚移工懷孕後可申請的相關措施……這使得雙方都不知道怎麼保障自己的權益，唉！'
          },
          {
            text: '《性工法》保障勞工的生育權益，而這當然也包含移工朋友們！\n雖然多數民眾對此抱持顧慮，但我們這些志工仍會透過社會倡議，讓更多人理解移工媽媽們的處境。'
          }
        ],
        employer: [{
            text: '我曾經請過印尼移工照顧過媽媽，雖然那只有短短的三個月而已。',
            choices: [{
                text: '您覺得台灣人對於移工足夠友善嗎?',
                nextScene: 1
              },
              {
                text: '如果家裡的移工有在台懷孕的計畫，您會支持他嗎？',
                nextScene: 2
              }
            ]
          },
          {
            text: '挺友善的吧。畢竟移工的工作是台灣人不太想做的，或多或少也是挺包容他們的……\n但老實說，新聞和FB上好像還是有一些比較偏激的意見存在啦。',
            choices: [{
                text: '如果家裡的移工有在台懷孕的計畫，您會支持他嗎？',
                nextScene: 3
              }
            ]
          },
          {
            text: '我、我還是希望不要耶...…如果移工懷有身孕的同時還得把媽媽抱上抱下，感覺很容易受傷啊……若有個萬一，誰要負責呢？',
            choices: [{
                text: '您覺得台灣人對於移工足夠友善嗎?',
                nextScene: 4
              }
            ]
          },
          {
            text: '我、我還是希望不要耶...…如果移工懷有身孕的同時還得把媽媽抱上抱下，感覺很容易受傷啊……若有個萬一，誰要負責呢？'
          },
          {
            text: '挺友善的吧。畢竟移工的工作是台灣人不太想做的，或多或少也是挺包容他們的……\n但老實說，新聞和FB上好像還是有一些比較偏激的意見存在啦。'
          }
        ],
        government: [{
            text: '我是在勞動部任職的小蔡，為台灣的勞工把關權益，有什麼好奇的都歡迎問我吧。',
            choices: [{
                text: '現今臺灣社會中，移工的權益問題為何對我們如此重要?',
                nextScene: 1
              },
              {
                text: '婦女移工的懷孕權益逐漸獲得保障，但移工寶寶的安置似乎仍是問題？',
                nextScene: 2
              }
            ]
          },
          {
            text: '移工挹注許多產業的勞動力，如台灣高齡化後所面臨的人力缺口，就需要仰賴這群來自異鄉的朋友支持。\n因此，創造一個讓移工安心工作、平安養育的環境，以吸引移工來台灣，就會是社會的重要課題。',
            choices: [{
                text: '婦女移工的懷孕權益逐漸獲得保障，但移工寶寶的安置似乎仍是問題？',
                nextScene: 3
              }
            ]
          },
          {
            text: '嗯……寶寶們後續的安置與醫療問題的確需要關心，但這方面是衛服部與其他單位負責，我們就比較難介入……\n實際上，許多社會工作需要各政府部門謹慎分工來完成，雖然依法行政有其必要，卻也因此缺乏彈性，讓改革難以完善。',
            choices: [{
                text: '現今臺灣社會中，移工的權益問題為何對我們如此重要?',
                nextScene: 4
              }
            ]
          },
          {
            text: '嗯……寶寶們後續的安置與醫療問題的確需要關心，但這方面是衛服部與其他單位負責，我們就比較難介入……\n實際上，許多社會工作需要各政府部門謹慎分工來完成，雖然依法行政有其必要，卻也因此缺乏彈性，讓改革難以完善。'
          },
          {
            text: '移工挹注許多產業的勞動力，如台灣高齡化後所面臨的人力缺口，就需要仰賴這群來自異鄉的朋友支持。\n因此，創造一個讓移工安心工作、平安養育的環境，以吸引移工來台灣，就會是社會的重要課題。'
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
