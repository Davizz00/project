function my_function() {

    console.log("Hello Cruz en raya");
    var htmlarray_id = document.getElementById("my_table");

    var result = '';


    for (var i = 0; i < 3; i++) {

        result += '<tr>';

        for (var j = 0; j < 3; j++) {
            result += '<td>' + 'x' + "</td>";
        }
        result += "</tr>";
    }

    htmlarray_id.innerHTML = result;
    
}