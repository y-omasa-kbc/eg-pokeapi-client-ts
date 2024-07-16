// Importing necessary CSS
import './styles.css';

// Define the URL of the Pokemon API
const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

// Function to fetch Pokemon names and populate the dropdown
async function fetchPokemonList() {
    try {
        const response = await fetch(`${API_URL}?limit=10`);
        const data = await response.json();
        const dropdown = document.getElementById('pokemon-dropdown') as HTMLSelectElement;

        data.results.forEach((pokemon: { name: string }) => {
            const option = document.createElement('option');
            option.value = pokemon.name;
            option.text = pokemon.name;
            dropdown.add(option);
        });
    } catch (error) {
        console.error('Error fetching Pokemon list:', error);
    }
}

// Function to fetch and display Pokemon details
async function fetchPokemonDetails(name: string) {
    try {
        const response = await fetch(`${API_URL}${name}`);
        const data = await response.json();

        const details = document.getElementById('pokemon-details') as HTMLDivElement;
        details.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}" />
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
            <p>Base Experience: ${data.base_experience}</p>
        `;
    } catch (error) {
        console.error('Error fetching Pokemon details:', error);
    }
}

// Event listener for the search button
document.getElementById('search-button')?.addEventListener('click', () => {
    const dropdown = document.getElementById('pokemon-dropdown') as HTMLSelectElement;
    const selectedPokemon = dropdown.value;
    if (selectedPokemon) {
        fetchPokemonDetails(selectedPokemon);
    }
});

// Initialize the app by fetching the Pokemon list
fetchPokemonList();
