const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let lists = document.querySelector("#band");

bands.sort((a,b) => {
	if(a > b) return 1;
	else return -1;
})
let newElem = document.createElement('li');
newParagraph.style.cssText = 'padding : 5; list-style : square`

for(let b of bands){
	newElem.innerText = b;
	lists.append(newElem);
}

console.log(bands);
