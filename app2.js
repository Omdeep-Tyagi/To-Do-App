let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");


btn.addEventListener("click",function()
{
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";  /* so that input box khali ho jaye */


    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);  /*rem item */

})

// let delbtns=document.querySelectorAll(".delete")
// for(delbtn of delbtns)
// {
//     delbtn.addEventListener("click",function()  /* rem bracket after function */
//     {
//         let par = this.parentElement; /*this karna hoga ?? */
//         par.remove();

//     })
// }

/* problem hogi...bcoz event delegation use karna hoga...that is event listener works only with already existing data and not with newly added */

ul.addEventListener("click",function(event)   /*ul li ka parent h so as per event bubbling will work */
{
    // console.dir(event.target);
    if(event.target.nodeName == "BUTTON")
    {
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
    
})
