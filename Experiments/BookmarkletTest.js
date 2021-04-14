
var x = document.getElementsByTagName("BODY")[0];
// x.style.display = "none";
// alert('Erased '+document.title);
var children = x.childNodes;
for (let i = 0; i < children.length; i++) {
  children[i].style.display = "none";
}


var div = document.createElement('div');
div.style.cssText = 'position:fixed;bottom:10px;right:10px;padding: 4px 8px;border: 1px solid black;z-index:99';
document.body.appendChild(div);
div.innerHTML = '<a href="https://en.wikipedia.org/wiki/Erased_de_Kooning_Drawing" target="_blank">Erased </a>' 
+ document.title;