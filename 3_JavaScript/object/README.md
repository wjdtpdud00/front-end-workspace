# DOM(Document Object Model)

- HTML 문서의 태그들을 객체로 생성하고 객체들의 관계에 따라 트리
구조로 구성한 객체
- document 객체는 window 객체의 하위 객체로 DOM트리의 가장 최상위 객체
- HTML 태그를 노드라고 한다.


## 스크립트 선언 위치

1. 모든 태그들을 작성하고 body 태그 맨 마지막에 자바스크립트를 
실행하는 방법

```html
<body>
    <div></div>
    <script></script>
</body>
```
2. 문서 전체에 해당하는 document 에 DOMContentLoaded이벤트를 
사용하는 방법

```js
document.addEventListener("DOMContentLoaded", function(){
    //코드작성
})
```

## 문서 객체 가져오기

### CSS 선택자를 이용한 검색

```JS
document.querySelector("선택자");
document.querySelectorAll("선택자");
```

- querySelector : 지정된 CSS 선택자에 해당하는 첫번째 요소 반환
- querySelectorAll : 지정된 css선택자에 해당하는 모든요소 반환

## 문서 객체 조작하기

### textContent, innerHTML

- textContent : 문서 객체 내에 문자 그대로 넣는다.
- innerHTML : 문서 객체 내에 HTML 형식으로 넣는다.

```js
문서객체.textContent;
문서객체.innerHTML;
```

### setAttribute, getAttribute

- setAttribute : 문서 객체의 속성을 추가하거나 수정할 때
- getAttribute : 문서 객체의 속성을 가져올 때

```js
문서객체.setAttribute(속성이름, 값);
문서객체.getAttribute(속성이름);
```

### style 조작

- 문서 객체의 스타일을 조작할 때는 style로 접근할 수 있다.
- style 속성은 만약 background-color는 backgroundColor처럼
- 기호 대신 캐멀 케이스(camelCase)로 사용해야 한다.

```js
문서객체.style.속성 ="값";
```

### classList

- 사실 스타일을 조작할 때는 style로 접근하는 방식보다 미리 
클래스에 스타일을 지정하고 classList로 해당 클래스를 추가,
삭제로 조작하는 것을 추천!
```js
문서객체.classList.add("클래스명");
문서객체.classList.remove("클래스명");
문서객체.classList.contains("클래스명");
문서객체.classList.toggle("클래스명");
```
- contains는 해당 클래스명 유무 체크
- 있다면 삭제, 없다면 추가를 알아서 해주는 toggle!

## 문서 객체 추가하기

- createElement로 문서 객체 생성
- appendChild로 부모 객체에 자식 객체 추가

```js
const 자식객체 = document.createElement(문서객체이름);
부모객체.appendChild(자식객체);

```
## 문서 객체 삭제하기

- 부모 객체에서 자식 객체를 삭제할 수 있따.
- 만약 부모 객체에 접근해야 한다면 parentNode를 사용한다.

부모객체(자식객체.parentNode).removeChild(자식객체);//부모객체를 자식객체.parentNode 나타낼 수 있다.

# 이벤트(Event)

- 브라우저에서 사용자가 하는 모든 행위(마우스 클릭, 키보드 입력 등)를 
  이벤트(Event)라 한다.

## 이벤트 설정 방법

### 인라인 방식

- HTML 태그에 이벤트 핸들러(함수) 속성을 이요하여
직접 자바스크립트 코드를 작성하는 방법

``` html
<button onclick ="자바스크립트코드">버튼</button>
```

### 이벤트 핸들러 프로퍼티 방식

- 요소가 가지고 있는 이벤트 속성에 이벤트 핸들러를 설정하는
방법이다.

```js
문서객체.onclick= function{
    //수행코드
}
```

### addEventListner() 방식

- W3C에서 공식적으로 권장하는 이벤트 지정 방식
- 하나의 이벤트에 대해 여러 개의 이벤트 핸들러를 등록할 수있다.

```JS
문서객체.addEventListener(이벤트이름, 함수);
```

#### 이벤트 삭제

```js
문서객체.removeEventListener(이벤트이름, 함수);
```







