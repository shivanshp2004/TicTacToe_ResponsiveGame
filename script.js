let turn = "X";
let over = false;
document.querySelector(".turndisplay").innerText = ` Turn of ${turn}`;
document.querySelector(".turndisplay").style.border="2px solid black"
const changeTurn = () => {
  return turn == "X" ? "0" : "X";
};
function iswin() {
  let value = document.getElementsByClassName("value");
  let e = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  e.forEach((e) => {
    if (
      value[e[0]].innerText == value[e[1]].innerText &&
      value[e[0]].innerText == value[e[2]].innerText &&
      value[e[0]].innerText != ""
    ) {
      document.querySelector(".turndisplay").innerText = "";
      document.querySelector(".turndisplay").style.border="0";
      document.querySelector(".won").innerText = ` ${
        value[e[0]].innerText
      } won !!`;
      document.querySelector(".won").style.background = "rgb(235, 87, 87)";
      document.querySelector(".won").style.border="3px solid black"
      let gameover = new Audio("game-over-arcade-6435.mp3");
      gameover.play();
      over = true;
    }
  });
}
let diagonalStrike = document.querySelector(".diagonal-strike");
let isplaying=false
if(!isplaying) diagonalStrike.classList.add("diagonal-strike");
let boxes = document.getElementsByClassName("square");
Array.from(boxes).forEach((square) => {
  square.addEventListener("click", () => {
    if (over == false) {
      let chance = new Audio("ding-idea-40142.mp3");
      document.querySelector(".won").innerText = ``;
      chance.playbackRate = 3.5;
      chance.volume = 1.0;
      let text = square.querySelector(".value");
      if (!text.innerText) {
        text.innerText = turn;
        turn = changeTurn();
        document.querySelector(".turndisplay").innerText = ` Turn of ${turn}`;
        document.querySelector(".turndisplay").style.border="2px solid black"
        iswin();
        let flag = true;
        Array.from(boxes).forEach((square1) => {
          if (!square1.querySelector(".value").innerText) {
            flag = false;
          }
        });
        if (flag == true) {
          document.querySelector(".reset").click();
          document.querySelector(".won").innerText = ` Its a Draw !!`;
          over=true;
          document.querySelector(".won").style.background="rgb(131, 128, 128)"
          let gameover = new Audio("game-over-arcade-6435.mp3");
          gameover.play();
          document.querySelector(".won").style.border="3px solid black"
          document.querySelector(".turndisplay").innerText = ``;
          document.querySelector(".turndisplay").style.border="0";
        }
        chance.play();
      }
    }
  });
});
let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  Array.from(boxes).forEach((square) => {
    let text = square.querySelector(".value");
    text.innerText = "";
    over = false;
    document.querySelector(".won").style.background = "white";
    turn = "X";
    document.querySelector(".turndisplay").innerText = ` Turn of ${turn}`;
    document.querySelector(".turndisplay").style.border="2px solid black"

    document.querySelector(".won").innerText = "";
    document.querySelector(".won").style.border="0px";
  });
});
let music=document.querySelector(".music")
let playmusic=new Audio("Wallpaper(chosic.com).mp3")
music.addEventListener('click',()=>
  {
    
    if(!isplaying)
    {
      playmusic.currentTime=0
      playmusic.play()
      isplaying=true;
      diagonalStrike.classList.remove("diagonal-strike");
    }
    else
    {
      playmusic.pause();
      isplaying=false;
      diagonalStrike.classList.add("diagonal-strike");
    }
    {

    };
  }
)
