let pokeImg = document.getElementById("pokeImg");
let pokeName = document.getElementById("pokeName1");
let pokeType = document.getElementById("pokeType");
let pokeStats = document.getElementById("pokeStats");
let pokeAbilities = document.getElementById("pokeAbilities");
let pokeNum = document.getElementById("pokeNum");

//funcion para extraer pokemons
const fecthPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    pokeType.innerHTML = "";
    pokeStats.innerHTML = "";
    pokeAbilities.innerHTML = "";
    fetch(url).then((res) => { //promesas y consulta
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
        console.log(data);
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

//fecthPokemon();

const pokeInfo = (url) => {
    pokeImg.src = url.image;
    pokeName.innerHTML = url.name;
    pokeNum.innerHTML = `# ${url.number}`;

    for(var i=0;i<url.type.length;i++){
        pokeType.innerHTML += `${url.type[i].type.name} `;
    }

    for(var j=0;j<6;j++){
        pokeStats.innerHTML += `<li> ${url.stats[j].stat.name}: ${url.stats[j].base_stat}</li>`;
    }

    for(var k=0;k<url.abilities.length;k++){
        pokeAbilities.innerHTML += `<li> ${url.abilities[k].ability.name}</li>`;
    }
    
}
