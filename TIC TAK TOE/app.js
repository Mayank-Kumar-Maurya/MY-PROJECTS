let btn=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let player=true;//X
let newBtn=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
let draw=document.querySelector(".draw");
let newGa=document.querySelector("#newGa");
let c=0;

let winningpatn=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const stop=function w()
{
    for(let i of btn)
    {
        i.disabled=true;
        i.style.backgroundColor="rgba(255,255,255,0.859)";

    }
}



 btn.forEach(function q(a)
{  
    a.addEventListener("click",function o()
{ c++;
    console.log("jaadu");
    if(player)
    {
        a.innerText="O";
        player=false;
    }
    else
    {
        a.innerText="X";
        player=true;
    }
    a.disabled=true;
    a.style.backgroundColor="rgba(255,255,255,0.859)";
    checkWinner();
    if(c>=9)
    {
        print();
    }

})
})



let resetGame=function r()
{ player=true;
    start();
    msgContainer.classList.add("hide");
    draw.classList.add("hide");

}
let start=function J()
{
    for(let i of btn)
    {
        i.disabled=false;
        i.innerText="";
    }
}
const showWinner=(winner)=>
{  
  msgContainer.classList.remove("hide");  
  msg.innerText=`***Winning***\n${winner}`;  
  stop();
  c=0;
}
let print=() =>
{
    
    draw.classList.remove("hide");
    stop();
    c=0;
}


let checkWinner=function pk()
{ 
    for(let i of winningpatn)
    {  console.log(i[0],i[1],i[2]); 
        
         let posV1=btn[i[0]].innerText;
         let posV2=btn[i[1]].innerText;
         let posV3=btn[i[2]].innerText;
         if(posV1!=""&&posV2!=""&&posV3!="")
         {
            if(posV1===posV2&&posV2===posV3)
             {  
             showWinner(posV1);
            }
            
         }
    }
    // if(c==9)
    // { console.log(c);
    //     print();
    // }
};

reset.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);
newGa.addEventListener("click",resetGame);