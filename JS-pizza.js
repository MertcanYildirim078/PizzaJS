
var Margarita = 7;
var Tonno = 8;
var HotChicken = 10;
var Doner = 10;
var Kofte = 9;

var AllePizzas = ['Margarita', 'Tonno', 'HotChicken', 'Doner', 'Kofte'];

function Askbutton(event) {
    var Pizza = prompt('Wat wilt u bestellen? (Naam van de pizza, bijvoorbeeld "Tonno")')
    return Pizza
}

function Verdergaan(event) {
    var Doorgaan = prompt('Wilt u verder gaan?')
    return Doorgaan
}

var btn = document.getElementById('btn')



function Main(event) {
    var Process = true;
    while (Process == true) {
        Pizza = Askbutton()
        if (Pizza == 'Margarita') {
            alert('Margarita geselecteerd!')
            Doorgaan = Verdergaan()
        }
        else if (Pizza == 'Tonno') {
            alert('Tonno geselecteerd!')
            Doorgaan = Verdergaan()
        }
        else if (Pizza == 'HotChicken') {
            alert('HotChicken geselecteerd!')
            Doorgaan = Verdergaan()
        }

        else if (Pizza == 'Doner') {
            alert('Doner geselecteerd!')
            Doorgaan = Verdergaan()
        }
        else if (Pizza == 'Kofte') {
            alert('Kofte geselecteerd!')
            Doorgaan = Verdergaan()
        }
        else {
            alert('Sorry hebben we niet')
            Askbutton()
        }


        if (Doorgaan == 'N' || 'n' ) {
            alert('Bedankt en Tot ziens!')
            Process = false;
        }
        else if (Doorgaan == 'Y' || 'y') {
            Askbutton()
        }
        else {
            alert('Sorry hebben we niet')
            Askbutton()
        }
    }
    

}

btn.onclick = Main