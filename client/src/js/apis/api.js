async function asyncFetchScenario() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
    const pikachuJSON = await response.json();
  
    return (
      `Look mum, no callbacks! ` +
      `Pokémon #${pikachuJSON.id} is ${pikachuJSON.name}`
    );
  }

export default async function printFecthedScenario() {
    try{
        const fetchedScenario = await asyncFetchScenario();
        //console.log(fetchedMessage);
        return {apiData: fetchedScenario, error: false};
    }catch (e){
        return {apiData: null, error: e};
    }
}
