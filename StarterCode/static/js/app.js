// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use d3 to select the table
var table = d3.select("table");
// ufo-table instead? nah

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use d3 to select the table body
var tbody = d3.select("tbody");

// Append one table row 'tr' to the table body
var row = tbody.append("tr");

// Append everything!!!
tableData.forEach(({datetime, city, state, country, shape, durationMinutes, comments}) => {

    // Append one table row per key
    var row = tbody.append("tr");
   
    // append one cell for each value to each key
    row.append("td").text(datetime);
    row.append("td").text(city);
    row.append("td").text(state);
    row.append("td").text(country);
    row.append("td").text(shape);
    row.append("td").text(durationMinutes);
    row.append("td").text(comments);
   });

// Filter form

// Filter data

var fdata = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    var filteredData = fdata.filter(dt => dt.datetime === inputValue);

    console.log(filteredData);

    var dateinfo = filteredData.map(d => d.datetime)

    d3.select(".summary")
    .append("li").text(`Filtered Data: ${dateinfo}`);

});