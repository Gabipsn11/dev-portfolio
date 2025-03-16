const technologies = [
    'NodeJS', 'JavaScript', 'TypeScript', 'Python','Fullstack', 'ReactJS', 'React Native', 'MongoDB', 'SQL', 'PostgreSQL', 'Linux', 'Windows', 'Git&Github'
];
let index = 0;
const dynamicText = document.querySelector('.dynamic-text');

function updateText() {
    const currentText = dynamicText.textContent;
    index = (index + 1) % technologies.length;
    dynamicText.style.opacity = 0;
    setTimeout(() => {
        dynamicText.textContent = technologies[index];
        dynamicText.style.opacity = 1;
    }, 500);
}

setInterval(updateText, 2000);
updateText();

// Definindo os conteúdos das abas
const tabs = ["About Me", "Certificates", "Experience Timeline"];
let currentTab = 0; // Inicia na aba "About Me"

// Conteúdo da Work Timeline
const workTimelineContent = `
    <div class="timeline">
        <div class="work-item">
            <div class="date">Jul 2024 - Nov 2024</div>
            <div class="content">
                <h3><span class="dot">●</span> KSA - Klick System Academic</h3>
                <p>The system developed for Senac Mediotec is an academic website designed to simplify interaction between students and teachers. The platform has a simple and intuitive interface, offering a smooth and effective navigation experience for all users. This portal facilitates the exchange of information and the monitoring of academic activities, encouraging more interactive and collaborative interaction in the educational context.</p>
                <div class="role">
                    <span class="role-label">Roles</span>
                    <div class="role-item">
                        <span class="role-dot">●</span>
                        <span>Frontend Developer</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="work-item">
            <div class="date">May 2024 - Jun 2024</div>
            <div class="content">
                <h3><span class="dot">●</span> Anotaísso</h3>
                <p>During the 2nd period of my Systems Analysis and Development (ADS) course — morning shift — I participated in the <span class="highlight">ProjetAí project</span>, developed by the Anotaisso team. This was my first major academic achievement and a valuable learning experience. The project involved creating an order management system for Mascate, a restaurant at Senac Recife. The system organized and tracked orders in real time, offered insights into popular items and inventory, and integrated a Kanban board to enhance task management, replacing manual processes with a more efficient and professional solution. Our work was recognized with <span class="highlight">1st place at the Demoday</span> for the 2nd-period class, hosted by Senac Recife, standing out as an innovative and effective solution.</p>
                <div class="role">
                    <span class="role-label">Roles</span>
                    <div class="role-item">
                        <span class="role-dot">●</span>
                        <span>Web and Mobile Development</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom-arrows-placeholder"></div>
`;

// Conteúdos das abas
const tabContents = {
    "About Me": `
        <div class="cyber-profile">
            <h2 class="profile-title">Hello World! </h2>
            <div class="profile-content">
                <p class="profile-text">I'm Gabriela, a student at Senac Recife, studying Systems Analysis and Development. I'm from Recife. I've always liked technology and today I seek to improve my skills every day. I'm also studying to become a security professional through Senac Recife and online courses. When I'm not coding or studying, I'm playing chess or listening to music. I like reading and exploring an introspective world.</p>
                <p class="profile-text"> I'm more involved with Fullstack Development, using JavaScript, Linux, Conventional and Non-Conventional Databases, CSS and HTML.</p>
                <div class="profile-connect">
                    <p class="profile-text">Connect with my vibe! Listen to my <a href="https://open.spotify.com/user/31o4dqeazibwhhl2arsyocamg4vi#login" target="_blank" class="spotify-link">Spotify</a></p>
                </div>
            </div>
        </div>
        <div class="bottom-arrows-placeholder"></div>
    `,
    "Certificates": `
        <div class="certificates">
            <ul>
                <li>Javascript and Typescript course from basic to advanced JS/TS - Udemy (2024)</li>
                <li>Git and GitHub from basic to advanced (with gist and GitHub Pages) - Udemy (2024)</li>
                <li>Outstanding Project Certificate - ProjetAí (2024)</li>
                <li>Computer Technician, Networks and Programming, High School + Technical Education in Computer Science, Networks and Programming (2021 - 2023)</li>
                <li>Professional Qualification as a Mid-Level Technical Assistant in Computer Network Operations(2021 - 2023)</li>
                <li>Computer Network Operations Assistant Technician (2021 - 2023)</li>
                <li>Computer Support and Maintenance Assistant Technician (2021 - 2023)</li>
            </ul>
        </div>
        <div class="bottom-arrows-placeholder"></div>
    `,
    "Experience Timeline": workTimelineContent
};

// Função para adicionar as setas inferiores dinamicamente
function addBottomArrows(contentElement) {
    const bottomArrowsPlaceholder = contentElement.querySelector('.bottom-arrows-placeholder');
    if (bottomArrowsPlaceholder) {
        const bottomArrows = document.createElement("div");
        bottomArrows.className = "bottom-arrows";
        
        const leftArrow = document.createElement("span");
        leftArrow.textContent = "<";
        leftArrow.className = "arrow";
        leftArrow.onclick = () => changeTab(-1);

        const rightArrow = document.createElement("span");
        rightArrow.textContent = ">";
        rightArrow.className = "arrow";
        rightArrow.onclick = () => changeTab(1);

        bottomArrows.appendChild(leftArrow);
        bottomArrows.appendChild(rightArrow);
        
        bottomArrowsPlaceholder.replaceWith(bottomArrows);
    }
}

function changeTab(direction) {
    const content = document.getElementById("tab-content");
    if (!content) {
        console.error("Elemento #tab-content não encontrado!");
        return;
    }

    content.classList.add("fade-out");

    setTimeout(() => {
        currentTab += direction;
        if (currentTab < 0) {
            currentTab = tabs.length - 1;
        } else if (currentTab >= tabs.length) {
            currentTab = 0;
        }

        const tabTitle = document.getElementById("tab-title");
        if (tabTitle) {
            tabTitle.textContent = tabs[currentTab];
        } else {
            console.error("Elemento #tab-title não encontrado!");
        }

        if (tabContents[tabs[currentTab]]) {
            content.innerHTML = tabContents[tabs[currentTab]];
        } else {
            console.error("Conteúdo não encontrado para a aba:", tabs[currentTab]);
            content.innerHTML = "<p>Erro ao carregar o conteúdo desta aba.</p>";
        }

        content.classList.remove("fade-out");
        content.classList.add("fade-in");

        addBottomArrows(content);

        setTimeout(() => content.classList.remove("fade-in"), 500);
    }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
    // Cria um contêiner para as setas superiores e o título
    const tabHeader = document.createElement("div");
    tabHeader.className = "tab-header";

    const leftArrow = document.createElement("span");
    leftArrow.textContent = "<";
    leftArrow.className = "arrow";
    leftArrow.onclick = () => changeTab(-1);

    const tabTitle = document.createElement("h2");
    tabTitle.id = "tab-title";
    tabTitle.textContent = tabs[currentTab];

    const rightArrow = document.createElement("span");
    rightArrow.textContent = ">";
    rightArrow.className = "arrow";
    rightArrow.onclick = () => changeTab(1);

    tabHeader.appendChild(leftArrow);
    tabHeader.appendChild(tabTitle);
    tabHeader.appendChild(rightArrow);

    const timelineContainer = document.querySelector(".timeline-container");
    const existingTabTitle = document.getElementById("tab-title");
    timelineContainer.replaceChild(tabHeader, existingTabTitle);

    // Carrega o conteúdo inicial da aba "About Me"
    const content = document.getElementById("tab-content");
    if (content) {
        content.innerHTML = tabContents[tabs[currentTab]];
        addBottomArrows(content);
    } else {
        console.error("Elemento #tab-content não encontrado ao carregar a página!");
    }

    // Adicionando a animação moderna de entrada
    const mainContainer = document.querySelector('.main-container');
    const welcome = document.querySelector('.welcome');
    const leftSectionH1s = document.querySelectorAll('.left-section h1');
    const socialIcons = document.querySelector('.social-icons');
    const rightSection = document.querySelector('.right-section');

    setTimeout(() => {
        mainContainer.classList.add('loaded');
        welcome.classList.add('loaded');
        leftSectionH1s.forEach(h1 => h1.classList.add('loaded'));
        socialIcons.classList.add('loaded');
        rightSection.classList.add('loaded');
    }, 50); // Delay reduzido para uma entrada mais rápida e moderna
});