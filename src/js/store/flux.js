const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            characters: [], // acumular el contenido de los characters de la api, llegan como un array de objetos
            planets: [], // acumular el contenido de los planets de la api
            charactersId: {}, // las llaves representan un objeto (los datos de la api llegan como objeto)
            planetsId: {},
        },
        actions: {
            getCharacters: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then((response) => response.json()) // transformar el contenido en un json
                    .then((data) => setStore({
                        characters: data.results // results porque esta en la api 
                    }))
            },

            getPlanets: () => {

                fetch("https://www.swapi.tech/api/planets")
                    .then((response) => response.json()) // transformar el contenido en un json
                    .then((data) => setStore({
                        planets: data.results // results porque esta en la api 
                    }))
            },

            getCharactersId: (id) => { // argumento se utiliza especificar los datos que se necesitan traer

                fetch("https://www.swapi.tech/api/people/" + id)
                    .then((response) => response.json()) // transformar el contenido en un json
                    .then((data) => setStore({
                        charactersId: data.result // result porque esta en la api 
                    }))
            },

            getPlanetsId: (id) => {

                fetch("https://www.swapi.tech/api/planets/" + id)
                    .then((response) => response.json()) // transformar el contenido en un json
                    .then((data) => setStore({
                        planetsId: data.result // result porque esta en la api 
                    }))
            },
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
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