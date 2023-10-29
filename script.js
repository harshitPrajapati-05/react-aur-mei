const a1 = document.querySelector("a");
const page1 = document.querySelector("#page-1")
a1.addEventListener("click",()=>{
     const quote = document.createElement("div");
     quote.id="quote"
     page1.appendChild(quote)
     const qu= document.querySelector("#quote")
     
     const imgInfo= document.createElement("img")
     imgInfo.src ="./navlogo.jpg";
     imgInfo.alt="harshit";
     quote.appendChild(imgInfo)

     const preText = document.createElement("h4")
     preText.textContent ="Code like there is no tomorrow name"
     quote.appendChild(preText)

     const nameText = document.createElement("h3")
     nameText.textContent ="Name is  Harshit prajapti aka hell"
     quote.appendChild(nameText)
     
     const stdText = document.createElement("h3")
     stdText.textContent =" NOSQL JAVA  PTYHON C++"
     quote.appendChild(stdText)
    
     const crossButton = document.createElement("a")
     crossButton.innerHTML = '<i class="fa-solid fa-x fa-xs"></i>'
     quote.appendChild(crossButton)
   
     crossButton.addEventListener("click",()=>{
        page1.removeChild(quote)
        page1.removeChild(hellnox)
      })
      const hellnox = document.createElement("div")
      hellnox.classList= "hellnox"
      hellnox.innerHTML = "<h5>H</h5> <h5>E</h5> <h5>L</h5> <h5>L</h5> <h5>N</h5> <h5>O</h5> <h5>X</h5>"
      quote.addEventListener("mousemove",()=>{
        page1.appendChild(hellnox)
       })
       quote.addEventListener("mousemove",()=>{
        gsap.fromTo(
           ".hellnox",
             {y:-200,
              duration:20,
             },
             {y:200}
        );
       })
})
