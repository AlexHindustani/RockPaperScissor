let userScore = 0;
let compScore = 0;

let userScore1 = document.querySelector("#userScore");
let compScore1 = document.querySelector("#compScore");

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")
let butn = document.querySelector(".butn");

const PlayGame = (userChoice) => {
    console.log(userChoice);
    const arr = ["Rock", "Paper", "Scissor"];
    let pos = Math.floor(Math.random() * 3);
    let str;
    if (arr[pos] === userChoice) {
        str = `Draw, Comp also choosed ${arr[pos]}`;
    }
    else {
        if (pos === 0) {
            if (userChoice === "Paper") {
                str = `Won, Comp choosed ${arr[pos]}`;
                userScore++;
            }
            else {
                str = `Lost, Comp choosed ${arr[pos]}`;
                compScore++;
            }
        }
        if (pos === 1) {
            if (userChoice === "Rock") {
                str = `Lost, Comp choosed ${arr[pos]}`;
                compScore++;
            }
            else {
                str = `Won, Comp choosed ${arr[pos]}`;
                userScore++;
            }

        }
        if (pos === 2) {
            if (userChoice === "Paper") {
                str = `Lost, Comp choosed ${arr[pos]}`;
                compScore++;
            }
            else {
                str = `Won, Comp choosed ${arr[pos]}`;
                userScore++;
            }

        }
    }
    console.log(str);
    msg.innerText = str;
    if (str[0] === 'W') {
        msg.style.backgroundColor = "green";
    }
    if (str[0] === 'L') {
        msg.style.backgroundColor = "red";
    }
    if (str[0] === 'D') {
        msg.style.backgroundColor = "rgb(200, 150, 62)";
    }
    userScore1.innerText = userScore;
    compScore1.innerText = compScore;
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        // console.log("Wow");
        // console.log(choiceId);
        PlayGame(choiceId);
    })
});

butn.addEventListener("click", () => {
    console.log("Wow");

    userScore = 0;
    compScore = 0;
    userScore1.innerText = userScore;
    compScore1.innerText = compScore;
    str = "Play Your Move";
    msg.innerText = str;
    msg.style.backgroundColor = "rgb(200, 150, 62)";
})