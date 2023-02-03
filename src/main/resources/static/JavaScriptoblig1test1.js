
<!--Lager et array kalt orderHistory-->
let orderHistory = [];

function kjopbillett() {

    <!--event.preventDefault();-->

    <!--Henter verdiene av variablene fra htmlfilen-->

    const film = document.getElementById("film").value;
    const ticketCount = document.getElementById("ticketCount").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const terms = document.getElementById("terms").checked;

    <!--Skriver ut en alertmelding om et av feltene står tomme-->

    if (!film) {
        //setter farge på teksten ved bruk av style.color
        //document.getElementById("feilmeldingfilm").style.color = "red";
        //skriver ut tekst ved bruk av innerHTML
        document.getElementById("feilmeldingfilm").innerHTML = "Du maa velge en film";
    }
    else if (film) {
        document.getElementById("feilmeldingfilm").innerHTML = ""
    }
    if (!firstName) {
        //document.getElementById("feilmeldingfirstName").style.color = "red";
        document.getElementById("feilmeldingfirstName").innerHTML = "Fyll inn fornavnet ditt";
    }
    else if (firstName) {
        document.getElementById("feilmeldingfirstName").innerHTML = ""
    }
    if (!lastName) {
        //document.getElementById("feilmeldinglastName").style.color = "red";
        document.getElementById("feilmeldinglastName").innerHTML = "Fyll inn etternavnet ditt";
    }
    else if (lastName) {
        document.getElementById("feilmeldinglastName").innerHTML = "";
    }
    if (!phoneNumber) {
        //document.getElementById("feilmeldingphoneNumber").style.color = "red";
        document.getElementById("feilmeldingphoneNumber").innerHTML = "Fyll inn telefonnummeret ditt";
    }
    else if (phoneNumber) {
        document.getElementById("feilmeldingphoneNumber").innerHTML = "";
    }
    if (!email) {
        //document.getElementById("feilmeldingemail").style.color = "red";
        document.getElementById("feilmeldingemail").innerHTML = "Fyll inn emailen din";
    }
    else if (email) {
        document.getElementById("feilmeldingemail").innerHTML = "";
    }
    if (!ticketCount) {
        //document.getElementById("feilmeldingticketCount").style.color = "red";
        document.getElementById("feilmeldingticketCount").innerHTML = "Fyll inn antall billetter";
    }
    else if (ticketCount) {
        document.getElementById("feilmeldingticketCount").innerHTML = "";
    }
    if (!terms) {
        //document.getElementById("feilmeldingterms").style.color = "red";
        document.getElementById("feilmeldingterms").innerHTML = "Kryss av for aa aksemptere vilkaarene og beingelsene vaare";
    }
    else if (terms) {
        document.getElementById("feilmeldingterms").innerHTML = "";
    }

    if (film, firstName, lastName,phoneNumber, email, ticketCount, terms){
        const order = {
            film,
            ticketCount,
            firstName,
            lastName,
            phoneNumber,
            email
        };

        <!--Legger til elementet til slutten av arrayet kalt orderHistory-->
        if (film && firstName && lastName && phoneNumber && email && ticketCount && terms) {
            orderHistory.push(order);
        }


        let ut = "<table><tr><th> Film </th><th> Antall </th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th></tr>"
        for (let order of orderHistory) {
            ut += "<tr><td>" + order.film + "</td><td>" + order.ticketCount + "</td><td>" + order.firstName + "</td><td>" + order.lastName + "</td><td>" + order.phoneNumber + "</td><td>" + order.email + "</td></tr>"
        }
        ut += "</table>";
        document.getElementById("orderList").innerHTML = ut;
        console.log(ut);

    }
}

function slettalle(){
    const order = {
        film,
        ticketCount,
        firstName,
        lastName,
        phoneNumber,
        email
    };

    i = 0;
    while (i < orderHistory.length){
        orderHistory.pop(order); //husk at pop brukes for å fjerne elementer fra arrays, mens
        //push brukes for å legge til elementer i arrays.
    }
    i++;

    document.getElementById("orderList").innerHTML = orderHistory;
    console.log(orderHistory);

}
