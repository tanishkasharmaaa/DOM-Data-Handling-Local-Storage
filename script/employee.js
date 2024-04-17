let form = document.querySelector('form');
let data=JSON.parse(localStorage.getItem('details'));
console.log(data)
let tbody=document.querySelector('tbody');
function DisplayData(){
    tbody.innerHTML=''
    data.forEach((ele, i) => {
   let tr = document.createElement("tr");
   let td1 = document.createElement("td");
   let td2 = document.createElement("td");
   let td3 = document.createElement("td");
   let td4 = document.createElement("td");
 
 
 
   td1.innerText = i + 1;
   td2.innerText = ele.name;
   td3.innerText = ele.role;
   td4.innerText = ele.Department;
 

   tr.append(td1, td2, td3, td4);
 tbody.append(tr)
 });
}
DisplayData()