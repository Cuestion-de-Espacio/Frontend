import { pages } from "../controllers/index";

const router = async (route) => {
  let content = document.getElementById("root");
  content.innerHTML = "";

  if ((route.slice(2) >= 0) && (route.slice(2) <= 10)){
    return content.appendChild(await pages.posts(route.slice(2)));
  }
  else {
    return content.appendChild(pages.notFound());
  }};

export { router };
