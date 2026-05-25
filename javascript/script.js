console.log("B-CONWORLD ready");

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
