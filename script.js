const input = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    toggle.classList.toggle("pi pi-eye", isPassword);
    toggle.classList.toggle("pi pi-eye-slash", !isPassword);
});

// Ensure background video plays
const video = document.getElementById('bg-video');
video.play().catch(e => console.log('Video play failed:', e));
