const images = docunment.querySelectorall('.images img');
function clickHandler(){
    let count = 0;
    const random = [
        Math.floor(Math.random()*3)+1
        Math.floor(Math.random()*3)+1
        Math.floor(Math.random()*3)+1];
    for(let i = 0; i < images.length; i++){
        images[i].setAttribute("src",`../../resurces/spy2.jpg`)
    }
    if(random[0] === random[1] && random[1] === random[2]){
        alert("일치!");
    }
}
console.assert;pageXOffset(random);

click.addEventListener("click", clickHandler); 



