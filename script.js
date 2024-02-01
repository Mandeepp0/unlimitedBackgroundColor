const startbtn = document.querySelector('.start');
const stopbtn = document.querySelector('.stop');
const body = document.querySelector('.clrplt');
const haxClr = document.querySelector('.haxClr');
const rgbClr = document.querySelector('.rgbClr');

// haxClr.innerHTML = 'Mandeep';
const randomColor = () => {
    const set = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += set[Math.floor(Math.random() * 16)];
    }
    return color;
}

const commanCss = (ele, clr) => {
    ele.style.backgroundColor = randomColor();
    ele.style.padding = '10px';
    ele.style.borderRadius = '20px';
    ele.style.color = clr;
}


let stItvrl;
const startChanging = () => {
    if (!stItvrl) {
        stItvrl = setInterval(() => {
            let clr = body.style.backgroundColor = randomColor();
            commanCss(haxClr, clr);
            commanCss(rgbClr, clr);
            haxClr.innerHTML = clr;
            rgbClr.innerHTML = body.style.backgroundColor;
            haxClr.style.backgroundColor = randomColor();
            
        }, 2000);
        console.log("SetInterval STarted!");
    }
};

const stopChanging = () => {
    clearInterval(stItvrl);
    console.log("SetInterval Stopped!");
    stItvrl = null;
}
startbtn.addEventListener('click', startChanging);

stopbtn.addEventListener('click', stopChanging);

