let p1btn = document.getElementById('btn01');
let p2btn = document.getElementById('btn02');
let p1Sco = document.getElementById('score01');
let p2Sco = document.getElementById('score02');
let resetBtn = document.querySelector('#btnReset');
let inVal = document.querySelector('.inValue');
let p1Score = 0;
let p2Score = 0;

// Setup game over 
let endGame = false;
let playPreset = 5;

p1btn.addEventListener('click', function () {
  if (!endGame) {
    p1Score++;
    console.log(p1Score);
    if (p1Score === playPreset) {
      p1Sco.classList.add('winner');
      endGame = true;
    }
    p1Sco.textContent = p1Score;
  }
});

p2btn.addEventListener('click', function () {
  if (!endGame) {
    p2Score++;
    if (p2Score === playPreset) {
      p2Sco.classList.add('winner');
      endGame = true;
    }
    console.log(p2Score);
    p2Sco.textContent = p2Score;
  }
});

resetBtn.addEventListener('click', function () {
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Sco.textContent = 0;
  p2Sco.textContent = 0;
  p1Sco.classList.remove('winner');
  p2Sco.classList.remove('winner');
  endGame = false;
}


inVal.addEventListener('change', function () {
  plays.textContent = inVal.value;
  playPreset = Number(inVal.value);
  reset();
});

