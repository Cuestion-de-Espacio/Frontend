import view from '../view/posts.html';

export default async (idMounstro) => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;
  const postsElement = divElement.querySelector("#posts");

  fetch('https://cartas-backend.herokuapp.com')
  .then((response) => response.json())
  .then((data) =>   
    postsElement.innerHTML += `
    <div class = 'box'>
    <h1>${data[idMounstro].nombre}</h1>
    <h5>${data[idMounstro].beneficios}</h5>
    <p>${data[idMounstro].description}</p>
    </div>
    `
  );
;
  return divElement;
};