let boxContainer=document.querySelector(".dice_container");
let boxText=document.querySelector(".msg");

boxContainer.addEventListener("click",()=>
{    let r=Math.ceil(Math.random()*6);
    if(r===1)
    {
        boxText.innerText=r;
        boxContainer.style.backgroundImage="url('dice1.png')";
    }
        
    if(r===2)
    {
        boxText.innerText=r;
        boxContainer.style.backgroundImage="url('dice2.png')";
    }
  
    if(r===3)
    {
        boxText.innerText=r;
        boxContainer.style.backgroundImage="url('dice3.png')";
    }
   
    if(r===4)
    {
        boxText.innerText=r;
        boxContainer.style.backgroundImage="url('dice4.png')";
    }

    if(r===5)
    {
        boxText.innerText=r;
        boxContainer.style.backgroundImage="url('dice5.png')";
    }

    if(r===6)
    {
        boxText.innerText=r;
        boxContainer.style.backgroundImage="url('dice6.png')";
    }
        
})