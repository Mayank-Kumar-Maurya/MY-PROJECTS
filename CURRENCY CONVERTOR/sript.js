let BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
let dropdown=document.querySelectorAll(".dropdown select");
let btn=document.querySelector("button");
let fromCurr=document.querySelector(".from select");
let toCurr=document.querySelector(".to select")
let msg=document.querySelector(".msg");

for(let select of dropdown)
{
    for(let i in countryList)
        {
         let newOption=document.createElement("option");
         newOption.innerText=i;
         if(select.name=="from" && i=="INR")
         {
            newOption.selected="selected";
         }
         else
         if(select.name=="to" && i=="USD")
            {
               newOption.selected="selected";
            }
         select.append(newOption);
        }
        select.addEventListener("change",(evt)=>
        {
           updataFlag(evt.target);
        });
}

let updataFlag=(element)=>
{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    console.log(countryCode);
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let newImg=element.parentElement.querySelector("img");
    // let newImg=document.querySelector(".select_container img");
    newImg.src=newSrc;
};



let updateExchangeRate= async()=>
{

    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal==""||amtVal<1)
    {
        amount.value="1";
        amtVal=amount.value;
    }
    // console.log(amtVal);
    // console.log(fromCurr.value);
    console.log(toCurr.value);
    let URL=`${BASE_URL}${fromCurr.value}${toCurr.value}.json`
    console.log(`${BASE_URL}${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`  );
    
    let response=await fetch(URL);
    let data=await response.json();
    let rate=data[toCurr.value.toLower()];
    let finalAmt=amtVal*rate; 
    msg.innerText=`${amtVal}${fromCurr.value}=${finalAmt} ${toCurr.value}`;
    console.log(data);

}
btn.addEventListener("click",(evt)=>
    {   evt.preventDefault();
        updateExchangeRate();
    });

window.addEventListener("load",()=>
{
   updateExchangeRate();
});
