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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedback-form");
  const list = document.getElementById("feedback-list");

  function renderFeedback() {
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks") || "[]");
    list.innerHTML = feedbacks
      .map(
        (f) => `
        <div class="feedback-item">
          <strong>${f.name}</strong> <span>(${f.email})</span>
          <p>${f.message}</p>
        </div>
      `
      )
      .join("");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (name && email && message) {
      const feedbacks = JSON.parse(localStorage.getItem("feedbacks") || "[]");
      feedbacks.unshift({ name, email, message });
      localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
      form.reset();
      renderFeedback();
    }
  });

  renderFeedback();
});
