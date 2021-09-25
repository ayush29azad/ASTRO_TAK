
//Js Code for diplaying items in drop box (working prefectly fine)
async function loadUsers() {
    const response = await fetch("../reference_json/questions_API.js");
    return response.json();
   
  }
  
document.addEventListener("DOMContentLoaded", async () => {
    try {
      const users = await loadUsers();
      const divContainer = document.getElementById('question');
      users.forEach(user => {
        const paragraphElem = document.createElement('option');
        paragraphElem.innerText = `${user.question}`;
        // edited line saving matching data to option
        paragraphElem.data = user
        divContainer.appendChild(paragraphElem);
      });
    } catch (e) {
      console.log('ERROR');
      console.log(e);
    }
    });
    
    // edited line
    var select = document.querySelector("#question"),
      priceEl = document.querySelector(".priceShow")
      select.onchange = function(){
          var selected = select[select.selectedIndex]
          priceEl.innerText = typeof selected.data != "undefined" ? selected.data.price:""
      }

      