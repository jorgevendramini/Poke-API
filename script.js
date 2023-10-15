const randomPokemon = () => {

    //Generate a random pokemon
    const randomPokemonID = () => {
        const randomIDNumber = Math.floor(Math.random() * 700);
        return randomIDNumber;
    }

    // Define the URL of the API you want to access
    const pokemonID = randomPokemonID();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
    console.log(apiUrl);

    // Make a GET request to the API using the fetch() function
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract information from the API
            const pokemon = data.name;
            const height = data.height;
            const weight = data.weight;
            const abilities = data.abilities.map(ability => ability.ability.name);
            const imgUrl = data.sprites.front_default;
            const imgUrl2 = data.sprites.other['official-artwork'].front_default;

            // Update HTML elements with the retrieved data
            document.getElementById("pokemon").textContent = pokemon;
            document.getElementById("height").textContent = height;
            document.getElementById("weight").textContent = weight;
            document.getElementById("abilities").textContent = abilities.join(", ");
            document.getElementById("pokemon-image").src = imgUrl;
            document.getElementById("pokemon-image2").src = imgUrl2;
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
        });

}