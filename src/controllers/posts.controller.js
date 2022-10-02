import view from '../view/posts.html';

export default async (idMounstro) => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;
  const postsElement = divElement.querySelector("#posts");

  fetch('https://cartas-backend.herokuapp.com')
  .then((response) => response.json())
  .then((data) =>   
    postsElement.innerHTML += `
    <h3>${data[idMounstro].nombre}</h3>
    <h3>${data[idMounstro].beneficios}</h3>
    <h3>${data[idMounstro].description}</h3>
    `
  );
;
  return divElement;
};