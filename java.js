onValue(answersRef, snapshot => {
  const answers = snapshot.val();
  const container = document.getElementById("answersContainer");
  container.innerHTML = "";
  if (!answers) return;

  // Convert to array & randomize order
  let arr = Object.values(answers)
    .sort(() => Math.random() - 0.5);

  arr.forEach((text, i) => {
    const el = document.createElement("div");
    el.className = "answer-card";
    el.style.animationDelay = `${i * 0.08}s`;
    el.textContent = text;
    container.appendChild(el);
  });
});