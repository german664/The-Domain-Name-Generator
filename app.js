let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extension = [".com", ".net", ".us", ".io"]

const generateDomain = () => {
    let domain = [];
    for (let i=0; i < pronoun.length; i++){
        for (let j =0; j < adj.length; j++){
            for (let x = 0; x < noun.length; x++){
                for (let s = 0; s < extension.length; s++) {
                    domain.push(pronoun[i] + adj[j] + noun[x] + extension[s])
                    console.log(pronoun[i] + adj[j] + noun[x] + extension[s])
                }
            }
        }
    }
    return domain
}

//console.log los resultados
generateDomain();

/* Elegir algun dominio random de todas las opciones posible 

let domains = generateDomain();

const pickRandomDomain = (arr) => {
    let random = Math.floor(Math.random()*arr.length);
    return  arr[random]
}

console.log("Availables domains: " + domains.join(' - '))

console.log(`The selected domain is ${pickRandomDomain(domains)}`) 

*/
