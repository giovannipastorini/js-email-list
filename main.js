const ulEl=document.getElementById("email-list");


const api_endpoint='https://flynn.boolean.careers/exercises/api/random/mail';

const btnEl=document.querySelector(".btn");

btnEl.addEventListener("click", function (){
    //svuoto la lista
    ulEl.innerHTML="";
    //utilizzo il metodo nativo ajax: fetch  
    for (let i=0; i<10; i++){
    fetch(api_endpoint)
    .then(response => response.json())
    .then(data => {
        // the API response data is inside the parameter
        console.log(data);
        const liEl= document.createElement("li");
        liEl.innerHTML=data.response;
        ulEl.appendChild(liEl);
    }) 
} 


})


/* 
//utilizzo il metodo nativo ajax: fetch  
for (let i=0; i<10; i++){
   fetch(api_endpoint)
  .then(response => response.json())
  .then(data => {
  	// the API response data is inside the parameter
  	console.log(data);
    const liEl= document.createElement("li");
    liEl.innerHTML=data.response;
    ulEl.appendChild(liEl);
  }) 
} 
*/

