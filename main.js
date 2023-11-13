//creo l'array con le info
const membri = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        img:"angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        img: "scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    },

];

let container = document.getElementById("container");

//stampare i membri su console
for (let i = 0; i < membri.length; i++) {
    const persona = membri[i];

    // console.log(`Nome: ${persona.nome}, Ruolo: ${persona.ruolo}, Immagine: ${persona.img}`);

    // for(let key in persona) {
    //     console.log(persona[key]);
    // }


    //inserire i membri nel DOM

    let cardMember = `
    <div class="cardMember">
        <p class="nome">${persona.nome}</p>
        <p class="ruolo">${persona.ruolo}</p>
        <img src="./img/${persona.img}">
    </div>`;
    container.innerHTML += cardMember;

}