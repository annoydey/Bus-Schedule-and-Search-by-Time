function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    document.getElementById('submit').onclick = function () {
        var radios = document.getElementsByName("flexRadioDefault");
        var selected = Array.from(radios).find(radio => radio.checked);
        var x = selected.value;

        for (i = 0; i < tr.length; i++) {
            // console.log(x);
            td = tr[i].getElementsByTagName("td")[x];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}
function fieldReset() {
    var ele = document.getElementsByName("flexRadioDefault");
    for (var i = 0; i < ele.length; i++)
        ele[i].checked = false;
    document.location.reload();
}

const loaddata = () => {
    fetch('https://sheetdb.io/api/v1/8o45om1exodrt')
        .then(response => response.json())
        .then(data => displaydata(data))
}

const displaydata = datas => {
    const alldataHTML = datas.map(data => getdataHTML(data))
    const container = document.getElementById('data')
    container.innerHTML = alldataHTML.join('');
}

const getdataHTML = ({ Creekside_Village, Moody_Terrace, South_Lake_Village, Alumni_Stadium, Center_For_The_Arts, Lockwood, O_Brian, Cooke_Hochstetter, NSC, Flickinger_Court, Hadley_Village, Computing_Center, Lower_Capen, SU, Lockwood2, Alumni_Stadium2, South_Lake_Village2, Greiner }) => {
    return `
        <tbody>
            <tr>
                <td>${Creekside_Village}</td>
                <td>${Moody_Terrace}</td>
                <td>${South_Lake_Village}</td>
                <td>${Alumni_Stadium}</td>
                <td>${Center_For_The_Arts}</td>
                <td>${Lockwood}</td>
                <td>${O_Brian}</td>
                <td>${Cooke_Hochstetter}</td>
                <td>${NSC}</td>
                <td>${Flickinger_Court}</td>
                <td>${Hadley_Village}</td>
                <td>${Computing_Center}</td>
                <td>${Lower_Capen}</td>
                <td>${SU}</td>
                <td>${Lockwood2}</td>
                <td>${Alumni_Stadium2}</td>
                <td>${South_Lake_Village2}</td>
                <td>${Greiner}</td>
            </tr>
        </tbody>
    `
}

loaddata();




