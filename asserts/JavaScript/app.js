const btns = document.querySelectorAll(".box");
const winstext = document.querySelector("#winstext");
const winner = document.querySelector("#winner");
const brst = document.querySelector("#resetbtn");

xTurn = true;

//inner text manipulation
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (xTurn) {
      this.innerText = "X";
      xTurn = false;
    } else {
      this.innerText = "O";
      xTurn = true;
    }
    this.disabled = true;

    if (CheckWinner() !== undefined) {
      winner.innerText = CheckWinner();
      winstext.style.display = "block";
    }
  });
});

//logic
winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const CheckWinner = () => {
  for (patterns of winPatterns) {
    match1 = btns[patterns[0]].innerText;
    match2 = btns[patterns[1]].innerText;
    match3 = btns[patterns[2]].innerText;
    if (match1 === match2 && match2 === match3 && match3 !== "") {
      btns.forEach((btn) => {
        btn.disabled = true;
      });
      return match1;
    }
  }
};

//reset game
brst.addEventListener("click", function () {
  btns.forEach(function (btn) {
    winner.innerText = "";
    winstext.style.display = "none";
    btn.disabled = false;
    btn.innerText = "";
  });
  xTurn = true;
});
