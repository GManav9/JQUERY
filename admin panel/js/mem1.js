const xValues1 = [];
const yValues1 = [];
generateData("Math.sin(x)", 0, 10, 0.5);

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues1,
    datasets: [{
      fill: false,
      pointRadius: 2,
      borderColor: "red",
      data: yValues1
    }]
  },    
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "y = sin(x)",
      fontSize: 16
    }
  }
});
function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    yValues1.push(eval(value));
    xValues1.push(x);
  }
}
