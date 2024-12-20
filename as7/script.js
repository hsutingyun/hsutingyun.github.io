$(document).ready(function () {
  const winh = $(window).height(); // 獲取視窗高度
  const winw = $(window).width(); // 獲取視窗寬度
  let isMouseLocked = false;
  let isCageFixed = false;
  const door = document.querySelector('.door'); // 獲取門的元素

  // 儲存每個 middle-layer 的初始位置
  $(".middle-layer").each(function () {
    $(this).data('initialTop', $(this).position().top);
  });

  $(window).scroll(function () {
    const scrolled = $(window).scrollTop(); // 當前滾動位置
    const triggerDoorScroll = 120 * winh / 100; // 計算 120vh 的滾動距離

    // Door Animation (First Part)
    if (scrolled > triggerDoorScroll) {
      door.classList.add('open');
    } else {
      door.classList.remove('open');
    }

    // Scene 1 Animation Logic
    if (scrolled < $("#scene2").offset().top) {
      const scene1Scrolled = scrolled - $("#scene1").offset().top;

      // Middle layer movement
      $(".middle-layer").each(function () {
        // 直接使用滾動距離來移動元素
        const moveAmount = scrolled * 0.1; // 0.1 是移動速度係數，可以調整
        const currentTop = $(this).position().top;

        // 設置新的位置（向上移動是負值）
        $(this).css('transform', `translateY(-${moveAmount}px)`);
      });

      // Cage door animation (如果需要的話)
      if (isCageFixed) {
        $(".middle-layer").each(function () {
          const topValue = (($(this).data("top2") - $(this).data("top")) * (scene1Scrolled - winh)) / winh + $(this).data("top");
          $(this).css("top", topValue + "%");
        });
      }

      // mouse animation
      $(".foreground-layer").each(function () {
        // 直接使用滾動距離來移動元素
        const moveAmount = scrolled * 0.1; // 0.1 是移動速度係數，可以調整
        const currentTop = $(this).position().top;

        // 設置新的位置（向上移動是負值）
        $(this).css('transform', `translateY(${moveAmount}px)`);
      });
    }

    // Scene 2 Animation Logic
    if (scrolled >= $("#scene2").offset().top) {
      const scene2Scrolled = scrolled - $("#scene2").offset().top;

      // Mouse movement
      $(".mouse-character").each(function () {
        const leftValue = (($(this).data("left2") - $(this).data("left")) * scene2Scrolled) / winh + $(this).data("left");
        $(this).css("left", leftValue + "%");

        if (leftValue >= 45 && leftValue <= 55) {
          $(this).addClass("jumping");
        } else {
          $(this).removeClass("jumping");
        }
      });

      // Obstacles movement
      $(".obstacles").each(function () {
        const leftValue = (($(this).data("left2") - $(this).data("left")) * scene2Scrolled) / winh + $(this).data("left");
        $(this).css("left", leftValue + "%");
      });
    }
  });
});

// The 404 page from my site http://hakim.se/404
(function () {

  var DISPLAY_WIDTH = window.innerWidth,
    DISPLAY_HEIGHT = window.innerHeight,
    DISPLAY_DURATION = 10;

  var mouse = {
      x: 0,
      y: 0
    },
    container,
    canvas,
    context,
    startTime,
    eyes;

  function initialize() {
    container = document.querySelector('.fof');
    canvas = document.querySelector('.fof>canvas');

    if (canvas) {
      canvas.width = DISPLAY_WIDTH;
      canvas.height = DISPLAY_HEIGHT;

      context = canvas.getContext('2d');

      window.addEventListener('mousemove', function (event) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
      }, false);

      eyes = [
        new Eye(canvas, 0.19, 0.80, 0.88, 0.31),
        new Eye(canvas, 0.10, 0.54, 0.84, 0.32),
        new Eye(canvas, 0.81, 0.13, 0.63, 0.33),
        new Eye(canvas, 0.89, 0.19, 0.58, 0.34),
        new Eye(canvas, 0.40, 0.08, 0.97, 0.35),
        new Eye(canvas, 0.64, 0.74, 0.57, 0.36),
        new Eye(canvas, 0.41, 0.89, 0.56, 0.37),
        new Eye(canvas, 0.92, 0.89, 0.75, 0.38),
        new Eye(canvas, 0.27, 0.20, 0.87, 0.39),
        new Eye(canvas, 0.17, 0.46, 0.68, 0.41),
        new Eye(canvas, 0.71, 0.29, 0.93, 0.42),
        new Eye(canvas, 0.84, 0.46, 0.54, 0.43),
        new Eye(canvas, 0.93, 0.35, 0.63, 0.44),
        new Eye(canvas, 0.77, 0.82, 0.85, 0.45),
        new Eye(canvas, 0.36, 0.74, 0.90, 0.46),
        new Eye(canvas, 0.13, 0.24, 0.85, 0.47),
        new Eye(canvas, 0.58, 0.20, 0.77, 0.48),
        new Eye(canvas, 0.55, 0.84, 0.87, 0.50),

        new Eye(canvas, 0.50, 0.50, 5.00, 0.10),
      ];

      startTime = Date.now();

      animate();
    }
  }

  function animate() {
    // The number of seconds that have passed since initialization
    var seconds = (Date.now() - startTime) / 1000;

    // Out with the old ...
    context.clearRect(0, 0, DISPLAY_WIDTH, DISPLAY_HEIGHT);

    // ... in with the new
    for (var i = 0, len = eyes.length; i < len; i++) {
      var eye = eyes[i];

      if (seconds > eye.activationTime * DISPLAY_DURATION) {
        eye.activate();
      };

      eye.update(mouse);
    }

    requestAnimFrame(animate);
  }

  setTimeout(initialize, 1);

})();


function Eye(canvas, x, y, scale, time) {
  this.canvas = canvas;
  this.context = this.canvas.getContext('2d')

  // The time at which this eye will come alive
  this.activationTime = time;

  // The speed at which the iris follows the mouse
  this.irisSpeed = 0.01 + (Math.random() * 0.2) / scale;

  // The speed at which the eye opens and closes
  this.blinkSpeed = 0.2 + (Math.random() * 0.2);
  this.blinkInterval = 5000 + 5000 * (Math.random());

  // Timestamp of the last blink
  this.blinkTime = Date.now();

  this.scale = scale;
  this.size = 70 * scale;

  this.x = x * canvas.width;
  this.y = y * canvas.height + (this.size * 0.15);

  this.iris = {
    x: this.x,
    y: this.y - (this.size * 0.1),
    size: this.size * 0.2
  };

  this.pupil = {
    width: 2 * scale,
    height: this.iris.size * 0.75
  };

  this.exposure = {
    top: 0.1 + (Math.random() * 0.3),
    bottom: 0.5 + (Math.random() * 0.3),
    current: 0,
    target: 1
  };

  // Affects the amount of inner shadow
  this.tiredness = (0.5 - this.exposure.top) + 0.1;

  this.isActive = false;

  this.activate = function () {
    this.isActive = true;
  }

  this.update = function (mouse) {
    if (this.isActive === true) {
      this.render(mouse);
    }
  }

  this.render = function (mouse) {
    var time = Date.now();

    if (this.exposure.current < 0.012) {
      this.exposure.target = 1;
    } else if (time - this.blinkTime > this.blinkInterval) {
      this.exposure.target = 0;
      this.blinkTime = time;
    }

    this.exposure.current += (this.exposure.target - this.exposure.current) * this.blinkSpeed;

    // Eye left/right
    var el = {
      x: this.x - (this.size * 0.8),
      y: this.y - (this.size * 0.1)
    };
    var er = {
      x: this.x + (this.size * 0.8),
      y: this.y - (this.size * 0.1)
    };

    // Eye top/bottom
    var et = {
      x: this.x,
      y: this.y - (this.size * (0.5 + (this.exposure.top * this.exposure.current)))
    };
    var eb = {
      x: this.x,
      y: this.y - (this.size * (0.5 - (this.exposure.bottom * this.exposure.current)))
    };

    // Eye inner shadow top
    var eit = {
      x: this.x,
      y: this.y - (this.size * (0.5 + ((0.5 - this.tiredness) * this.exposure.current)))
    };

    // Eye iris
    var ei = {
      x: this.x,
      y: this.y - (this.iris.size)
    };

    // Offset the iris depending on mouse position
    var eio = {
      x: (mouse.x - ei.x) / (window.innerWidth - ei.x),
      y: (mouse.y) / (window.innerHeight)
    };

    // Apply the iris offset
    ei.x += eio.x * 16 * Math.max(1, this.scale * 0.4);
    ei.y += eio.y * 10 * Math.max(1, this.scale * 0.4);

    this.iris.x += (ei.x - this.iris.x) * this.irisSpeed;
    this.iris.y += (ei.y - this.iris.y) * this.irisSpeed;

    // Eye fill drawing
    this.context.fillStyle = 'rgba(255,255,255,1.0)';
    this.context.strokeStyle = 'rgba(100,100,100,1.0)';
    this.context.beginPath();
    this.context.lineWidth = 3;
    this.context.lineJoin = 'round';
    this.context.moveTo(el.x, el.y);
    this.context.quadraticCurveTo(et.x, et.y, er.x, er.y);
    this.context.quadraticCurveTo(eb.x, eb.y, el.x, el.y);
    this.context.closePath();
    this.context.stroke();
    this.context.fill();

    // Iris
    this.context.save();
    this.context.globalCompositeOperation = 'source-atop';
    this.context.translate(this.iris.x * 0.1, 0);
    this.context.scale(0.9, 1);
    this.context.strokeStyle = 'rgba(0,0,0,0.5)';
    this.context.fillStyle = 'rgba(130,50,90,0.9)';
    this.context.lineWidth = 2;
    this.context.beginPath();
    this.context.arc(this.iris.x, this.iris.y, this.iris.size, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.stroke();
    this.context.restore();

    // Iris inner
    this.context.save();
    this.context.shadowColor = 'rgba(255,255,255,0.5)';
    this.context.shadowOffsetX = 0;
    this.context.shadowOffsetY = 0;
    this.context.shadowBlur = 2 * this.scale;
    this.context.globalCompositeOperation = 'source-atop';
    this.context.translate(this.iris.x * 0.1, 0);
    this.context.scale(0.9, 1);
    this.context.fillStyle = 'rgba(255,255,255,0.2)';
    this.context.beginPath();
    this.context.arc(this.iris.x, this.iris.y, this.iris.size * 0.7, 0, Math.PI * 2, true);
    this.context.fill();
    this.context.restore();

    // Pupil
    this.context.save();
    this.context.globalCompositeOperation = 'source-atop';
    this.context.fillStyle = 'rgba(0,0,0,0.9)';
    this.context.beginPath();
    this.context.moveTo(this.iris.x, this.iris.y - (this.pupil.height * 0.5));
    this.context.quadraticCurveTo(this.iris.x + (this.pupil.width * 0.5), this.iris.y, this.iris.x, this.iris.y + (this.pupil.height * 0.5));
    this.context.quadraticCurveTo(this.iris.x - (this.pupil.width * 0.5), this.iris.y, this.iris.x, this.iris.y - (this.pupil.height * 0.5));
    this.context.fill();
    this.context.restore();

    this.context.save();
    this.context.shadowColor = 'rgba(0,0,0,0.9)';
    this.context.shadowOffsetX = 0;
    this.context.shadowOffsetY = 0;
    this.context.shadowBlur = 10;

    // Eye top inner shadow
    this.context.fillStyle = 'rgba(120,120,120,0.2)';
    this.context.beginPath();
    this.context.moveTo(el.x, el.y);
    this.context.quadraticCurveTo(et.x, et.y, er.x, er.y);
    this.context.quadraticCurveTo(eit.x, eit.y, el.x, el.y);
    this.context.closePath();
    this.context.fill();

    this.context.restore();

  }
}

// shim with setTimeout fallback from http://paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function ( /* function */ callback, /* DOMElement */ element) {
      window.setTimeout(callback, 1000 / 60);
    };
})();
