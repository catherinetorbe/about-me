// Add this in a <script> tag or JS file
const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with HTML, CSS, and JavaScript.",
    img: "work/1.png",
  },
  {
    title: "MathWizQuiz App",
    description: "A fun and interactive math quiz app for kids.",
    img: "work/2.png",
  },
  {
    title: "Digital Designs",
    description: "A collection of digital artwork and designs.",
    img: "work/3.png",
  },
];

const gallery = document.getElementById("project-gallery");
gallery.innerHTML = projects
  .map(
    (project) => `
  <div class="project-card">
    <img src="${project.img}" alt="${project.title}" />
    <div class="project-info">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>
  </div>
`
  )
  .join("");
