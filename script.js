/**Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.
*/

let nameFirst = '';
let roleFirst = '';
let imgFirst = '';

//immagini

//Carte
const cards = [
    {
        nameUtente : `Angela Carol`,
        roleUtente : `Chief Editor`,
        imageUtente : ``
    },
    {
        nameUtente : `Walter Gordon`,
        roleUtente : `Office Manager`,
        imageUtente : ``
    },
    {
        nameUtente : `Angela Lopez`,
        roleUtente : `Social Media Manager`,
        imageUtente : ``
    },
    {
        nameUtente : `Scot Estrada`,
        roleUtente : `Developer`,
        imageUtente : ``
    },
    {
        nameUtente : `Barbara Ramos`,
        roleUtente : `Graphic Designer`,
        imageUtente : ``
    },
]

console.log(cards)
console.table(cards)

const teamContainer = document.querySelector('.team-container')

for(let i = 0; i < cards.length; i++){
    const cardItem = cards[i];
    console.log(cardItem);

    teamContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
           <img
                src="img/wayne-barnett-founder-ceo.jpg"
                alt="Wayne Barnett"
              />
            </div>
            <div class="card-text">
              <h3>${cardItem.nameUtente}</h3>
              <p>${cardItem.roleUtente}</p>
            </div>
          </div>`
}