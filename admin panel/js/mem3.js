const xValues3 = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues3 = [55, 49, 44, 24, 15];
const barColors3 = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart3", {
  type: "pie",
  data: {
    labels: xValues3,
    datasets: [{
      backgroundColor: barColors3,
      data: yValues3
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});