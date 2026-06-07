const projects = {
    1: {
        title: "PHP 웹사이트 구현 및 모의 해킹",
        image: "img/project_1.png",
        period: "2025.07.07 ~ 2025.08.25",
        content: "PHP + MySQL 기반 웹 사이트 구현 및 모의 해킹 진행",
        goals: [
            "웹 페이지 구현 경험을 통해 웹 페이지의 구성 방식 이해",
            "모의 해킹을 통한 웹 취약점 학습"
        ],
        roles: [
            "웹 사이트 구현",
            "모의해킹 보고서 작성"
        ],
        links: [
            {
                text: "모의해킹 상세 보고서.docx",
                url: "files/웹_모의해킹_보고서.docx"
            }
        ]
    },
    2: {
        title: "DevOps CI/CD 파이프라인 구현",
        image: "img/project_2.png",
        period: "2025.10.01 ~ 2025.12.09 (약 2달)",
        content:"Spring Pet Clinic 오픈소스를 대상으로 Jenkins와 AWS CodePipeline 등을 활용한 CI/CD 파이프라인 구축",
        goals: [
            "CI/CD 파이프라인의 핵심 기능 이해, 이를 기반으로한 파이프라인 구축 및 자동화",
            "DevOps 문화와 이를 실현하기 위한 기술 학습, 협업 중심의 개발 환경 경험"
        ],
        roles: [
            "전반적인 IaC 작성 및 인프라 관리",
            "CloudWatch 설정 진행"
        ],
        links: [
            {
                text: "블로그",
                url: "https://luckyd8.tistory.com/33"
            },
            {
                text: "GitHub",
                url: "https://github.com/jbbok89"
            }
        ]
    },
    3: {
        title: "HTML + CSS + JS 홈페이지 제작",
        image: "img/project_3.png",
        period: "2025.04.05 ~ 2025.06.23 (약 2달)",
        content:"HTML + CSS + JS 기반 홈페이지 제작 및 보안 지식 학습",
        goals: [
            "HTML, CSS, JavaScript에 대한 기초 이해를 바탕으로 웹 개발에 입문",
            "웹 구조 및 동작 원리 이해"
        ],
        team: [
            {
                name: "이제희",
                github: "https://github.com/jbbok89",
                blog: "https://luckyd8.tistory.com/"
            },
            {
                name: "이효정",
                github: "https://github.com/cucu-ground",
                blog: "https://cucu0417.tistory.com/"
            },
            {
                name: "김민재",
                github: "https://github.com/minjae0202",
                blog: "https://blog.naver.com/minjaemando"
            }
        ],
        roles: [
            "웹 사이트 구현",
            "보안 지식 (클라우드) 글 작성"
        ],
        links: [
            {
                text: "GitHub - web-programming",
                url: "https://github.com/jbbok89/web-programming/tree/main"
            },
            {
                text: "Midterm Website",
                url: "https://web-programming-seven-chi.vercel.app/"
            },
            {
                text: "GitHub - SecureHub",
                url: "https://github.com/jbbok89/SecureHub/"
            },
            {
                text: "Final Website",
                url: "https://personal-page-2.vercel.app/"
            }
        ]
    }
};

//URL에서 (예: project_detail.html?id=1) 파라미터 추출
const params = new URLSearchParams(window.location.search);
const id = params.get("id"); //파라미터(id) 값(1) 변수에 저장

//파라미터값(1)에 해당하는 porject 배열 내 객체를 변수에 저장
const project = projects[id];

//HTML 내 속성값 입력
document.getElementById("project-title").textContent = project.title;
document.getElementById("project-image").src = project.image;
document.getElementById("project-image").alt = project.title;
document.getElementById("project-period").textContent = project.period;
document.getElementById("project-content").textContent = project.content;

//목표 섹션
//HTML 내 (<ul id="project-goals">) 변수에 저장
const goalList = document.getElementById("project-goals"); 

//project 배열 goals 속성 순회
project.goals.forEach(goal => { 
    const li = document.createElement("li"); //<li> 생성
    li.textContent = goal; //goals 속성값을 <li> 내 삽입
    goalList.appendChild(li); //<ul> 내 <li> 삽입
});

//주 역할 섹션
//HTMl 내 (<ul id="project-roles">) 변수에 저장
const roleList = document.getElementById("project-roles");

//project 배열 roles 속성 순회
project.roles.forEach(role => {
    const li = document.createElement("li"); //<li> 생성
    li.textContent = role; //roles 속성값을 <li> 내 삽입
    roleList.appendChild(li); //<ul> 내 <li> 삽입
});

//링크 섹션
const linkList = document.getElementById("project-links");

project.links.forEach(item => {
    const li = document.createElement("li"); //<li> 생성
    const a = document.createElement("a"); //<a> 생성

    a.href = item.url; //주소
    a.textContent = item.text; //링크에 노출될 문자열

    li.appendChild(a); //<li> 내 <a> 삽입
    linkList.appendChild(li); //<ul> 내 <li> 삽입
});

// 팀원 소개 섹션
//HTML 내 (<div id="extra-sections">) 변수에 저장
const extraSections = document.getElementById("extra-sections");

if (project.team) { //현재 project 배열 내 team 속성이 존재한다면
    const section = document.createElement("section"); //<secrion> 생성
    section.className = "detail_section"; //class="detail_section" 부여
    
    // 입력할 HTML 틀을 변수에 저장
    let html = `
        <h2 class="section_title">팀원 소개</h2>
        <ul class="detail_list">
    `; 
	
	//team 배열 순회
    project.team.forEach(member => {

        html += `
            <li>
                ${member.name} :
                <a href="${member.github}" target="_blank">
                    GitHub
                </a>
                |
                <a href="${member.blog}" target="_blank">
                    Blog
                </a>
            </li>
        `;
    });

    html += "</ul>"; //반복이 끝나면 <ul> 태그 닫음

    section.innerHTML = html; //완성된 HTML 문자열 <section> 내 삽입
    extraSections.appendChild(section); //화면 출력
}