// microfrontend.js
export function renderTemplate() {
    const templatePath = './index.html';
    fetch(templatePath)
      .then(response => response.text())
      .then(data => {
        document.body.innerHTML = data.trim();
      })
      .catch(error => console.log(error));
  }
  
  renderTemplate();
  