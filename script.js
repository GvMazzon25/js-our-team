/**Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.
*/

let nameFirst = '';
let roleFirst = '';
let imgFirst = '';

const cards = [
    card1 = {
        nameUtente : `Angela Carol`,
        roleUtente : `Chief Editor`,
        imageUtente : ``
    },
    card2 = {
        nameUtente : `Walter Gordon`,
        roleUtente : `Office Manager`,
        imageUtente : ``
    },
    card3 = {
        nameUtente : `Angela Lopez`,
        roleUtente : `Social Media Manager`,
        imageUtente : ``
    },
    card4 = {
        nameUtente : `Scot Estrada`,
        roleUtente : `Developer`,
        imageUtente : ``
    },
    card5 = {
        nameUtente : `Barbara Ramos`,
        roleUtente : `Graphic Designer`,
        imageUtente : ``
    },
    cardGeneral = {
        nameUtente : `nameFirst`,
        roleUtente : `roleFist`,
        imageUtente : `imgFirst`
    }
]

console.log(cards)
console.table(cards)