async function asyncFetchScenario() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
    const pikachuJSON = await response.json();
  
    return (
      `Look mum, no callbacks! ` +
      `Pokémon #${pikachuJSON.id} is ${pikachuJSON.name}`
    );
  }

  async function asyncFetchAssessment() {
    const pkcNumber = Math.floor(Math.random() * 100) + 1;
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/"+pkcNumber);
    const pikachuJSON = await response.json();
    console.log(      `Look mum, no callbacks! ` +
        `Pokémon #${pikachuJSON.id} is ${pikachuJSON.name}`)
    return (
      `Look mum, no callbacks! ` +
      `Pokémon #${pikachuJSON.id} is ${pikachuJSON.name}`
    );
  }

  async function printFecthedScenario() {
    try{
        const fetchedScenario = await asyncFetchScenario();
        //console.log(fetchedMessage);
        return {apiData: fetchedScenario, error: false};
    }catch (e){
        return {apiData: null, error: e};
    }
}

async function printFetchedAssessment(scene) {
    console.log("this is the scenario: ", scene);
    try{
        const fetchedAssessment = await asyncFetchAssessment();
        return {apiData: fetchedAssessment, error: false}
    }catch (e){
        return {apiData: null, error: e};
    }
}

export {printFecthedScenario, printFetchedAssessment}

