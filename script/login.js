let form=document.querySelector('form');
let info=JSON.parse(localStorage.getItem('staffAuth'))
console.log(info)
function handleSubmitForm(e){
    e.preventDefault();
    let input=e.target;
    let email=input[0].value;
    let password=input[1].value;
let userFilter=info.filter((ele)=>ele.email===email&&ele.password===password);
if(userFilter.length>0){
let nobj=userFilter[0].role;
if(nobj==='Employee'){
    alert('logged in')
    window.location.href='employee.html'
}
else if(nobj==='HR'){
alert('logged in');
window.location.href='hr.html'
}
}
else{
    alert('Invaild email or password')
}
}
form.addEventListener('submit',function(e){
    handleSubmitForm(e)
})