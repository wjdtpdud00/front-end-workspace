const navIcons = 
    document.querySelectorAll(".header-main-bottom i");
const aList = document.querySelectorAll(".header-main-bottom a")
navIcons[0].addEventListener("click", function(){
    // a태그들에 동작넣기.
    aList.forEach((a)=>{
        // remove제거를 하면 눌렀던게 돌아옴.
        a.classList.remove("header-main-bottom-right");
    })
});
navIcons[1].addEventListener("click", function(){
  aList.forEach(a => {
    a.classList.add("header-main-bottom-right");
  });
});

// category
const categoryBtn = document.querySelector(".category-btn");
const category = document.querySelector(".category");
categoryBtn.addEventListener("mouseenter", function(){
  category.style.display = "flex";
});
// 마우스가 나갔을때 없어지게함
// categoryBtn.addEventListener("mouseleave", function(){
//   category.style.display ="none";
// });
// category.addEventListener("mouseleave", function(){
//   category.style.display = "none";
// });

const categoryItems = document.querySelectorAll(".category-item");
const categorysub = document.querySelector(".category-sub");
categoryItems.forEach((item, index) =>{
    item.addEventListener("mouseenter", function(){
      categorysub.style.display ="block";
      categoryItems[index].style.display = "block";
    });
    item.addEventListener("mouseleave",function(){
      categorySubItems[index].style.display = "none";
    });
});