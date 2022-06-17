const init = () => {

    const form = document.querySelector('form');
    const inputField = document.querySelector('#searchByID')
    form.addEventListener('submit', (event) =>{
      event.preventDefault();
      fetch( `http://localhost:3000/movies/${inputField.value }` )
        .then( res => res.json() )
        .then( data =>{
          const titleHtml = document.querySelector('#titleHtml');
          const summaryHtml = document.querySelector('#summaryHtml')
          titleHtml.innerHTML = data.title;
          summaryHtml.innerHTML = data.summary;
        });
  
    });
  }
  
  document.addEventListener('DOMContentLoaded', init); 