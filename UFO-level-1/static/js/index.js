var table = d3. select("#ufo-table")
var tbody = d3.select("tbody")

// Select the button
var button = d3.select("#filter-btn");

// data.forEach((sighting) => {
//     var row = tbody.append("tr");
//     Object.entries(sighting).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });





button.on("click", function() {
    for(var i = 1;i<table.length;){
        table.deleteRow(i);
    }

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    
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