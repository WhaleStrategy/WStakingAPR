const amountInput = document.getElementById("amount");
const durationSelect = document.getElementById("duration");
const aprDisplay = document.getElementById("apr");
const rewardDisplay = document.getElementById("reward");
const resultBox = document.getElementById("result");

async function fetchAPR() {
  const amount = parseFloat(amountInput.value || "0");
  const duration = durationSelect.value;

  if (!amount || !duration) {
    resultBox.classList.add("hidden");
    return;
  }

  const res = await fetch("https://ab07-1-173-163-76.ngrok-free.app/api/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, duration })
  });

  const data = await res.json();
  aprDisplay.textContent = data.apr.toFixed(3);
  rewardDisplay.textContent = data.reward.toFixed(6);
  resultBox.classList.remove("hidden");
}

amountInput.addEventListener("input", fetchAPR);
durationSelect.addEventListener("change", fetchAPR);
