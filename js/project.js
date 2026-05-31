// 프로젝트 데이터
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

// 카드가 들어갈 영역 찾기
const grid = document.getElementById("projectGrid");

// 프로젝트 개수만큼 반복
projects.forEach(project => {

    // <a> 태그 생성
    const card = document.createElement("a");

    // 링크 설정
    card.href = `project_detail.html?id=${project.id}`;

    // card 클래스 적용
    card.className = "card";

    // 카드 내부 내용 생성
    card.innerHTML = `
        <img src="${project.image}">
        <div class="card-text">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
        </div>
    `;

    // 화면에 추가
    grid.appendChild(card);
});