onValue(answersRef, snapshot => {
  const answers = snapshot.val();
  const container = document.getElementById("answersContainer");
  container.innerHTML = "";
  if (!answers) return;

  // Convert to array of objects: { key, value }
  let arr = Object.entries(answers).map(([key, value]) => ({
    key,
    text: value
  }));

  // Firebase stores entries by push() in chronological order.
  // Therefore: reverse() = newest → oldest
  arr.reverse();

  // Display them in order (newest first)
  arr.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "answer-card";
    el.style.animationDelay = `${i * 0.08}s`;
    el.textContent = item.text;
    container.appendChild(el);
  });
});
