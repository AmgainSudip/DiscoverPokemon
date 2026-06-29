import { useState } from "react";

import { getRandomPokemon } from "./services/pokemonApi";

import DiscoverCard from "./components/DiscoverCard";
import BanList from "./components/BanList";
import History from "./components/History";


function App(){

    const [pokemon, setPokemon] = useState(null);

    const [banList, setBanList] = useState([]);

    const [history, setHistory] = useState([]);

    const [loading, setLoading] = useState(false);



    async function discoverPokemon(){

        setLoading(true);

        try{

            let newPokemon;


            do{

                newPokemon = await getRandomPokemon();


            }while(
                banList.includes(newPokemon.name) ||
                banList.includes(newPokemon.type)
            );


            setPokemon(newPokemon);


            setHistory(previousHistory => [
                newPokemon,
                ...previousHistory
            ]);


        }catch(error){

            console.log("Error fetching Pokemon:", error);

        }


        setLoading(false);
    }



    function toggleBan(attribute){

        if(banList.includes(attribute)){

            setBanList(
                banList.filter(item => item !== attribute)
            );

        }
        else{

            setBanList([
                ...banList,
                attribute
            ]);

        }

    }



    return(

        <div className="container">


            <h1>
                Pokemon Discover
            </h1>


            <button 
                onClick={discoverPokemon}
                disabled={loading}
            >

                {
                    loading 
                    ? "Finding Pokemon..."
                    : "Discover"
                }

            </button>



            {
                pokemon && !loading &&
                <DiscoverCard
                    pokemon={pokemon}
                    toggleBan={toggleBan}
                />
            }



            <BanList
                banList={banList}
                toggleBan={toggleBan}
            />



            <History
                history={history}
            />


        </div>

    );

}


export default App;