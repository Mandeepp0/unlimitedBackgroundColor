const startbtn = document.querySelector('.start');
const stopbtn = document.querySelector('.stop');
const body = document.querySelector('.clrplt');
const haxClr = document.querySelector('.haxClr');
const rgbClr = document.querySelector('.rgbClr');
const intervalTime = document.querySelector('#number');
const setTime = document.querySelector('.set');
let settime = 1000;



 




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
    stopChanging();


    // geting time function starts
        let time = intervalTime.value;
        if (!time.length)   console.log("Please enter a valid number");
        else    (time < 100 || time > 5000) ?   console.log("Please Enter an Interval between 100ms and 5000ms") : settime = time;
    // geting time function ENDS

    
    if (!stItvrl) {
        stItvrl = setInterval(() => {
            let clr = body.style.backgroundColor = randomColor();
            commanCss(haxClr, clr);
            commanCss(rgbClr, clr);
            haxClr.innerHTML = clr;
            rgbClr.innerHTML = body.style.backgroundColor;
            haxClr.style.backgroundColor = randomColor();
            
        }, settime);
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

