
function randomColor(){
    const hex_code = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i< 6; i++){
        color+=hex_code[Math.floor(Math.random()*16)]
    }
    return color
    // console.log(color);
}
// startRandomColor function

let intervalValue
function startRandomColor(){
    if(intervalValue == null){
        intervalValue = setInterval(() => {
            document.body.style.backgroundColor = randomColor()
        }, 500);
    }
}
// stopRandomColor function
function stopRandomColor(){
    clearInterval(intervalValue)
    intervalValue = null
}
// DOM SELECTION
document.querySelector('#start').addEventListener('click',startRandomColor)
document.querySelector('#stop').addEventListener('click',stopRandomColor)
