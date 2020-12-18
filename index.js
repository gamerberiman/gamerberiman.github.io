fetch('https://pokeapi.co/api/v2/pokemon?limit=300&offset=0')
.then(response => response.json())
.then(data => {

    let inputSubmit = document.getElementById("submit-btn")
    let randomName = document.getElementById("random")
    let pokemonContainer = document.createElement("div")
    
   
    inputSubmit.addEventListener("click", function (e) {
      let loadingGif = document.getElementById("midimg")
    loadingGif.setAttribute("src", "imageFolder/etc/pokeball-loading.gif")
      let randomIndex = Math.round(Math.random() * data.results.length)
      let randomPokemonName = data.results[randomIndex].name
   

      fetch(data.results[randomIndex].url)
    .then(response => response.json())
    .then(data1 => {
      let changeImg = document.getElementById("midimg")

      let randomPokemonGif = data1.sprites.versions["generation-v"]["black-white"].animated["front_default"]
      
      changeImg.setAttribute("src", randomPokemonGif)
       })
        
        const pokemonName = document.createTextNode(randomPokemonName);

        const currentDiv = document.getElementById("border-text")
        document.body.insertBefore(pokemonContainer, currentDiv)
        randomName.innerText = randomPokemonName.toUpperCase()
    })
    })