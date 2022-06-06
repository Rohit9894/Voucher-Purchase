var data=JSON.parse(localStorage.getItem("purchase"));
var container=document.querySelector("#purchased_vouchers");

data.forEach(function (el,index){
    let div=document.createElement("div");
div.setAttribute("id","div")
let img=document.createElement("img");
img.setAttribute("id","img")
img.src=el.image;
let name=document.createElement("h3");
name.setAttribute("class","h3")
name.innerText=el.name;
let price=document.createElement("h3");
price.setAttribute("class","h3")
price.innerText=el.price;
let button=document.createElement("button")
button.innerText="remove";
button.setAttribute("class","buy_voucher");
button.addEventListener("click",function()
{
   remove(el,index)
})
div.append(img,name,price,button)
container.append(div)
})



function addmoney()
{
  var data=JSON.parse(localStorage.getItem("user"));
  var x=data[0].amount;
  console.log(x);
  document.querySelector("#balance").innerText=x;

}
function remove(el,index){
 data.splice(index,1)
 localStorage.setItem("purchase",JSON.stringify(data))
 
  update(el)
    
}
function update(el)
{
  var data=JSON.parse(localStorage.getItem("user"));
 var x=data[0].amount;
    var y=x+el.price;
    console.log(y);
    data[0].amount=y;
    console.log(data)
    localStorage.setItem("user",JSON.stringify(data))
    window.location.reload();
}
addmoney()
// list();