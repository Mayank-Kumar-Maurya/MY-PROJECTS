let ans=document.querySelector(".ans");
let a="",b=1,c="",d=0;

let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");
let btn4=document.querySelector(".btn4");
let btn5=document.querySelector(".btn5");
let btn6=document.querySelector(".btn6");
let btn7=document.querySelector(".btn7");
let btn8=document.querySelector(".btn8");
let btn9=document.querySelector(".btn9");
let btn10=document.querySelector(".btn10");
let btn11=document.querySelector(".btn11");
let btn12=document.querySelector(".btn12");
let btn13=document.querySelector(".btn13");
let btn14=document.querySelector(".btn14");
let btn15=document.querySelector(".btn15");
let btn16=document.querySelector(".btn16");
let btn17=document.querySelector(".btn17");
let btn18=document.querySelector(".btn18");
let btn19=document.querySelector(".btn19");
let btn20=document.querySelector(".btn20");
 
let clearAll= (y)=>
{
    ans.value=ans.value+btn2.innerText;
}
let divide=()=>
{
    ans.value= ans.value+btn4.innerText;
}

btn1.addEventListener("click",()=>
{
  ans.value="";
  b=0;
  a="";
  c="";
  d=0;
});
 btn2.addEventListener("click",clearAll);
 btn3.addEventListener("click",()=>
{
   ans.value=ans.value.substring(0,ans.value.length-1);
   b=0;
   a="";
   c="";
   d=0;
});
 btn4.addEventListener("click",divide);
 btn5.addEventListener("click",()=>
{
    ans.value=ans.value+btn5.innerText;
});
 btn6.addEventListener("click",()=>
{
    ans.value=ans.value+btn6.innerText;
});
btn7.addEventListener("click",()=>
    {
        ans.value=ans.value+btn7.innerText;
    });
btn8.addEventListener("click",()=>
      {
      ans.value=ans.value+btn8.innerText;
     });
 btn9.addEventListener("click",()=>
   {
     ans.value=ans.value+btn9.innerText;
   });

   btn10.addEventListener("click",()=>
    {
        ans.value=ans.value+btn10.innerText;
    });

    btn11.addEventListener("click",()=>
        {
            ans.value=ans.value+btn11.innerText;
        });
 btn12.addEventListener("click",()=>
  {
      ans.value=ans.value+btn12.innerText;
 });
   btn13.addEventListener("click",()=>
   {
          ans.value=ans.value+btn13.innerText;
  });
  btn14.addEventListener("click",()=>
   {
           ans.value=ans.value+btn14.innerText;
       });

 btn15.addEventListener("click",()=>
 {
    ans.value=ans.value+btn15.innerText;
 });
 btn16.addEventListener("click",()=>
{
   ans.value=ans.value+btn16.innerText;
});
 btn17.addEventListener("click",()=>
 {
   ans.value=ans.value+btn17.innerText;
});

   btn18.addEventListener("click",()=>
    {
         ans.value=ans.value+btn18.innerText;
     });
   btn19.addEventListener("click",()=>
     {
         ans.value=ans.value+btn19.innerText;
     });

     let calc=()=>
     {
        for(let i=0;i<ans.value.length;i++)
        {
            let ch=ans.value.charAt(i);
            
            if(ch=="+"||ch=="-"||ch=="*"||ch=="/"||ch=="%")
            { c=ch;
                if(d===0)
                    {
                        b=Number(a);
                        // console.log(b+"->"+ a);
                        d=1;
                        a="";
                    }
                 else
            if(d!==0)
            {

              
               if(ch==="+")
               {
                b=b+Number(a);
               }
               if(ch==="-")
               {
                b=b-Number(a);
               }
               if(ch==="*")
                {
                 b=b*Number(a);
                }
                if(ch==="/")
                  {
                   b=b/Number(a);
                  }
                 if(ch==="%")
                {
                   b=b%Number(a);
                }
                a="";
            }
         }
 
            else
            {
                a=a+ch;
                
            }
        }
       
     if(c==='+')
   {
      b=b+Number(a);
   }
     if(c==="-")
     {
        b=b-Number(a);
     }
     if(c==="*")
     {
     b=b*Number(a);
      }
      if(c==="/")
      {
      b=b/Number(a);
      }
      if(c==="%")
      {
      b=b%Number(a);
      }
      if(c==="")
      {
        b="NO MORE VALUE ENTERED";
      }

        ans.value=b;
        b=0;
        a="";
        d=0;
     }
     btn20.addEventListener("click",calc);

 