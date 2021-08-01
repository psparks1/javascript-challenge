// from data.js
const tableData = data;

// YOUR CODE HERE!
//selecting the area where the table goes from the provided html
var tbody=d3.select("tbody");

// creating a function to make the table
function buildTable(){

    

    data.forEach(tData=>{
        var row= tbody.append("tr");
        Object.entries(tData).forEach(([_,value])=>{
        var cell=row.append("td");
        cell.text(value);
        });
    });
    
};

buildTable();

var button = d3.select("#filter-btn")

button.on("click",function() {
    d3.event.preventDefault();
    tbody.html("");

    var Input = d3.select("#datetime").property("value");
    var filteredData=tableData;

    filteredData = filteredData.filter((row) => row.datetime === Input);
    //var filteredData=data.filter(data=>data.datetime == Input);
    

    filteredData.forEach(tData=>{
        var row= tbody.append("tr");
        Object.entries(tData).forEach(([_,value])=>{
        var cell=row.append("td");
        cell.text(value);
        });
    });



});