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
      alert(`📋 Copied: ${phoneNumber}`);
    });
  });
});

// ================== CALL & COIN ==================
const coinEl = document.querySelector(".stats-section .stat-item:nth-child(2) .stat-text");
let coins = parseInt(coinEl.textContent);

const callButtons = document.querySelectorAll(".bg-white button:nth-child(2)");
callButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    const card = this.closest(".bg-white");
    const serviceName = card.querySelector("h3").innerText;
    const phoneNumber = card.querySelector(".text-gray-500").innerText;

    if (coins < 20) {
      alert("❌ আপনার কাছে যথেষ্ট coin নেই (কমপক্ষে 20 coin থাকতে হবে)।");
      return;
    }

    // প্রতি call এ 20 coin কেটে নেবে
    coins -= 20;
    coinEl.textContent = coins;

    // Call history তে যোগ হবে (আগের history clear করে নতুনটা দেখাবে)
    const historyList = document.querySelector(".space-y-3");
    historyList.innerHTML = ""; // clear previous history

    const li = document.createElement("li");
    li.className = "flex justify-between border-b pb-2";
    li.innerHTML = `
      <span>📞 ${serviceName} (${phoneNumber})</span>
      <span class="text-gray-500">${new Date().toLocaleTimeString()}</span>
    `;
    historyList.appendChild(li);

    alert(`📞 Calling ${serviceName} - ${phoneNumber} (20 coin কাটা হলো, সময়: ${new Date().toLocaleTimeString()})`);
  });
});
