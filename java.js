onValue(answersRef, snapshot => {
  const answers = snapshot.val();
  const container = document.getElementById("answersContainer");
  container.innerHTML = "";
  if (!answers) return;

  let arr = Object.entries(answers).map(([key, value]) => ({
    key,
    text: value
  }));

  arr.reverse();

  arr.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "answer-card";
    el.style.animationDelay = `${i * 0.08}s`;
    el.textContent = item.text;
    container.appendChild(el);
  });
});
