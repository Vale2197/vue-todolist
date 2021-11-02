/* Descrizione:
Rifare l'esercizio della to do list come fatto assieme in classe:
stampare in pagina un item per ogni elemento contenuto in un array
ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
Quando avete finito:
per chi non ha fatto il bonus dell'esercizio di venerdi, provate a farlo e poi passare ai bonus di questo esercizio.
chi ha fatto faccia i bonus
Funzionalitá di Base:
 La nostra todo list avrá alcune tasks di default predefinite
 L'utente puó inserire nuove tasks
 Cliccando sulla "X" l'utente puó cancellare una task
 Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
 ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri. */



const root = new Vue({
    el: "#root",
    data: {
        listaTask: [
            "Fare i compiti",
            "Fare la spesa",
            "Fare il bucato"
        ],
        newTask: "",
        errorMessage: "inserisci almeno 5 caratteri",
        error: false,
        noTask: false,
    },
    methods: {
        removeTask(i) {
            this.listaTask.splice(i, 1);
            if (this.listaTask.length == 0) {
                this.noTask = true;
                this.error = false 
            }
        },
        addTask() {
           if(this.newTask.length > 4) {
               this.error = false;
               this.listaTask.push(this.newTask);
               this.noTask = false;
           }
           else {
               this.error = true;
           }
            
        },
        enterAdd() {
            if(this.newTask.length > 4) {
                this.error = false;
                this.listaTask.push(this.newTask);
                this.noTask = false;
            }
            else {
                this.error = true;
            }
        }
    }
})