const body = document.body;
body.style.background = "#0c0c0c"

document.addEventListener('mousemove', (e) => {
  const x = Math.floor(e.clientX + window.pageXOffset);
  const y = Math.floor(e.clientY + window.pageYOffset);
  const gradient = `radial-gradient(at ${x}px ${y}px, #1b1b1b, #0c0c0c)`;
  body.style.backgroundImage = gradient;
});