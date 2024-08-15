let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
let userSc=document.querySelector("#user_score");
let compSc=document.querySelector("#comp_score");
let restart=document.querySelector(".restart_btn");

const choices=document.querySelectorAll(".choice_container");

let compChoice=()=>
{
    let arr=["Stone","Paper","Scissor"];
    let raIdx=Math.floor(Math.random()*3);  //this will give me value b\t 0 to 2
    return arr[raIdx];
}

let playGame=(userData)=>
{
   console.log("in play user:"+userData);
   let compData=compChoice();
   console.log("in play com:",compData);
   if((userData=="Stone"&&compData=="Scissor")||(userData=="Paper"&&compData=="Stone")||(userData=="Scissor"&&compData=="Paper"))
    {
        userSc.innerText=++userScore;
       msg.innerText=`YOU WIN,Your ${userData} beats Comp's ${compData}`;
       msg.style.backgroundColor="green";
    }
     else
     if(userData!==compData)
    { 
        compSc.innerText= ++compScore;
        msg.innerText=`OPPS! COMP WON, Comp's ${compData} beats Your ${userData}`;
        msg.style.backgroundColor="red";
    }
    else
    if(userData===compData)
    {
        msg.innerText="GAME DRAW!";
        msg.style.backgroundColor="goldenrod";
    }
}

let reset=() =>
{
    userSc.innerText=0;
    compSc.innerText=0;
    compScore=0;
    userScore=0;
    msg.innerText="PLAY YOUR MOVE";
    msg.style.backgroundColor=" #081b31"
}

choices.forEach((choice) =>
{ console.log(choice);
   choice.addEventListener("click",() =>
   { 
    let userChoice=choice.getAttribute("id");
      playGame(userChoice);

   })
})
restart.addEventListener("click",reset);