
async function list()
{
    res=await fetch("https://masai-vouchers-api.herokuapp.com/api/vouchers")
    data=await res.json();
    console.log(data[0].vouchers)
    var data=(data[0].vouchers)
    // console.log(data)
    append(data)
}
function append(data)
{
var container=document.querySelector("#voucher_list");

data.forEach(function (el){
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
button.innerText="Buy";
button.setAttribute("class","buy_voucher");
button.addEventListener("click",function()
{
    buyvoch(el)
})
div.append(img,name,price,button)
container.append(div)
})


}
function addmoney()
{
  var data=JSON.parse(localStorage.getItem("user"));
  var x=data[0].amount;
  console.log(x);
  document.querySelector("#wallet_balance").innerText=x;

}
function buyvoch(el){
    var items=JSON.parse(localStorage.getItem('purchase'))||[];
    items.push(el);
    localStorage.setItem("purchase",JSON.stringify(items));
    var data=JSON.parse(localStorage.getItem("user"));
    var x=data[0].amount;
  
    if(x>el.price)
    {
        alert("succesfully purchased")
    }
    else
    {
        alert("insufficent fund")
    }
    var y=x-el.price;
    console.log(y);
    data[0].amount=y;
    console.log(data)
    localStorage.setItem("user",JSON.stringify(data))
    window.location.reload();
  
    
}
addmoney()
list();