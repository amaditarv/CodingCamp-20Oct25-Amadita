// Show popup on page load
window.onload = function() {
  document.getElementById("name-popup").style.display = "flex";
};

// Handle name submission
function submitName() {
  const name = document.getElementById("username").value.trim();
  
  if (name === "") {
    alert("Please enter your name first! 🍰");
    return;
  }

  // Update welcome text
  document.getElementById("welcome-text").innerHTML = 
    `Hi ${name}! Welcome to Kuea.<span style="text-transform: lowercase;">bali</span>  🌸`;

  // Hide popup
  document.getElementById("name-popup").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const output = document.getElementById("form-output");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // cegah reload halaman

    // Ambil data input
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    // Tampilkan output
    output.innerHTML = `
      <p>Terima kasih, <strong>${name}</strong>! 💌</p>
      <p>Kami sudah menerima pesanmu:</p>
      <blockquote class="fst-italic text-muted">"${message}"</blockquote>
      <p><small>Kami akan membalas ke email: ${email}</small></p>
    `;

    // Opsional: reset form setelah submit
    form.reset();
  });
});
