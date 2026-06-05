//HTML 내 (<div class="study-nav">) 버튼 요소를 모두 배열로 저장
const buttons = document.querySelectorAll(".study-nav button");

buttons.forEach(button => { //해당 버튼 순회
    button.addEventListener("click", () => { //클릭 이벤트가 발생하면

        //버튼 내 data-target 속성 값을 변수에 저장 (<button data-target="html">)
        const target = button.dataset.target; 
        //해당 값을 통해 이동할 HTML 위치 (<div id="html">) 변수에 저장
        const section = document.getElementById(target); 

        section.scrollIntoView({ //해당 요소의 위치로 이동
            behavior: "smooth" //부드럽게
        });
    });
});