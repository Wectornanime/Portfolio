let imgElement = document.querySelector('img#img-wrap');
let req = new XMLHttpRequest();

req.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let data = JSON.parse(this.response);

        let id = Math.floor( Math.random() * Object.keys(data).length );
        let imgID = Object.values(data)[id];
        imgElement.src = `images/${imgID["name"]}`;
        console.log(imgID);
    };
};

req.open('GET', 'images.json', true);
req.send();

