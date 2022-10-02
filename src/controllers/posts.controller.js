import view from '../view/posts.html';

export default async () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  fetch('https://cartas-backend.herokuapp.com')
  .then((response) => response.json())
  .then((data) => console.log(data));
;

  return divElement;
};