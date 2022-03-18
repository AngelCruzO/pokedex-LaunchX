let pokeImg = document.getElementById("pokeImg");
let pokeName = document.getElementById("pokeName1");
let pokeType = document.getElementById("pokeType");
let pokeStats = document.getElementById("pokeStats");
let pokeAbilities = document.getElementById("pokeAbilities");
let pokeNum = document.getElementById("pokeNum");
let pokeHeight = document.getElementById("pokeHeight");
let pokeWeight = document.getElementById("pokeWeight");

/* fetchPokemon: funcion para consumir poke API*/
const fecthPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    pokeType.innerHTML = "";
    pokeStats.innerHTML = "";
    pokeAbilities.innerHTML = "";
    fetch(url).then((res) => {
        //manejo de errores
        if(res.status != "200"){
            //console.log(res);
            let infoPoke = {
                number: "?",
                name: "????",
                image: "./assets/images/pikachuSad.png"
            }
            pokeInfo(infoPoke);
        }else{
            return res.json();
        }
        
    }).then((data) => {
        let infoPoke = {
            number: data.id,
            name: data.name,
            image: data.sprites.front_default,
            type: data.types,
            height: data.height,
            weight: data.weight,
            stats: data.stats,
            abilities: data.abilities
        }
        console.log(infoPoke);
        pokeInfo(infoPoke);
    })
}

/* pokeInfo: función que despliega el contenido de un objeto a etiquetas HTML
*
* Entradas
* url: informacion en formato json
*/
const pokeInfo = (url) => {
    pokeImg.src = url.image;
    pokeName.innerHTML = url.name;
    pokeNum.innerHTML = `# ${url.number}`;
    pokeHeight.innerHTML = url.weight;
    pokeWeight.innerHTML = url.height;


    for(var i=0;i<url.type.length;i++){
        pokeType.innerHTML += `${url.type[i].type.name} `;
    }

    for(var j=0;j<6;j++){
        pokeStats.innerHTML += `<li> ${url.stats[j].stat.name} <span>${url.stats[j].base_stat}</span></li>`;
    }

    for(var k=0;k<url.abilities.length;k++){
        pokeAbilities.innerHTML += `<li> ${url.abilities[k].ability.name}</li>`;
    }
    
}
