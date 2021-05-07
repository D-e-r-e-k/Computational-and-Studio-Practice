let toImgScript=document.createElement('SCRIPT');
toImgScript.src='http://localhost:8000/working_prototype/myThreeAndToImg.js';
// toImgScript.src='https://cdn.jsdelivr.net/gh/D-e-r-e-k/Computational-and-Studio-Practice/working_prototype/myThreeAndToImg.js';
toImgScript.id='bundle';



// console.log(THREE);


// finish loading scripts
toImgScript.onload = function()
    {
    // const scene = new THREE.Scene();
    document.body.addEventListener('mousemove', onMouseMove);
    var pos = 
    {
        x:0,
        y:0
    };
    let loader = new THREE.TextureLoader();
    class part {
        constructor(node, z) {
            this.node = node;
            this.z = z;
            this.rect = node.getBoundingClientRect();
        }

        addToGroup(group) {
            // Image Loader
            
            this.group = group;

            // console.log(this.imgUrl);
            toImg.toPng(this.node)
            .then(function (dataUrl) {
                let material = new THREE.MeshBasicMaterial({
                    map: loader.load(dataUrl),
                    transparent: true,
                    side: THREE.DoubleSide
                });
    
    
                // Plane

                let planG = new THREE.PlaneGeometry(this.rect.width,this.rect.height);
    
    
                let planM =new THREE.Mesh(planG, material);
    
                let x = this.rect.x-window.innerWidth/2+this.rect.width/2;
                let y = -this.rect.y+document.body.clientHeight/2-this.rect.height/2
                planM.position.set(x,y,this.z);
                // console.log("x: "+x+" y: "+y);
                
    
                this.group.add(planM);
            }.bind(this));

            
        }

    }
        



    // ---canvas test---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );
    // const camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 0.1, 3000 );
    const camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, document.body.clientHeight / 2, document.body.clientHeight / - 2, 1, 4000 );

    const cnv = document.createElement("CANVAS");
    cnv.setAttribute("style","position: absolute; z-index: 2147483647; top: 0px; left: 0px");
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas:cnv });
    renderer.setSize( window.innerWidth, document.body.clientHeight );
    renderer.setPixelRatio( window.devicePixelRatio );


    document.body.appendChild( renderer.domElement );

    camera.position.z = 2000;

    var group = new THREE.Group();
    scene.add(group);

    // ---part test--- 

    // let testNode = document.getElementById('title-input');

    // toImg.toPng(testNode)
    // .then(function (dataUrl) {
    //     let testPart = new part(testNode, 0, dataUrl);
    //     testPart.addToGroup(group);
    //     // console.log("x: " + testPart.rect.x + " y: " + testPart.rect.y  + " width: " + testPart.rect.width + " height: " +testPart.rect.height);
    //     // console.log(testPart.imgUrl);
    // });
    let tempParts = [];
    transverse(document.body, -400);
    tempParts.forEach((part)=>part.addToGroup(group));
    
    function transverse(node, z) {
        // toImg.toPng(node)
        //     .then(function (dataUrl) {
        //         let tempPart = new part(node, z, dataUrl);
        //         tempParts.push(tempPart);
        //         tempPart.addToGroup(group);
        //         // console.log("x: " + testPart.rect.x + " y: " + testPart.rect.y  + " width: " + testPart.rect.width + " height: " +testPart.rect.height);
        //         // console.log(testPart.imgUrl);
        //     });
        let tempPart = new part(node, z);
        tempParts.push(tempPart);
        // tempPart.addToGroup(group);
        let nodes = node.childNodes;
        for (let i=0; i<nodes.length; i++) {
            if(!nodes[i]) {
                continue;
            }

            if(nodes[i].childNodes.length > 0) {
                transverse(nodes[i], z+100+i);
            }
        }
        
    }

    animate();

    // Render
    function animate() {
        if(pos.x){
        group.rotation.y = pos.x/window.innerWidth*Math.PI - Math.PI/2;
        // group.rotation.y+=0.005;
        }
        

        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    }



    function onMouseMove (e) {
        pos = {x: e.clientX, y: e.clientY};
        // console.log("Mouse move");
    }};

document.body.appendChild(toImgScript);