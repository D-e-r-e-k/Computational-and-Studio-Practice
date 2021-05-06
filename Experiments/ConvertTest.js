var script=document.createElement('SCRIPT');
script.src='http://localhost:8000/Experiments/bundle.js';
script.id='bundle';
document.body.appendChild(script);
// console.log(document.getElementById("bundle"));


var x = document.getElementsByTagName("BODY")[0];
// x.style.display = "none";
// alert('Erased '+document.title);
var children = x.childNodes;
for (let i = 0; i < children.length - 1; i++) {
  // children[i].style.display = "none";
  // console.log(i+ " : ", children[i]);
}


// var div = document.createElement('div');
// div.style.cssText = 'position:fixed;bottom:10px;right:10px;padding: 4px 8px;border: 1px solid black;z-index:99';
// document.body.appendChild(div);
// div.innerHTML = 'Convert Test' 
// + document.title;

 toImg.toPng(document.getElementById('title-input'))
      .then(function (dataUrl) {
        /* do something */
        let img = new Image();
        img.src = dataUrl;
        console.log(dataUrl);
        // document.body.appendChild(img);
      });

// toImg.toSvg(document.getElementById('code-textarea'))
//   .then(function (dataUrl) {
//     /* do something */
//     // var svg = document.createElement("svg");
//     // var iner = document.createElementNS('http://www.w3.org/2000/svg', "path");
//     // inner.setAttribute('width', '600');
//     // // svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
//     // document.body.appendChild(svg);
//     console.log(dataUrl);
//   });