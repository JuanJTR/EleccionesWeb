function Candidate() {
    let name = document.getElementById("candidate").value;
    let color = document.getElementById("candidate-c").value;
    // console.log(name+color);
    AadCandidate(name, color);
}

let CandidateList = [];

function AadCandidate(name, color) {
        // Verifica si el color seleccionado ya está en uso
    let colorUsado = CandidateList.some(candidate => candidate.color === color);
    
    // Si el color ya está en uso, muestra el mensaje de advertencia y detén la función
    let warningElement = document.getElementById("color-warning");
    if (colorUsado) {
        warningElement.textContent = "El color seleccionado ya está en uso. Por favor, elija otro color.";
        return; // Detiene la ejecución de la función
    }
    // Si el color no está en uso, borra el mensaje de advertencia
    warningElement.textContent = "";
    let voto = 0
    let candidate = {
        candidate: name,
        color: color,
        votos : voto
    };

    CandidateList.push(candidate);
    ShowListCandidates();
}


function ShowListCandidates() {
    let container = document.getElementById("containerJS");
    // Vacía la lista antes de mostrarla para evitar duplicados

    container.innerHTML = "";
    CandidateList.forEach(function(candidate) {
        let divcard = document.createElement("div");
        divcard.className = 'div-card'

        let divname = document.createElement("div")
        divname.className = 'div-name'

        let candidatename = document.createElement("span");
        candidatename.className = 'name'
        candidatename.textContent = candidate.candidate
        
        let divvotes = document.createElement('div')
        divvotes.className = 'div-votes'

        let txtvotes = document.createElement('span')
        txtvotes.className = 'txt-votes'
        txtvotes.textContent = "Votos: "

        let votes = document.createElement('span')
        votes.className = 'votes'
        votes.textContent = candidate.votos

        let containercolor = document.createElement('div')
        containercolor.className = 'div-container-color'

        let textc = document.createElement('span')
        textc.className = 'span-color'
        textc.textContent = "Color: "

        let colordiv = document.createElement('div')
        colordiv.className = 'div-color'
        colordiv.style.background = candidate.color

        let divbtnv = document.createElement('div')
        divbtnv.className = 'div-btn-vote'
        
        let btnv = document.createElement('button');
        btnv.className = 'btn-vote';
        btnv.textContent = "Votar";

        let linehr = document.createElement('hr')
        linehr.className = 'hr'
        linehr.style.color = candidate.color
        
        let divbtndlt = document.createElement('div')
        divbtndlt.className = 'div-btn-dlt'

        let btndelete = document.createElement('button');
        btndelete.className = 'btn-delete';
        btndelete.textContent = "delete candidate";



        // evento para sumar votos
        btnv.addEventListener('click', function () {
            candidate.votos++;
            votes.textContent = candidate.votos

        });
        

        // evento para eliminar candidato
        btndelete.addEventListener('click' , function () {
            // Encuentra el índice del candidato en el array
            let index = CandidateList.indexOf(candidate);
            // Si el candidato existe en el array, se elimina
            if (index !== -1) {
                CandidateList.splice(index, 1);
                // Vuelve a mostrar la lista de candidatos actualizada
                ShowListCandidates();
            }
        });

        divname.appendChild(candidatename)
        divvotes.appendChild(txtvotes)
        divvotes.appendChild(votes)
        containercolor.appendChild(textc)
        containercolor.appendChild(colordiv)
        divbtnv.appendChild(btnv)
        divbtndlt.appendChild(btndelete)

        divcard.appendChild(divname);
        divcard.appendChild(divvotes)
        divcard.appendChild(containercolor)
        divcard.appendChild(divbtnv);
        divcard.appendChild(linehr)
        divcard.appendChild(divbtndlt);
        container.appendChild(divcard);

    });
}

