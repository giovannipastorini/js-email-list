/* console.log("it works"); */


const ulEl=document.getElementById("email-list");
/* console.log(ulEl); */

const api_endpoint='https://flynn.boolean.careers/exercises/api/random/mail';

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

