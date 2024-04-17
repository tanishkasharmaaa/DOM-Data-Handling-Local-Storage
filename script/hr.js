let employeesData = [
    {
      name: "Manjeet",
      role: "Marketing Head",
      Department: "Marketing",
    },
    {
      name: "Manisha",
      role: "Content Head",
      Department: "Marketing",
    },
    {
      name: "Revtesh",
      role: "Associate Instructor",
      Department: "Teaching",
    },
    {
      name: "Gundeep",
      role: "Instructor",
      Department: "Teaching",
    },
    {
      name: "Jaspleen",
      role: "Curriculum head",
      Department: "Curriculum",
    },
  ];
  
  
  
  
  let container = document.getElementById("container");
  let form=document.querySelector('form')
  let tbody=document.querySelector('tbody');

  console.log(employeesData)
  
function saveData(data){
    localStorage.setItem('details',JSON.stringify(data))
}

function loadData(){
    let store=localStorage.getItem('details');
    if(store){
        employeesData=JSON.parse(store)
    }
}


 function ShowData(){
    tbody.innerHTML=''
     employeesData.forEach((ele, i) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let btn = document.createElement("button");
 
    btn.innerText='Delete'
    btn.addEventListener('click',function(){
      handleDelete(i)
    
    })
  
  
  
    td1.innerText = i + 1;
    td2.innerText = ele.name;
    td3.innerText = ele.role;
    td4.innerText = ele.Department;
  
    td5.append(btn)
    tr.append(td1, td2, td3, td4,td5);
  tbody.append(tr)
  });
  }


  function handleDelete(ele){
employeesData.splice(ele,1)
saveData(employeesData)
ShowData()
  }

 function handleFormSubmit(e){
e.preventDefault();
let input=e.target;
let name=input[0].value;
let role=input[1].value;
let Department=input[2].value;

let obj={
    name:name,
    role:role,
    Department:Department
}
employeesData.push(obj)
console.log(employeesData)
saveData(employeesData)
ShowData()

name.innerText=null
role.innerText=null
Department.innerText=null
 }


 form.addEventListener('submit',function(e){
    handleFormSubmit(e)
 })

window.addEventListener('DOMContentLoaded',function(){
    loadData();
   ShowData() 
})
