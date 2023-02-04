const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
btnStop.disabled = true;

const colorSwitcher = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    btnStart.disabled = true;
    btnStop.disabled = false;

    this.intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    btnStart.disabled = false;
    btnStop.disabled = true;
  },
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', colorSwitcher.start.bind(colorSwitcher));
btnStop.addEventListener('click', colorSwitcher.stop.bind(colorSwitcher));
