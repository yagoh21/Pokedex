// variavel global  

const pokemonName =    document.querySelector('.pokemon__name');
const pokemonNumber =   document.querySelector('.pokemon__number');
const pokemonImage =   document.querySelector('.pokemon__image');
const form =   document.querySelector('.form');
const input =   document.querySelector('.input__search');
const buttonPrev =   document.querySelector('.btn-prev');
const buttonNext =   document.querySelector('.btn-next');


let searchPokemon = 1;

// criando função para busca de pokemons 
const fetchPokemon = async (pokemon) =>   {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIResponse.status ==200){
        const data = await APIResponse.json()
        return data;
    }


}

const renderPokemon = async (pokemon) =>{


    pokemonName.innerHTML='Loading...';
    pokemonNumber.innerHTML='';

    const data = await fetchPokemon(pokemon);

   


    if (data){
        pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name; 
    //retornando chave name, para retornar o nome do pokemon

    pokemonNumber.innerHTML = data.id; 

    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']
    ['animated']['front_default']
    // fazendo o caminho da API para trazer o gif 
        searchPokemon = data.id;

    input.value='';
}else{
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'not Found :c';
    pokemonNumber.innerHTML = '';
}
}


//await vai esperar concluir para depois dar seguimento no codigo 

//formulario de pesquisa
form.addEventListener('submit', event =>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
    input.value = '';
})

buttonPrev.addEventListener('click', () =>{
    if(searchPokemon > 1)
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
});

buttonNext.addEventListener('click', ()=>{
  searchPokemon += 1;
  renderPokemon(searchPokemon);
 });



renderPokemon(1);