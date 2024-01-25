let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msgP=document.querySelector("#msg");
const userScoreP=document.querySelector("#user-score");
const compScorep=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawn=()=>{
    console.log("The game is drawn");
    msgP.innerText="Game is Drawn";
    msgP.style.backgroundColor="#99BC85";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreP.innerText=userScore;
        msgP.innerText=`YOU WON!.Your ${userChoice} beats ${compChoice}`;
        msgP.style.backgroundColor="green";
    }else{
        compScore++;
        compScorep.innerText=compScore;
        msgP.innerText=`YOU LOSE!.${compChoice} beats your ${userChoice}`;
        msgP.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
   console.log("users choice =",userChoice);
   //generate computer choice
   const compChoice=genCompChoice();
   console.log("Computers choice =",compChoice);

   //check winnner
   if(userChoice===compChoice){
     drawn();
   }else{
    let userWin=true;
    if(userChoice==='rock'){
        userWin=compChoice==='paper'?false:true;
    }else if(userChoice==='paper'){
        userWin=compChoice==='scissors'?false:true;
    }else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
   }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})