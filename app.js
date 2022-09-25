document.querySelector("#button1").addEventListener("click",getTextFile);
document.querySelector("#button2").addEventListener("click",getJSON);
document.querySelector("#button3").addEventListener("click",getApi);
//text dosyasından veri alırken text() kullan, jsondan alırken json

/*
function getTextFile(){
fetch("textfile.txt").then(function(response){

    //console.log(response.text());

    return response.text();
    //text fonksiyonu icerigini gormek icin verinin. promise dondürür.
}).then(function(data){
    document.querySelector("#output").innerHTML+=data

}).catch(function(err){
    console.log(err);
})


//veri alma bu kadar hata cıkarsa diye ayrı bir kod yaz
//bunu yapınca promise yapısı dondurecek basarılı olursa devam ettir pormise ile.

}
*/
//bu kısım arrow funcition ile daha kısa yapmakicin
function getTextFile(){
    fetch("textfile.txt").then(response => response.text().then(data =>{

        document.getElementById("output").innerHTML+=data;
    })
)}
    
    





//JSON VERİSİNİ FETCH APİ İLE ALMAK.
function getJSON(){
    fetch("article.json").then(function(response){
    
        //console.log(response.text());
    
        return response.json();
        //text fonksiyonu icerigini gormek icin verinin. promise dondürür.
    }).then(function(articles){
       // console.log(articles);
       let output="<ul>";
       articles.forEach(function(article){

        output+=`<li>Name: ${article.username}-Age ${article.age}-Surname: ${article.surname}`
       })
       output+="</ul>"; //başlangıcta açtığımız ul yi kapatmalıyız. onun bu en sona eklemek icin
document.getElementById("output").innerHTML+=output;
    
    }).catch(function(err){
        console.log(err);
    })

}



//İNTERNETTEKİ HERHANGİ BİR SİTEDEN APİ çekme


function getApi(){
    fetch("https://api.github.com/users").then(function(response){
    
        //console.log(response.text());
    
        return response.json();
        //text fonksiyonu icerigini gormek icin verinin. promise dondürür.
    }).then(function(users){
       // console.log(articles);
       let output="<ul>";
       users.forEach(function(user){

        output+=`<li>Name: ${user.login}`
       })
       //başlangıcta açtığımız ul yi kapatmalıyız. onun bu en sona eklemek icin
document.getElementById("output").innerHTML+=output;
    
    }).catch(function(err){
        console.log(err);
    })

}