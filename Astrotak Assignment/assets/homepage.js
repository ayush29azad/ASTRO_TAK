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
          divContainer.appendChild(paragraphElem);
      });
    } catch (e) {
      console.log('ERROR');
      console.log(e);
    }
  });

  