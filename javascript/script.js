console.log("B-CONWORLD ready");

// Keep nav expanded on desktop, and let the hamburger control it on mobile.
(function () {
  const dropdown = document.querySelector(".nav-dropdown");
  if (!dropdown) return;
  const mq = window.matchMedia("(max-width: 900px)");
  function applyNav(e) {
    if (e.matches) {
      dropdown.removeAttribute("open");
    } else {
      dropdown.setAttribute("open", "");
    }
  }
  applyNav(mq);
  mq.addEventListener("change", applyNav);
})();

document.querySelectorAll(".music-card-video").forEach((wrapper) => {
  const video = wrapper.querySelector("video");
  const playBtn = wrapper.querySelector(".music-video-center-play");

  if (!video || !playBtn) return;

  const setState = () => {
    wrapper.classList.toggle("is-playing", !video.paused && !video.ended);
  };

  playBtn.addEventListener("click", () => {
    video.play();
  });

  video.addEventListener("play", setState);
  video.addEventListener("pause", setState);
  video.addEventListener("ended", setState);

  setState();
});
