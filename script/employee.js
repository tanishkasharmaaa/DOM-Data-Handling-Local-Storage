let form = document.querySelector('form');
let data=JSON.parse(localStorage.getItem('details'));
let tbody=document.querySelector('tbody')

let select=document.querySelector('select');

select.addEventListener('change',function(){
  filter()
})
function filter(){
  let val=select.value
if(val===''){
ShowData()
}
else{
   let filtering=data.filter(ele=>ele.department===val);
  console.log(filtering)
  FilteredData(filtering)
}
 
}

filter()


function FilteredData(FilteredData){
  tbody.innerHTML=''
  FilteredData.forEach((ele, i) => {
  let tr = document.createElement("tr");
  let name = document.createElement("td");
  let employeeId = document.createElement("td");
  let department = document.createElement("td");
  let experience = document.createElement("td");
  let email = document.createElement("td");
  let mobile = document.createElement('td');
  let role= document.createElement('td');
 

 
  name.innerText=ele.name;
  employeeId.innerText=ele.employeeId;
  department.innerText=ele.department;
  experience.innerText=ele.experience;
  email.innerText=ele.email;
  mobile.innerText=ele.mobile;

  let exp=parseInt(ele.experience)
  if(exp>5){
    role.innerText='Senior'
  }
  else if(exp>=2&&exp<=5){
role.innerText='Junior'
  }
else {
role.innerText='Fresher'
}

  
  tr.append(name,employeeId,department,experience,email,mobile,role);
tbody.append(tr)
});
}




function ShowData(){
  tbody.innerHTML=''
   data.forEach((ele, i) => {
  let tr = document.createElement("tr");
  let name = document.createElement("td");
  let employeeId = document.createElement("td");
  let department = document.createElement("td");
  let experience = document.createElement("td");
  let email = document.createElement("td");
  let mobile = document.createElement('td');
  let role= document.createElement('td');
 

 
  name.innerText=ele.name;
  employeeId.innerText=ele.employeeId;
  department.innerText=ele.department;
  experience.innerText=ele.experience;
  email.innerText=ele.email;
  mobile.innerText=ele.mobile;

  let exp=parseInt(ele.experience)
  if(exp>5){
    role.innerText='Senior'
  }
  else if(exp>=2&&exp<=5){
role.innerText='Junior'
  }
else {
role.innerText='Fresher'
}

  
  tr.append(name,employeeId,department,experience,email,mobile,role);
tbody.append(tr)
});
}

ShowData()
