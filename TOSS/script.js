let head=document.querySelector(".head");
let msg=document.querySelector(".msg");

head.addEventListener("click",()=>
{
    let rnd=Math.ceil(Math.random()*100);

    if(rnd%2==0)
        {      msg.innerText="TAILS";
               head.style.backgroundImage="url('tail.png')";
        }
        else
        {       msg.innerText="HEAD";
               head.style.backgroundImage="url('head.png')"
        }
});