// Create variables for table and table body
var table = document.getElementById('ufo-table')
var tbody = d3.select("tbody")

// Select the button
var button = d3.select("#filter-btn");

// Add all data to table
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Define function of the button click (filter table by datetime)
button.on("click", function() {
    // First, clear all existing rows in the table
    for(var i = 1;i<table.rows.length;){
        table.deleteRow(i);
    }

    // Input desired datetime
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    
    // Add rows to table according to inputed datetime
    data.forEach((sighting) => {
        if (inputValue == sighting.datetime) {
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            })
        }
    })
});