//fetch yaptıktan sonra =then aldıgı şey response adı verelim ve bunu consolla gostertelim. 
fetch("/data/settings.json").then(
    response=>{
    console.log(response)
}
)
