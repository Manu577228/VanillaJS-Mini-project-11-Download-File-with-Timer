const downloadBtn = document.querySelector(".download-btn");
const fileLink =
  "https://drive.google.com/uc?export=download&id=101vQoovjnVEGpExSWgZUqjqZJbTw-LDb";

const initTimer = () => {
  let timer = downloadBtn.dataset.timer;
  downloadBtn.classList.add("timer");
  downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;

  const initCounter = setInterval(() => {
    if (timer > 0) {
      timer--;
      return (downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`);
    }
    console.log("Timer Cleared");
    clearInterval(initCounter);
    location.href = fileLink;
    downloadBtn.textContent = "Your file is downloading...";
  }, 1000);
};

downloadBtn.addEventListener("click", initTimer);
