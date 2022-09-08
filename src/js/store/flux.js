const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            characters: [], // acumular el contenido de los characters de la api
            planets: [], // acumular el contenido de los planets de la api
        },
        actions: {
            getCharacters: () => {

                fetch("https://swapi.dev/api/people/")
                    .then((response) => response.json()) // transformar el contenido en un json
                    .then((data) => setStore({
                        characters: data.results // results porque esta en la api 
                    }))
            },

            getPlanets: () => {

                fetch("https://swapi.dev/api/planets/")
                    .then((response) => response.json()) // transformar el contenido en un json
                    .then((data) => setStore({
                        planets: data.results // results porque esta en la api 
                    }))
            },
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;