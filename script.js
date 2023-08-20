let music = new Audio("musicover.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    const win = [
        // width:20vw;
        // height:0.3vw;
        // left:17.7vw;/*10.8 17.7 24.5vw;*/
        // top:30vw;/*16.5  23 30*/
        // transform: rotate(0deg);
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    win.forEach((e) => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText != '')) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " has won";
            
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.display = "block";
            setTimeout(()=>{
                document.querySelector('.img-box').getElementsByTagName('img')[0].style.display = "none"; 
            },6000)
            music.play();
            isgameover = true;
            // let line=document.querySelector('.line');
            // line.style.height="0.3vw";
            // line.style.left=`${e[3]}vw`;
            // line.style.top=`${e[4]}vw`;
            // line.style.transform=`rotate(${e[5]}deg)`;
        }
    })
        if(!isgameover){
            let tie = true;
            for (let i = 0; i < boxtext.length; i++) {
                if (boxtext[i].innerText === "") {
                    tie = false;
                    break;
                }
            }
            if (tie) {
                isgameover = true;
                document.querySelector('.info').innerText = "Game is tie";
            }
        }
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    element.addEventListener('click', () => {
        if(!isgameover){
        let boxtext = element.querySelector('.boxtext');
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            audioturn.play();
            if (turn === "X")
                turn = "0";
            else
                turn = "X";
            //turn=changeTurn;
            checkwin();
            if (!isgameover)
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
        }
        }
    })
})

reset.addEventListener('click', () => {
    let textbox = document.querySelectorAll('.boxtext');
    Array.from(textbox).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    // document.querySelector('.line').style.height="0vw";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.display = "none"

})