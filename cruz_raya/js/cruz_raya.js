
var my_array = {};
var getCount = 0 



function print_console() {

    console.log(' ')


    for (var i = 0; i < 3; i++) {
        c = i + ':'
        for (var j = 0; j < 3; j++) {

            c += my_array[i][j] + ' ';
        }
        console.log(c);
    }
}

function init_array() {

    for (var i = 0; i < 3; i++) {
            my_array[i] = [];

            for (var j = 0; j < 3; j++) {
                my_array[i][j] =  ' ';
            }
        }
}

function updateCell(array) {
    
    var cellIndex  = array.cellIndex;
    var rowIndex = array.parentNode.rowIndex;
    if(getCount %2 === 0){
        console.log("par");
        my_array[rowIndex][cellIndex] = "x";
    }
    else{
        console.log("impar");
        my_array[rowIndex][cellIndex] = "O";
    }
    

    console.log("row:" + rowIndex);
    console.log("col:" + cellIndex);
    print_HTML();
    
}

function print_HTML() {


    var htmlarray_id = document.getElementById("mytable");

    var result = '';

    for (var i = 0; i < 3; i++) {

        result += '<tr>';

        for (var j = 0; j < 3; j++) {
            result += '<td>' + my_array[i][j] + "</td>";
        }
        result += "</tr>";
    }

    htmlarray_id.innerHTML = result;

    console.log("Hello tictactoe");

    var cells = htmlarray_id.getElementsByTagName("td");

    for(var i = 0; i < cells.length; i++){
        
        var cell = cells[i];
        cell.onclick = function(){
            updateCell(this);  
            getCount = getCount + 1 ;
            
            if(getCount > 9 ){
                console.log("Nuevo juego");
                getCount = 0 
                alert("cliqué NewGame para nuevo juego");
                
            }
            
            
            
        };
        console.log("contador:" + getCount);
        
    }

}

    
    

function NewGame() {
    init_array();
    print_console();
    print_HTML();
}
