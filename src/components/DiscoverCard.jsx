function DiscoverCard({ pokemon, toggleBan }) {


    return (

        <div className="card">


            <h2>
                {pokemon.name}
            </h2>


            <img
                src={pokemon.image}
                alt={pokemon.name}
            />



            <p
                className="attribute"
                onClick={() => toggleBan(pokemon.name)}
            >
                Name: {pokemon.name}
            </p>



            <p
                className="attribute"
                onClick={() => toggleBan(pokemon.type)}
            >
                Type: {pokemon.type}
            </p>



            <p>
                Height: {pokemon.height}
            </p>



            <p>
                Weight: {pokemon.weight}
            </p>


        </div>

    );

}


export default DiscoverCard;