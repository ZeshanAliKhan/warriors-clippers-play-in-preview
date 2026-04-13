(function () {
  const yearNode = document.querySelector("[data-year]");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const eventNode = document.querySelector("[data-event-countdown]");
  if (!eventNode) {
    return;
  }

  const eventTime = new Date("2026-04-15T22:00:00-04:00");
  const diff = eventTime.getTime() - Date.now();

  if (diff <= 0) {
    eventNode.textContent = "Scheduled tipoff time has passed. Check the official listing for updates.";
    return;
  }

  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(hours / 24);
  eventNode.textContent = `${days}d ${hours % 24}h until scheduled tipoff`;
})();
