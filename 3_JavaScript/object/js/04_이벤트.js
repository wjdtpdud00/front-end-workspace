const h1 = document.querySelector("h1");
h1.onmouseenter =function(){
    h1.style.backgroundColor = "skyble";
};
h1.onmouseleave = function(){
    h1.style.backgroundColor = "pink";
};
// h1.onclick = function(){
//     h1.style.backgroundColor = "purple";
// };
h1.addEventListener("click", function(){
    h1.style.backgroundColor ="purple";
});

const container = document.querySelector('.container');
const img = document.querySelectorAll(".container img");

// 이벤트 객체 - 발생한 이벤트에 대한 많은 정보를 담고있는 애
function removeHandler(e){  //이벤트 핸들러 함수에는 event 객체가 괄호안에 숨어있음.
    // container.removeChild(this);
    // console.log(this);
    console.log(e.currentTarget);
    console.log(e.target);
    if(e.target !== e.currentTarget){
        // e.currentTarget.removeChild(e.target);   //태그를 지우는방법
        e.target.style.display = "none";
    }
}


container.addEventListener('click', removeHandler);

/*
for(item of img){
    item.addEventListener("click", removeHandler);
}
*/