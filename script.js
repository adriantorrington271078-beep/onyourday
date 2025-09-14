function calculateTime() {
  const input = document.getElementById("eventDate").value;
  const result = document.getElementById("result");

  if (!input) {
    result.textContent = "⚠️ Please select a date first.";
    return;
  }

  const eventDate = new Date(input);
  const now = new Date();
  let diff = now - eventDate;

  let inFuture = false;
  if (diff < 0) {
    diff = Math.abs(diff);
    inFuture = true;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const remainingDays = (days % 365) % 30;

  const message = inFuture 
    ? `✨ Your special day is in ${years} years, ${months} months, and ${remainingDays} days.` 
    : `⏳ It has been ${years} years, ${months} months, and ${remainingDays} days since your special day.`;

  result.textContent = message;
}
