const xValues4 = ["", "", "", "", ""];
const yValues4 = [55, 49, 44, 24, 15];
const barColors4 = ["lightblue", "yellow","blue","orange","brown"];

new Chart("myChart4", {
  type: "bar",
  data: {
    labels: xValues4,
    datasets: [{
      backgroundColor: barColors4,
      data: yValues4
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
    //   text: "World Wine Production 2018"
    }
  }
});