const list = document.getElementById("course-list");
const detail = document.getElementById("course-detail");

function loadCourses() {
  list.innerHTML = "";
  courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <h2>${course.title}</h2>
      <p>${course.description}</p>
      <small>Age group: ${course.age}</small>
    `;
    card.onclick = () => openCourse(course.id);
    list.appendChild(card);
  });
}

function openCourse(id) {
  const course = courses.find(c => c.id === id);
  list.classList.add("hidden");
  detail.classList.remove("hidden");

  detail.innerHTML = `
    <h2>${course.title}</h2>
    <p>${course.description}</p>
    <h3>Lessons</h3>
    ${course.lessons.map(l =>
      `<div class="lesson ${l.completed ? "completed" : "pending"}">
        ${l.title} — ${l.duration}
      </div>`
    ).join("")}
    <br/>
    <button onclick="goBack()">⬅ Back</button>
  `;
}

function goBack() {
  detail.classList.add("hidden");
  list.classList.remove("hidden");
}

loadCourses();
