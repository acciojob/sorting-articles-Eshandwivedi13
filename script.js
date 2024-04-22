const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let lists = document.querySelector("#band");
console.log(lists, "abc")
bands.sort((a,b) => {
	if(a > b) return 1;
	else return -1;
})
for(let b of bands){
	 let newElem = document.createElement('li');
	newElem.style.cssText = 'padding : 20px; list-style : square;'
    newElem.innerText = b;
    lists.appendChild(newElem); 
	lists.appendChild(document.createElement('hr'));
}

console.log(lists);
