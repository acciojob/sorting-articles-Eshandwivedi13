const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let lists = document.querySelector("#bands");
console.log(lists, "abc")
bands.sort((a,b) => {
  const bandA = a.replace(/^(a |the |an )/i, '').toUpperCase();//
  const bandB = b.replace(/^(a |the |an )/i, '').toUpperCase();
  if (bandA > bandB) {
    return 1;
  } else {
    return -1;
  }
})
for(let b of bands){
	//  let newElem = document.createElement('li');
	// newElem.style.cssText = 'padding : 23px; list-style : square; padding-right:250px; overflow: hidden;'
 //    newElem.innerText = b;
 //    lists.appendChild(newElem); 
	// let divElem = document.createElement('div');
	// divElem.style.cssText = "width : 100%; border-top : 1px solid grey; color : #f7f7f7"
	// lists.appendChild(divElem);

	let newElem = document.createElement('li');
    newElem.style.cssText = 'padding : 23px; list-style : square; padding-right:250px; overflow: hidden;'
    newElem.innerText = b;
    lists.appendChild(newElem); 
	
}

console.log(lists);
