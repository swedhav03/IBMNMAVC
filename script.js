async function fetchData() {
  const res = await fetch("/api/data");
  const data = await res.json();
  return data;
}

async function renderCharts() {
  const data = await fetchData();

  // --- Users Line Chart ---
  const ctx1 = document.getElementById("userChart").getContext("2d");
  new Chart(ctx1, {
    type: "line",
    data: {
      labels: data.months,
      datasets: [{
        label: "Users",
        data: data.users,
        borderColor: "blue",
        borderWidth: 2,
        fill: false
      }]
    },
    options: { responsive: true }
  });

  // --- Sales Bar Chart ---
  const ctx2 = document.getElementById("salesChart").getContext("2d");
  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: data.months,
      datasets: [{
        label: "Sales",
        data: data.sales,
        backgroundColor: "rgba(75,192,192,0.6)"
      }]
    },
    options: { responsive: true }
  });
}

// Auto-update charts every 5 seconds
renderCharts();
setInterval(renderCharts, 5000);