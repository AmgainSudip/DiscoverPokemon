export async function getRandomPokemon() {

    const randomId = Math.floor(Math.random() * 1025) + 1;


    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );


    if(!response.ok){
        throw new Error("Failed to fetch Pokemon");
    }


    const data = await response.json();


    return {

        id: data.id,

        name: data.name,

        image: data.sprites.other["official-artwork"].front_default,


        type: data.types[0].type.name,


        height: data.height,

        weight: data.weight

    };

}