function store()
{
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let address=document.querySelector("#address").value;
    let amount=document.querySelector("#amount").value;
    class user
    {
      constructor(name,email,address,amount)
      {
          this.name=name;
          this.email=email;
          this.address=address;
          this.amount=amount;
      }
    }
    
    var x=new user(name,email,address,amount)
    arr1=[];
    arr1.push(x)
    

  
     localStorage.setItem("user",JSON.stringify(arr1))
     document.querySelector("#name").value=null;
     document.querySelector("#email").value=null;
     document.querySelector("#address").value=null;
     document.querySelector("#amount").value=null;
  
}