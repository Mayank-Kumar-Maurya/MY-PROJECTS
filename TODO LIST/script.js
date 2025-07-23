let btnAdd = document.querySelector(".add");
let inp = document.querySelector(".input");
let ul = document.querySelector("ul");
var i = 0;
console.log(localStorage.length)

// if (typeof (Storage) == null) {
//   console.log("opps!");
// }
// else{
for (let i = 0; i < localStorage.length; i++) { // if(localStorage.get)
  if (localStorage.getItem(`${i}`) != null) 
    {

          let b = document.createElement("li");
          b.innerText = localStorage.getItem(`${i}`);
          console.log(localStorage.getItem(`${i}`));
          b.setAttribute("id", `TEXT${i}`);
    if (b.innerText !== "")
     {

          ul.prepend(b);

          //creating check box
          let ch=document.createElement("input");
          ch.setAttribute("type","checkbox");
          b.append(ch);

          let d = document.createElement("button");
          let icon = document.createElement("i");
          icon.className = "fa-solid fa-trash-can";
          d.appendChild(icon);
          // d.innerText = 
          d.className = `cross`;
          d.setAttribute("onclick", `btnCUT(${i})`);
          b.appendChild(d);
          let c = document.createElement("hr");
          b.append(c);
      }
  }
}
// localStorage.clear();
//***   adding to local storage    *** */
i = 0;
btnAdd.addEventListener("click", () => {
  let a = inp.value;
  if (a != "") 
    {
        localStorage.setItem(`${i}`, a);
        let b = document.createElement("li");

        b.innerText = localStorage.getItem(`${i}`);
        b.setAttribute("id", `TEXT${i}`);
        ul.prepend(b);

      //creating check box
          let ch=document.createElement("input");
          ch.setAttribute("type","checkbox");
          b.append(ch);

        let d = document.createElement("button");
        let icon = document.createElement("i");
        icon.className = "fa-solid fa-trash-can";
        d.appendChild(icon);
        // d.innerText = "X";
        d.className = `cross`;
        d.setAttribute("onclick", `btnCUT(${i})`);
        b.appendChild(d);
        let c = document.createElement("hr");
        b.append(c);

        i++;

        //   console.log(b.innerHTML);
        inp.value = "";
  }
  else {
    alert("ERROR! -EMPTY TEXT CAN'T BE ADDED");
  }
});


// *** clear button

let btnClear = document.querySelector(".clear");
btnClear.addEventListener("click", () => {
  for (let i = 0; i < localStorage.length; i++) {
    let b = document.querySelector("li");
    b.innerText = localStorage.removeItem(`${i}`);
    b.remove();

    //   let d=document.querySelector(".cross");
    //  d.remove();
    //   // b.appendChild(d);
    //   let c=document.querySelector("hr");
    //   // b.append(c);
    //   c.remove();
  }

})
let btnCUT = (i) => {
  let b = document.querySelector(`#TEXT${i}`);
  console.log(b.innerText);
  b.innerText = localStorage.removeItem(`${i}`);
  b.remove();
}
cutBtn = document.querySelector("#")
let e = document.querySelector(".cross");

