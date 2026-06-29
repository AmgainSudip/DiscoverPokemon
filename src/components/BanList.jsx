function BanList({ banList, toggleBan }) {

    return (

        <div className="ban-section">

            <h2>
                Ban List
            </h2>


            {
                banList.length === 0 ? (

                    <p>No banned attributes</p>

                ) : (

                    banList.map(item => (

                        <button
                            className="ban-item"
                            key={item}
                            onClick={() => toggleBan(item)}
                        >
                            {item}
                        </button>

                    ))

                )
            }


        </div>

    );

}


export default BanList;