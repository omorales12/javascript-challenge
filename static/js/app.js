
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// Populate table with all records

// data.forEach((ufo_sighting) => {
//   var row = tbody.append("tr");
//   Object.entries(ufo_sighting).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// Attach function on button click
d3.select("#filter-btn").on("click", function() {
    
    // Empty table contents
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);

    // Filter data
    var filteredData = data.filter(sight_date => sight_date.datetime === inputValue);

    // Populate table with filtered data
    filteredData.forEach((ufo_sighting) => {
        var row = tbody.append("tr");
        Object.entries(ufo_sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

  });
  