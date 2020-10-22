console.log("You are in the script.js file");

var movie = "Mr. Nobody";
var store = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

$.ajax({
    url: store,
    method: "GET"
}).then(function(response) {
    // Create a new table row element
    var tRow = $("<tr>");

    // Methods run on jQuery selectors return the selector they we run on
    // This is why we can create and save a reference to a td in the same statement we update its text
    var titleTd = $("<td>").text(response.Title);
    var yearTd = $("<td>").text(response.Year);
    var actorsTd = $("<td>").text(response.Actors);
    
    // Append the newly created table data to the table row
    tRow.append(titleTd, yearTd, actorsTd);
    // Append the table row to the table body
    $("tbody").append(tRow);
});