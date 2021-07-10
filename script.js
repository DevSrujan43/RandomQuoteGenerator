const btn = document.getElementById('btn');
const divEle = document.querySelector('.quoteBox');

async function QuoteFetch() {
   const res = await fetch('https://type.fit/api/quotes');
   const data = await res.json();
   const rand  = Math.floor(Math.random() * data.length);
   return `${data[rand].text} By ${data[rand].author}` 
}


btn.addEventListener('click', async () => {
   let response = QuoteFetch();
   let dataFetched = await response;
   divEle.style.visibility = "visible";
   divEle.innerHTML = `<p> ${dataFetched} </p>`
})


