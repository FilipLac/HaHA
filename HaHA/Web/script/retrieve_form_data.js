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
    email = document.getElementById("email").value;
    prijmeni = document.getElementById("prijmeni").value;
    telefon = document.getElementById("cislo").value;
    tema = document.getElementById("tema").value;
    pribeh = document.getElementById("pribeh").value;
    prostor = document.getElementById("prostor").value;
    obtiznost = document.getElementById("obtiznost").value;
    atmosfera = document.getElementById("atmosfera").value;
    postavy = document.getElementById("postavy").value;
    pripominka = document.getElementById("pripominka").value;
    const stolenDataArray = [
        {
          name: jmeno ,
          surname: prijmeni,
          imail: email,
          phone: telefon,
          theme: tema,
          story: pribeh,
          place: prostor,
          difficulty: obtiznost,
          atmosphere: atmosfera,
          characters: postavy,
          remarks: pripominka
        }
      ]
    
    //vytvoření CSV souboru
    const titleKeys = Object.keys(stolenDataArray[0])

    const refinedData = []
    refinedData.push(titleKeys)

    stolenDataArray.forEach(item => {
        refinedData.push(Object.values(item))  
    })

    refinedData.forEach(row => {
        csvContent += row.join(';') + '\n'
    })
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
    const objUrl = URL.createObjectURL(blob)
}

//stažení souboru, i know je to hodně weird způsob, jak to nakódit :3
function hackanddownloaddata()
{
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
    const objUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', objUrl)
    link.setAttribute('download', 'File.csv')
    link.textContent = 'Click to Download'

    document.getElementById("test").append(link)
}