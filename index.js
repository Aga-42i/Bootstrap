

// load vs DOMContentLoaded
// Document Object Model



window.addEventListener("DOMContentLoaded", getMelumatlariGetir)

const bloqlarinYerleseceyiDiv = document.querySelector(".blog-right-side")
console.log(bloqlarinYerleseceyiDiv)
window.addEventListener("DOMContentLoaded", getMelumatlariGetir)


async function getMelumatlariGetir() {
    const unvan = "https://jsonplaceholder.typicode.com/posts"
    // console.log(typeof unvan) //string


    try {
        const gelenCavab = await fetch(unvan)
        // console.log(gelenCavab)
        const postlar = await gelenCavab.json()
        console.table(postlar)

        // console.log(postlar[0].title)
        // console.log(postlar[1].title)
        // console.log(postlar[2].title)
        //increment i++

        // i=i+1
        for (let i = 0; i < postlar.length; i++) {

            bloqlarinYerleseceyiDiv.innerHTML += `<div class="blog py-3">
        <p id="metadata">May 4, 2024 , <span id="time">6 mins</span></p>
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



// let carobj = ["mercedes", "bmw", "volvo", "cadillac"];

// carobj.forEach(goster);

// function goster(Element) {
//     console.log(Element);
// }




// const carobjs = ["mercedes", "bmw", "volvo", "cadillac"];

// for (let carobj in carobjs) {
//     console.log(carobj, carobjs[carobj]);
// }


// const swiper = new Swiper(".projectSwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,

//     autoplay: {
//         delay: 1300,

//     }
//     ,
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//         },
//         992: {
//             slidesPerView: 2,
//             spaceBetween: 50,
//         },
//     },








// });

// const swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// })

// const let var statetment


// Partnyorlar section
const partnyor = new Swiper(".partnyorSwiper", {
  breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


    // Project section
  const project = new Swiper(".projectSwiper", {
    slidesPerView: 3,
    breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 40,
      },
      992: {
          slidesPerView: 3,
          spaceBetween: 50,
      },
  },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".prevBtn",
       nextEl: ".nextBtn",
    }
  });




// let s9 = undefined

// s9 = ["Azad" , "Agarehim"] 

// s9 {
            //  Bu obyektdir , cox melumat oldugda [ istifade edilir]
// }

// s9 = [{
//   name: "Aga",
//   surname: "Bkhs",
//   age:18
// } , {
//   name:"Ruf",
//   surname:"Elekbr" , 
//   age:19 
// }
// ]

// for( let i=0 ; i < s9.length ; i++ ) {
//   console.log(`${s9[i].name}  ${s9[i].surname}  ${s9[i].age}`)
// }


// console.log(`${s9[1].name}  ${s9[1].surname}  ${s9[1].age}`)
// console.log(s9[0].name)




// document.querySelector(".prevBtn").innerText = s9[0]

// console.log(Number(null))

