let quote = document.querySelector(".quote");
let author = document.querySelector(".author")
let btn = document.querySelector(".btn")
console.log(btn)

btn.addEventListener("click", () => {
    fetch("https://type.fit/api/quotes")
.then(
    response => response.json())
.then(data=>{
    console.log(data)
    let randomQuote = data[Math.floor(Math.random() * data.length)];
    let cleanAuthor = randomQuote.author? randomQuote.author.split(', type.fit')[0] : "unknown" ;
    quote.textContent = randomQuote.text;
    author.textContent = cleanAuthor;

})
.catch(error=> console.log("Error fetching the quote", error))
})
