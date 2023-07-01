document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("header").classList.add("fade-in");
  setTimeout(function() {
    document.querySelector("#hero").classList.add("fade-in");
  }, 200);
  setTimeout(function() {
    document.querySelector("#about").classList.add("fade-in");
  }, 400);
  setTimeout(function() {
    document.querySelector("footer").classList.add("fade-in");
  }, 600);

  let darkMode = false;

  const toggleTheme = () => {
    const body = document.querySelector('body');

    if (darkMode) {
      body.classList.remove('dark');
      darkMode = false;
    } else {
      body.classList.add('dark');
      darkMode = true;
    }
  }

  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});
let darkMode = false;

document.getElementById('theme-toggle').addEventListener('click', () => {
  darkMode = !darkMode;
  const toggleButton = document.getElementById('theme-toggle');
  toggleButton.classList.toggle('dark-mode');
  toggleButton.innerText = darkMode ? "Dark Mode" : "Light Mode"; // This line changes the button text depending on the mode
});


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
