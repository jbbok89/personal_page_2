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

        content:
            "Spring Pet Clinic 오픈소스를 대상으로 Jenkins와 AWS CodePipeline 등을 활용한 CI/CD 파이프라인 구축",

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

        content:
            "HTML + CSS + JS 기반 홈페이지 제작 및 보안 지식 학습",

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
                text: "Website",
                url: "https://web-programming-seven-chi.vercel.app/"
            }
        ]
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const project = projects[id];

if (!project) {
    document.body.innerHTML = "<h1>존재하지 않는 프로젝트입니다.</h1>";
    throw new Error("Invalid Project ID");
}

document.getElementById("project-title").textContent =
    project.title;

document.getElementById("project-image").src =
    project.image;

document.getElementById("project-image").alt =
    project.title;

document.getElementById("project-period").textContent =
    project.period;

document.getElementById("project-content").textContent =
    project.content;

const goalList =
    document.getElementById("project-goals");

project.goals.forEach(goal => {
    const li = document.createElement("li");
    li.textContent = goal;
    goalList.appendChild(li);
});

const roleList =
    document.getElementById("project-roles");

project.roles.forEach(role => {
    const li = document.createElement("li");
    li.textContent = role;
    roleList.appendChild(li);
});

const linkList =
    document.getElementById("project-links");

project.links.forEach(item => {

    const li = document.createElement("li");

    const a = document.createElement("a");

    a.href = item.url;
    a.textContent = item.text;

    li.appendChild(a);

    linkList.appendChild(li);
});

// 추가 섹션 (팀원)
const extraSections =
    document.getElementById("extra-sections");

if (project.team) {

    const section =
        document.createElement("section");

    section.className =
        "detail_section";

    let html = `
        <h2 class="section_title">팀원 소개</h2>
        <ul class="detail_list">
    `;

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

    html += "</ul>";

    section.innerHTML = html;

    extraSections.appendChild(section);
}