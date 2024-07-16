// Importing necessary CSS
import './styles.css';

// Define the URL of the Pokemon API
const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

// ポケモンの英語名と日本語名の対応表
const pokemonNames: [string, string][] = [
    ['ivysaur', 'フシギソウ'],
    ['venusaur', 'フシギバナ'],
    ['charmander', 'ヒトカゲ'],
    ['charmeleon', 'リザード'],
    ['charizard', 'リザードン'],
    ['wartortle', 'カメール'],
    ['blastoise', 'カメックス'],
    ['caterpie', 'キャタピー'],
    // 必要に応じて他のポケモン名も追加
];

// 英語名から日本語名に変換する関数
function translatePokemonName(name: string): string | null {
    const found = pokemonNames.find(([engName]) => engName === name);
    return found ? found[1] : null;
}

// Function to fetch Pokemon names and populate the dropdown
async function fetchPokemonList() {
    try {
        const response = await fetch(`${API_URL}?limit=10`);
        const data = await response.json();
        const dropdown = document.getElementById('pokemon-dropdown') as HTMLSelectElement;
        data.results.forEach((pokemon: { name: string }) => {
            const option = document.createElement('option');
            option.value = pokemon.name;
            const translatedName = translatePokemonName(pokemon.name) || pokemon.name;    
            option.text = translatedName;
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
        const translatedName = translatePokemonName(data.name) || data.name;    
        const details = document.getElementById('pokemon-details') as HTMLDivElement;
        details.innerHTML = `
            <h2>${translatedName}</h2>
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
