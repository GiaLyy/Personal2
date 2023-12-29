document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Handle form submission (you can customize this part)
    alert("Form submitted! Placeholder action.");
});


function resetToDefault() {
    document.getElementById('theme').value = 'light';
    document.getElementById('fontSize').value = '16';
}
  