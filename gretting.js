const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting =document.querySelector(".js-greetings");

//slelctor를 이용하여 필요 tag들을 불러왔다.

const USER_LS = "currentUser",
    SHOWING_CN = "showing";
////localStorage에 저장될 key 값을 currentUser로 사용하기 위해 USER_LS 를 const로 변수설정해줌.

function saveName(text){
    localStorage.setItem(USER_LS, text);
}
//localStorage 내부함수(setItem) 를 이용하여 key & value값을 내부에 저장함.

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
//form은 기본적으로 방울 같이 올라가서 사라져버림 (다른것에 영향을 주며 ) 근데 우리는 이걸 저장하고 싶으니까 일단 default값인 사라짐을 막기위해 event.preventDefault를 설정
//paintGreeting과 saveName은 아래에 있는 함수당.

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
} //

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

//h4태그에 이름 넣기 위해 생성한 함수. claasList의 add 와 remove를 이용함.그리고 greeting 에 해당하는 h4에 추가로 hello를 넣기위해 innerText사용

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
       askForName();
    }else{
        paintGreeting(currentUser);  //someone
    }
}
//조건문을 이용하여 localstorage에 정보가 있으면 paintgreeting함수를 발동하도록, 없으면 askForName함수를 실행하도록 만들었다.

function init(){
    loadName();
}

init();
