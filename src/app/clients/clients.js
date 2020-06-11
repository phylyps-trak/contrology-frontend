//UTILITY STUFF
function start() {
    MaakTabelVanJSON();
}

window.onload = start;

//tabel maak methode
function MaakTabelVanJSON() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        var parsedClients = JSON.parse(this.responseText);
        console.table(parsedClients);
     
        // pluk de waarden er uit die in de table header moeten
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < parsedClients.length; i++) {
            for (var key in parsedClients[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var mijntabel = document.createElement("table");
        mijntabel.setAttribute("id", "mijntabel666");

        //deleteknop
        var delKnop = "<td><button class='btn btn-danger btn-sm' onclick='dikkeDeleteAlles(this)'>Delete</button>" +
        "DEZE" +
      "</td>";
        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = mijntabel.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // GELOOPTE TABLE HEADER uit JSON
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
        var th2 = document.createElement("th");      // extra TABLE HEADER voor knoppen
            th2.innerHTML = "actie:";
            tr.appendChild(th2);

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < parsedClients.length; i++) {

            tr = mijntabel.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);

                // ingevoegd: id die je er uit kan plukken om database entry te verwijderen
                tabCell.innerHTML =  parsedClients[i][col[j]]
                        }

            var tabCell2 = tr.insertCell(-1);
            tabCell2.setAttribute('data-id', parsedClients[i].id)
            console.log(parsedClients[i].id)
            tabCell2.innerHTML = delKnop;
           
        }
        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(mijntabel);
    }
    xhr.open("GET", "http://localhost:8082/api/clients", true);
    xhr.send();
}

//andere methoden
function deleteRow(i) {
    document.getElementById("mijntabel666").deleteRow(i);
  }

function verwijderClient(i) {    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log(this.responseText),
            document.getElementById("antwoord").innerHTML = this.responseText
    }
    xhr.open("DELETE", "http://api:8082/zakkies/" + i); //TODO: maak goede deleteendpoint in backend
    xhr.send();
}

function dikkeDeleteAlles(btn){
    var row_index = btn.parentNode.parentNode.rowIndex;
    var zakkie_id = btn.parentNode.getAttribute('data-id');
    verwijderClient(zakkie_id);
    deleteRow(row_index);
}


