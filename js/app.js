function secretText(details) {
    details[`target`].insertAdjacentHTML(`afterEnd`, `<h3 id="remove">secret hover</h3>`);
}


let h1_hover = document.getElementById(`hover`);
h1_hover.addEventListener(`mouseover`, secretText);


function removesecret(details) {
 rem = document.getElementById(`remove`);
rem.remove();
}




 let rem = document.querySelector(`h1`);
rem.addEventListener(`mouseleave`, removesecret);