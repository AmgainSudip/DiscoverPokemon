import HistoryCard from "./HistoryCard";


function History({ history }) {


    return (

        <div className="history">


            <h2>
                History
            </h2>



            {
                history.length === 0 ? (

                    <p>
                        No Pokemon discovered yet
                    </p>

                ) : (

                    <div className="history-container">

                        {
                            history.map((pokemon, index) => (

                                <HistoryCard
                                    key={index}
                                    pokemon={pokemon}
                                />

                            ))
                        }

                    </div>

                )
            }


        </div>

    );

}


export default History;