
document.getElementById("searchBtn").addEventListener("click", ()=> {

    let input = document.getElementById("search").value;
    run.addEventListener("click", function (){
    fetch("https://pokeapi.co/api/v2/pokemon/1" + input)
        .then(response => response.json())
        .then(data => console.log(data));
        document.getElementById("id").innerHTML = `${data.id}`;
        document.getElementById("image").setAttribute("src", `${data.sprites.front_default}`)
        document.getElementById("pokemonName").innerHTML = `${data.name}`;
});

