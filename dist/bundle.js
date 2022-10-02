(()=>{"use strict";var __webpack_modules__={141:()=>{eval('\n;// CONCATENATED MODULE: ./src/view/posts.html\n// Module\nvar code = "<h2 class=\\"text-center text-white display-4\\">Total Cartas: <span id=\\"total\\"></span></h2> <ul class=\\"list-group\\" id=\\"posts\\" style=\\"height:70vh;overflow:auto\\"></ul>";\n// Exports\n/* harmony default export */ const view_posts = (code);\n;// CONCATENATED MODULE: ./src/view/cartas.json\nconst cartas_namespaceObject = JSON.parse(\'[{"id":0,"nombre":"Endolitia","beneficios":"+6 de población en condiciones con terreno sólido","description":"Un endolito es un organismo que vive dentro de una roca, coral, exoesqueleto, o en los poros entre los granos minerales de una roca."},{"id":1,"nombre":"Oligótrofia","beneficios":"En condiciones de bajos nutrientes, no puede perder población","description":"Un oligótrofo es un organismo que puede vivir en un ambiente que ofrece niveles muy bajos de nutrientes ."},{"id":2,"nombre":"Copiotrofia","beneficios":"+1 de poder al final de cada turno. En condiciones de bajos nutrientes, pierde el doble de población por turno","description":"Un copiotrofo es un organismo que se encuentra en ambientes ricos en nutrientes, particularmente carbono. Son lo opuesto a los oligótrofos, que sobreviven en concentraciones de carbono mucho más bajas."},{"id":3,"nombre":"Radiorresistencia","beneficios":"Inmune a los efectos de la radiación","description":"La radiorresistencia es la capacidad de ciertos organismos de sobrevivir en ecosistemas con niveles muy altos de radiaciones ionizantes."},{"id":4,"nombre":"Radiófilia","beneficios":"Gana 1 de población por turno bajo radiación","description":"La radiofilia es la capacidad de unos pocos organismos de prosperar bajo niveles muy altos de radiación"},{"id":5,"nombre":"Sapiencia","beneficios":"Roba una carta extra al inicio de tu turno","description":"La sabiduría o experiencia es un rasgo que se desarrolla con la aplicación de la inteligencia en la experiencia propia"},{"id":6,"nombre":"Ser mecánico","beneficios":"Inmune a los efectos de la radiación, inafectado por bajos y altos nutrientes. No puede atacar bajo tormenta de arena","description":"Un ser mecánico no requiere sustento como los seres vivos, aunque dependen de un grupo de instrucciones para cumplir su propósito"},{"id":7,"nombre":"Agallas","beneficios":"+3 de población  mientras no haya una tormenta de arena","description":"Las branquias o agallas son los órganos respiratorios de numerosos animales acuáticos, con los cuáles atrapan el oxígeno que se encuentra disuelto en el agua"},{"id":8,"nombre":"Extremidades prensiles","beneficios":"+1 acción por turno","description":"Extremidades con capacidad de sujetar resultan extremadamente útiles en cualquier ámbito, especialmente en la exploración espacial."},{"id":9,"nombre":"Cryptobiosis","beneficios":"Puede saltar un turno e ignorar los ataques y condiciones actuales","description":"La criptobiosis es un estado de inactividad extrema en respuesta a condiciones ambientales adversas. En el estado criptobiótico, todos los procesos metabólicos se detienen, impidiendo la reproducción, el desarrollo y la reparación. En la criptobiosis, un organismo puede vivir casi indefinidamente mientras espera que las condiciones ambientales mejoren."},{"id":10,"nombre":"Gravitropismo","beneficios":"Resiste altas gravedades","description":"El gravitropismo es un proceso coordinado de crecimiento diferencial de una planta en respuesta a la atracción de la gravedad."}]\');\n;// CONCATENATED MODULE: ./src/controllers/posts.controller.js\n\n\n\n/* harmony default export */ const posts_controller = (async (nro) => {\n  const divElement = document.createElement("div");\n  divElement.innerHTML = view_posts;\n\n  const postsElement = divElement.querySelector("#posts");\n  const totalPosts = divElement.querySelector(\'#total\');\n  \n  const posts = cartas_namespaceObject;  \n  postsElement.innerHTML = `\n    <li class="list-group-item border-light bg-dark text-white">\n    <h3>${posts[nro].nombre}</h3>\n    <h5>${posts[nro].beneficios}</h5>\n    <p>\n    ${posts[nro].description}\n    </p>\n    </li>\n  `;\n  \n  totalPosts.innerHTML += posts.length;\n\n  return divElement;\n});\n\n;// CONCATENATED MODULE: ./src/view/404.html\n// Module\nvar _404_code = "<h2>404</h2>";\n// Exports\n/* harmony default export */ const _404 = (_404_code);\n;// CONCATENATED MODULE: ./src/controllers/404.controller.js\n\n\n/* harmony default export */ const _404_controller = (() => {\n  const divElement = document.createElement("div");\n  divElement.innerHTML = _404;\n  return divElement;\n});\n\n;// CONCATENATED MODULE: ./src/controllers/index.js\n\n\n\nconst pages = {\n  posts: posts_controller,\n  notFound: _404_controller,\n};\n\n\n\n;// CONCATENATED MODULE: ./src/router/index.routes.js\n\n\nconst router = async (route) => {\n  let content = document.getElementById("root");\n  content.innerHTML = "";\n\n  if ((route.slice(2) >= 0) && (route.slice(2) <= 10)){\n    return content.appendChild(await pages.posts(route.slice(2)));\n  }\n  else {\n    return content.appendChild(pages.notFound());\n  }};\n\n\n\n;// CONCATENATED MODULE: ./src/main.js\n\n\n\n\n\nconst init = () => {\n  router(window.location.hash);\n\n  window.addEventListener("hashchange", () => {\n    router(window.location.hash);\n  });\n};\n\nwindow.addEventListener("load", init);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGEtdmFuaWxsYWpzLy4vc3JjL3ZpZXcvcG9zdHMuaHRtbD81ZDBiIiwid2VicGFjazovL3NwYS12YW5pbGxhanMvLi9zcmMvY29udHJvbGxlcnMvcG9zdHMuY29udHJvbGxlci5qcz81Mzk4Iiwid2VicGFjazovL3NwYS12YW5pbGxhanMvLi9zcmMvdmlldy80MDQuaHRtbD8xMDJkIiwid2VicGFjazovL3NwYS12YW5pbGxhanMvLi9zcmMvY29udHJvbGxlcnMvNDA0LmNvbnRyb2xsZXIuanM/NGJmNCIsIndlYnBhY2s6Ly9zcGEtdmFuaWxsYWpzLy4vc3JjL2NvbnRyb2xsZXJzL2luZGV4LmpzPzcwNTUiLCJ3ZWJwYWNrOi8vc3BhLXZhbmlsbGFqcy8uL3NyYy9yb3V0ZXIvaW5kZXgucm91dGVzLmpzPzc1MTYiLCJ3ZWJwYWNrOi8vc3BhLXZhbmlsbGFqcy8uL3NyYy9tYWluLmpzPzU2ZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLG1LQUFtSztBQUNuSztBQUNBLGlEQUFlLElBQUksRTs7OztBQ0htQjtBQUNHOztBQUV6Qyx1REFBZTtBQUNmO0FBQ0EseUJBQXlCLFVBQUk7O0FBRTdCO0FBQ0E7O0FBRUEsZ0JBQWdCLHNCQUFNLEM7QUFDdEI7QUFDQTtBQUNBLFVBQVUsa0JBQWtCO0FBQzVCLFVBQVUsc0JBQXNCO0FBQ2hDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUMsRUFBQzs7O0FDeEJGO0FBQ0EsSUFBSSxTQUFJO0FBQ1I7QUFDQSwyQ0FBZSxTQUFJLEU7O0FDSGlCOztBQUVwQyxzREFBZTtBQUNmO0FBQ0EseUJBQXlCLElBQUk7QUFDN0I7QUFDQSxDQUFDLEVBQUM7OztBQ05xQztBQUNDOztBQUV4QztBQUNBLFNBQVMsZ0JBQUs7QUFDZCxZQUFZLGVBQVE7QUFDcEI7O0FBRWlCOzs7QUNSNEI7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxXQUFXO0FBQ2hEO0FBQ0E7QUFDQSwrQkFBK0IsY0FBYztBQUM3Qzs7QUFFa0I7OztBQ2I2Qjs7QUFFRDtBQUNwQjs7QUFFMUI7QUFDQSxFQUFFLE1BQU07O0FBRVI7QUFDQSxJQUFJLE1BQU07QUFDVixHQUFHO0FBQ0g7O0FBRUEiLCJmaWxlIjoiMTQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGgyIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGRpc3BsYXktNFxcXCI+VG90YWwgQ2FydGFzOiA8c3BhbiBpZD1cXFwidG90YWxcXFwiPjwvc3Bhbj48L2gyPiA8dWwgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiIGlkPVxcXCJwb3N0c1xcXCIgc3R5bGU9XFxcImhlaWdodDo3MHZoO292ZXJmbG93OmF1dG9cXFwiPjwvdWw+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsImltcG9ydCB2aWV3IGZyb20gJy4uL3ZpZXcvcG9zdHMuaHRtbCc7XG5pbXBvcnQgY2FydGFzIGZyb20gJy4uL3ZpZXcvY2FydGFzLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAobnJvKSA9PiB7XG4gIGNvbnN0IGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZFbGVtZW50LmlubmVySFRNTCA9IHZpZXc7XG5cbiAgY29uc3QgcG9zdHNFbGVtZW50ID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bvc3RzXCIpO1xuICBjb25zdCB0b3RhbFBvc3RzID0gZGl2RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWwnKTtcbiAgXG4gIGNvbnN0IHBvc3RzID0gY2FydGFzOyAgXG4gIHBvc3RzRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGJvcmRlci1saWdodCBiZy1kYXJrIHRleHQtd2hpdGVcIj5cbiAgICA8aDM+JHtwb3N0c1tucm9dLm5vbWJyZX08L2gzPlxuICAgIDxoNT4ke3Bvc3RzW25yb10uYmVuZWZpY2lvc308L2g1PlxuICAgIDxwPlxuICAgICR7cG9zdHNbbnJvXS5kZXNjcmlwdGlvbn1cbiAgICA8L3A+XG4gICAgPC9saT5cbiAgYDtcbiAgXG4gIHRvdGFsUG9zdHMuaW5uZXJIVE1MICs9IHBvc3RzLmxlbmd0aDtcblxuICByZXR1cm4gZGl2RWxlbWVudDtcbn07XG4iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8aDI+NDA0PC9oMj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiaW1wb3J0IHZpZXcgZnJvbSBcIi4uL3ZpZXcvNDA0Lmh0bWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2RWxlbWVudC5pbm5lckhUTUwgPSB2aWV3O1xuICByZXR1cm4gZGl2RWxlbWVudDtcbn07XG4iLCJpbXBvcnQgUG9zdHMgZnJvbSBcIi4vcG9zdHMuY29udHJvbGxlclwiO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuLzQwNC5jb250cm9sbGVyXCI7XG5cbmNvbnN0IHBhZ2VzID0ge1xuICBwb3N0czogUG9zdHMsXG4gIG5vdEZvdW5kOiBOb3RGb3VuZCxcbn07XG5cbmV4cG9ydCB7IHBhZ2VzIH07XG4iLCJpbXBvcnQgeyBwYWdlcyB9IGZyb20gXCIuLi9jb250cm9sbGVycy9pbmRleFwiO1xuXG5jb25zdCByb3V0ZXIgPSBhc3luYyAocm91dGUpID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICBpZiAoKHJvdXRlLnNsaWNlKDIpID49IDApICYmIChyb3V0ZS5zbGljZSgyKSA8PSAxMCkpe1xuICAgIHJldHVybiBjb250ZW50LmFwcGVuZENoaWxkKGF3YWl0IHBhZ2VzLnBvc3RzKHJvdXRlLnNsaWNlKDIpKSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZXMubm90Rm91bmQoKSk7XG4gIH19O1xuXG5leHBvcnQgeyByb3V0ZXIgfTtcbiIsImltcG9ydCB7IHJvdXRlciB9IGZyb20gXCIuL3JvdXRlci9pbmRleC5yb3V0ZXNcIjtcblxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgXCIuL3Nhc3MvbWFpbi5zY3NzXCI7XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIHJvdXRlcih3aW5kb3cubG9jYXRpb24uaGFzaCk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsICgpID0+IHtcbiAgICByb3V0ZXIod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICB9KTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBpbml0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///141\n')}},__webpack_exports__={};__webpack_modules__[141]()})();