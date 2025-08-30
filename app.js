// ================== LOVE COUNTER ==================
const loveCounter = document.querySelector(".stats-section .stat-item .stat-text"); 
const heartIcons = document.querySelectorAll(".fa-heart");
let loveCount = 0;

heartIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    loveCount++;
    loveCounter.textContent = loveCount; 
    icon.classList.toggle("text-red-500"); 
  });
});

// ================== COPY COUNTER ==================
const copyCounter = document.querySelector(".count-copy");
const copyButtons = document.querySelectorAll(".bg-white button:nth-child(1)");
let copyCount = 0;

copyButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    const phoneNumber = this.closest(".bg-white").querySelector(".text-gray-500").innerText;

    navigator.clipboard.writeText(phoneNumber).then(() => {
      copyCount++;
      copyCounter.textContent = copyCount;
      alert(`Number copied ” ✅: ${phoneNumber}`);
    });
  });
});
