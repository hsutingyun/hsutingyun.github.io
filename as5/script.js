document.addEventListener('DOMContentLoaded', () => {
  const video1 = document.getElementById('video1');
  const video2 = document.getElementById('video2');

  // 設定影片的播放範圍
  const video1Start = document.querySelector('.leading-section').offsetHeight;
  const video1End = video1Start + document.getElementById('video1-section').offsetHeight;
  const video2Start = video1End; // 直接連接第一段影片結束的地方
  const video2End = video2Start + document.getElementById('video2-section').offsetHeight;

  // 滾動播放影片的函數
  function scrollPlay(video, start, end) {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= start && scrollPosition <= end) {
      // 計算滾動的進度比例，並設定影片播放時間
      const scrollFraction = (scrollPosition - start) / (end - start);
      video.currentTime = scrollFraction * video.duration;
      video.play(); // 確保影片在這個範圍內自動播放
    } else if (scrollPosition < start) {
      video.currentTime = 0; // 滾動到前面時，重置影片
      video.pause();
    } else if (scrollPosition > end) {
      video.currentTime = video.duration; // 滾動到後面時，結束影片
      video.pause();
    }
  }

  // 監聽滾動事件以控制影片播放
  window.addEventListener('scroll', () => {
    scrollPlay(video1, video1Start, video1End);
    scrollPlay(video2, video2Start, video2End);
  });
});
