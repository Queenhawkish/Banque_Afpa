class Informations {
    constructor(number_accompte, name, firstname, phone, mail) {
        this.number_accompte = number_accompte,
            this.name = name,
            this.firstname = firstname,
            this.phone = phone,
            this.mail = mail
    }
}

let client1 = new Informations("025845636914", "Does" , "John" , "03 98 56 41 69", "john.does@mail.com")

let client2 = new Informations("385541687315", "Galin" , "Michelle" , "04 53 04 86 75", "michelle.galin@mail.com")

let client3 = new Informations("985232310415", "Mortadelle" , "Marine" , "08 48 36 19 43", "marine.mortadelle@mail.com")

let client4 = new Informations("068741028820", "Parien" , "Lucie" , "03 28 46 21 69", "lucie.parien@mail.com")

let client5 = new Informations("301456924860", "Xabline" , "George" , "09 15 26 43 81", "george.xabline@mail.com")

let client6 = new Informations("120596143075", "Pouliche" , "Yvan" , "06 48 20 13 54", "yvan.pouliche@mail.com")

let client7 = new Informations("354821930254", "Ovlind" , "Dylan" , "07 25 46 73 95", "dylan.ovlind@mail.com")

let client8 = new Informations("746951031548", "Flinch" , "Maxime" , "01 50 46 30 28", "maxime.flinch@mail.com")

let client9 = new Informations("953478601648", "Swith" , "Camille" , "05 66 72 99 40", "camille.swith@mail.com")

let client10 = new Informations("164824930452", "Sanderson" , "Robin" , "08 55 12 43 55", "robin.robin@mail.com")

let infos = []

infos.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)

let test

infos.forEach(element => {
    table.innerHTML += `
    <tr>
        <td> ${element.number_accompte} </td>
        <td> ${element.name} </td>
        <td><button id="">+ infos</button></td>
    </tr>`
});

