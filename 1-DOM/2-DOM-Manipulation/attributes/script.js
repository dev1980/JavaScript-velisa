let hero = document.querySelector(".hero");
console.log(hero)

hero.setAttribute("id", "hero-text");

let h1 = document.createElement("h1");

h1.textContent = "Heading 1";

h1.setAttribute("class", "heading1")

hero.append(h1)

let value = hero.getAttribute("id")
console.log(value)

hero.removeAttribute("id")
hero.removeAttribute("class")
// hero.remove(h1)

hero.removeChild(h1);