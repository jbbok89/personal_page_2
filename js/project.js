const projects = [
    {
        id: 1,
        title: "PHP 웹사이트구현 및 모의 해킹",
        desc: "웹사이트 구조 학습 및 웹 해킹 실습",
        image: "img/project_1.png"
    },
    {
        id: 2,
        title: "DevOps CI/CD 파이프라인 구현",
        desc: "DevOps의 전반적인 이해 및 자동화 구축",
        image: "img/project_2.png"
    },
    {
        id: 3,
        title: "HTML + CSS + JS 홈페이지 제작",
        desc: "HTML + CSS + JS를 기반으로한 웹 페이지 구현",
        image: "img/project_3.png"
    }
];

//HTMl 내 (<div id="projectGrid">) 영역 변수에 저장
const grid = document.getElementById("projectGrid");

projects.forEach(project => { //project 배열 순회
    const card = document.createElement("a"); //<a> 생성
    card.href = `project_detail.html?id=${project.id}`; //링크 설정
    card.className = "card"; //card 클래스 적용 (card.css)

    //<a> 내 아래 코드 삽입
    card.innerHTML = `
        <img src="${project.image}">
        <div class="card-text">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
        </div>
    `;

    grid.appendChild(card); //화면 출력
});