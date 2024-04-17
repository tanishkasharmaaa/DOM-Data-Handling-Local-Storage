let form=document.querySelector('form');
let username=JSON.parse(localStorage.getItem('staffAuth'))

let data=[]

function saveData(info){
    localStorage.setItem('staffAuth',JSON.stringify(info))
}

function loadData(){
    let store=localStorage.getItem('staffAuth');
    if(store){
        data=JSON.parse(store)
    }
}

function handleSubmitForm(e){
e.preventDefault();
let input=e.target;
let user=input[0].value;
let role=input[1].value;
let email=input[2].value;
let password=input[3].value;
let confirm=input[4].value;

let userFilter=username.filter(ele=>ele.name===user)
if(userFilter.length>0){
    alert('username already')
}
else{
    if(password==confirm){
   let obj={
    name:user,
    role:role,
    email:email,
    password:password
} 
data.push(obj)
saveData(data)
window.location.href='login.html'
}
else{
    alert('Password not matched')
}

}
}


form.addEventListener('submit',function(e){
handleSubmitForm(e)
})

loadData()