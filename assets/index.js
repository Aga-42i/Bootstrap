

// load vs DOMContentLoaded
// Document Object Model



window.addEventListener("DOMContentLoaded", getMelumatlariGetir)


async function getMelumatlariGetir() {
    const unvan = "https://jsonplaceholder.typicode.com/posts"


const bloqlarinYerlesdiyiDiv = document.querySelector(".blog-right-side")


    try {
        const gelenCavab = await fetch(unvan)
        // console.log(gelenCavab)
        const postlar = await gelenCavab.json()
        console.table(postlar)


        // console.log(postlar[0].title)
        // console.log(postlar[postlar.length-1].body)


        // increment i++
        for(let i=0; i<postlar.length; i++) {
        bloqlarinYerlesdiyiDiv.innerHTML += ` <div class="blog py-3">
        <span id="metadata">May 4 , 2024 , <span id="time">6 mins</span></span>
        <h2>${postlar[i].title}</h2>
        <a href="">Read the article</a>
    </div>
    `
            
        }






}

catch (err) {
    console.log("Serverde xeta yarandi. Bir az sonra cehd edin ." + err.message)
}

//reggardless

finally {

}

}

// const telebe = "Rufet"
// const telebeObj = [
//     {
//         ad:"Rufet" ,
//         soyad:"Elekberli",
//         yas:18 
//     } , {
//         ad:"Supan",
//         soyad:"Bagirov",
//         yas:17 
//     }
// ]

// console.log(telebeObj[telebeObj.length-1].ad)


//Babel.io 



let carobj = ["mercedes" , "bmw" , "volvo" , "cadillac"] ;

carobj.forEach(goster);

function goster (Element) {
    console.log(Element);
}




const carobjs = ["mercedes" , "bmw" , "volvo" , "cadillac"] ;

for( let carobj in carobjs) {
    console.log(carobj , carobjs[carobj]);
}




