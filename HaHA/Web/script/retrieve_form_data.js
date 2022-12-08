//tlačítko odeslat && array na data
const btn = document.getElementById("formButton");
let jmeno;
let email;
let prijmeni;
let telefon;
let tema;
let pribeh;
let prostor;
let obtiznost;
let atmosfera;
let postavy;
let pripominka;
let stolenDataArray = [jmeno, email, prijmeni, telefon, tema, pribeh, prostor, obtiznost, atmosfera, postavy, pripominka];
let csvContent = ''

//funkce na sbírání dat a feedbacku
function datata()
{
    //pickup
    jmeno = document.getElementById("jmeno").value;
    email = document.getElementById("email");
    prijmeni = document.getElementById("prijmeni");
    telefon = document.getElementById("cislo");
    tema = document.getElementById("tema");
    pribeh = document.getElementById("pribeh");
    prostor = document.getElementById("prostor");
    obtiznost = document.getElementById("obtiznost");
    atmosfera = document.getElementById("atmosfera");
    postavy = document.getElementById("postavy");
    pripominka = document.getElementById("pripominka");
    stolenDataArray = [jmeno, email, prijmeni, telefon, tema, pribeh, prostor, obtiznost, atmosfera, postavy, pripominka];

    const titleKeys = Object.keys(stolenDataArray[0])

    const refinedData = []
    refinedData.push(titleKeys)

    stolenDataArray.forEach(item => {
        refinedData.push(Object.values(item))  
    })

    refinedData.forEach(row => {
        csvContent += row.join(',') + '\n'
    })
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
    const objUrl = URL.createObjectURL(blob)
}
function hackanddownloaddata()
{
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
    const objUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', objUrl)
    link.setAttribute('download', 'File.csv')
    link.textContent = 'Click to Download'

    document.querySelector('body').append(link)
}