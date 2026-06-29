function HistoryCard({ pokemon }) {


    return (

        <div className="history-card">


            <img
                src={pokemon.image}
                alt={pokemon.name}
            />


            <p>
                {pokemon.name}
            </p>


            <p>
                Type: {pokemon.type}
            </p>


        </div>

    );

}


export default HistoryCard;