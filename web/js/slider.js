let sld = 1;

const elementos = {
    'elemento1' : {
        "image" : document.getElementById('img-1'),
        "input" : document.getElementById('selec-1'),
        "desc" : document.getElementById('desc-1'),
        "button" : document.getElementById('but-1')
    },
    'elemento2' : {
        "image" : document.getElementById('img-2'),
        "input" : document.getElementById('selec-2'),
        "desc" : document.getElementById('desc-2'),
        "button" : document.getElementById('but-2')
    },
    'elemento3' : {
        "image" : document.getElementById('img-3'),
        "input" : document.getElementById('selec-3'),
        "desc" : document.getElementById('desc-3'),
        "button" : document.getElementById('but-3')
    },
    'getCheck' : () => {
        if (elementos.elemento1.input.checked === true){
            return 'elemento1';
        } else if (elementos.elemento2.input.checked === true) {
            return 'elemento2';
        } else if (elementos.elemento3.input.checked === true) {
            return 'elemento3';
        };
    }
};

function updateSlider() {
    if (sld < 3){
        sld ++;
    } else {
        sld = 1;
    };

    switch (sld) {
        case 1:
            elementos.elemento1.input.checked = true;
            break;
    
        case 2:
            elementos.elemento2.input.checked = true;
            break;
        
        case 3:
            elementos.elemento3.input.checked = true;
            break;
    }
};

setInterval(() => {
    switch(elementos.getCheck()) {
        case 'elemento1':
            elementos.elemento1.image.style.visibility = 'visible';
            elementos.elemento1.desc.style.visibility = 'visible';
            elementos.elemento1.button.style.visibility = 'visible';

            elementos.elemento2.image.style.visibility = 'hidden';
            elementos.elemento2.desc.style.visibility = 'hidden';
            elementos.elemento2.button.style.visibility = 'hidden';

            elementos.elemento3.image.style.visibility = 'hidden';
            elementos.elemento3.desc.style.visibility = 'hidden';
            elementos.elemento3.button.style.visibility = 'hidden';
            
            break;

        case 'elemento2':
            elementos.elemento1.image.style.visibility = 'hidden';
            elementos.elemento1.desc.style.visibility = 'hidden';
            elementos.elemento1.button.style.visibility = 'hidden';

            elementos.elemento2.image.style.visibility = 'visible';
            elementos.elemento2.desc.style.visibility = 'visible';
            elementos.elemento2.button.style.visibility = 'visible';

            elementos.elemento3.image.style.visibility = 'hidden';
            elementos.elemento3.desc.style.visibility = 'hidden';
            elementos.elemento3.button.style.visibility = 'hidden';
            
            break;

        case 'elemento3':
            elementos.elemento1.image.style.visibility = 'hidden';
            elementos.elemento1.desc.style.visibility = 'hidden';
            elementos.elemento1.button.style.visibility = 'hidden';

            elementos.elemento2.image.style.visibility = 'hidden';
            elementos.elemento2.desc.style.visibility = 'hidden';
            elementos.elemento2.button.style.visibility = 'hidden';

            elementos.elemento3.image.style.visibility = 'visible';
            elementos.elemento3.desc.style.visibility = 'visible';
            elementos.elemento3.button.style.visibility = 'visible';
            
            break;
            
    };
    console.log(`el = ${elementos.getCheck()} sld = ${sld}`)
}, 100);
