    //load : 모든 로드가 다 끝나고 실행시키겠다.
    //DOMContentLoaded :  dom구조가 로드되어도 실행시점이 더 빠름.
// window.addEventListener("DOMContentLoaded", function(){
//     const h1 = document.querySelector("h1");
//     console.log(h1); 
// });
function btn1(){
    console.log(document.head);
    console.log(document.title);
    console.log(document.body);
    console.log(document.body);

    //동일한 태그가 여러개 존재할 수 있기때문에
    // 배열로 리턴한다
    const div = document.getElementsByTagName("div");
    console.log(div);
    console.log(div[0]); //<div>Hello, JavaScript</div>  
    console.log(div[1]);
}

function btn2(){
    const div = document.getElementById("testId");
    console.log(div);
}

function btn3(){
      //동일한 class속성 값을 갖는 태그가 여러개 존재할 수 있기때문에
    //   배열로리턴
    const div = document.getElementsByClassName("testClass");
    console.log(div);
    console.log(div[0]);
    console.log(div[1]);
}
function btn4(){
    //동일한 name속성 값을 갖는 태그가 여러개 존재할 수 있기때문에
    //   배열로리턴
    const div = document.getElementsByName("testName");
    console.log(div);
    // console.log(document.testName);
    // console.log(document.frm);//오류로 출력 ->frm 폼태그만가능 
}

function btn5(){
    let div = document.querySelector("#testId");
    console.log(div);
    div = document.querySelectorAll(".testClass");
    console.log(div[0]);
}
function btn6() {
    const div = document.querySelectorAll(".testClass"); //객체조작하기 요소들을 가져옴
    div[0].textContent = "<span>안녕하세요</span>";//Hello, World!
    div[1].innerHTML = "<span>안녕하세요</span>"; 
}

function btn7() {
    const div = document.querySelector("#testId");
    div.setAttribute("data-test", "테스트");
    div.setAttribute("data-test", "테스트2");
    console.log(div.getAttribute("class"));
}

function btn8(){
    const div = document.querySelector("#testId");
    div.style.color = "orange";
    div.style.backgroundColor = "yellow"
}

const div2 = document.querySelector("#testId2");

function btn9(){
    div2.classList.add("black");
}
function btn10(){
    div2.classList.remove("black");
}
function btn11(){
    const check = div2.classList.contains("black");
    console.log(check);
    if(check){
        div2.classList.remove("black");
        div2.classList.add("white");
    } else{
        div2.classList.add("black");
        div2.classList.remove("white");
    }
}
function btn12(){
    div2.classList.toggle("black");
}
function btn13() {
    // 자식 객체 생성
    const p = document.createElement("P");
    p.innerHTML = "Lorem Ipsum";
    // 부모 객체에 추가
    div2.appendChild(p);
}
function btn14(){
    const p = document.querySelector("p");
    // div2.removeChild(p);
    p.parentNode.removeChild(p);
}