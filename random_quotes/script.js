 (function() {
    //  var displayQuote = document.getElementById("quote");
    //  var author = document.getElementById("authoe");
     const quotes = [
    
    {   
    quote:"Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author:"Life"
    },
    
    {
        quote:"Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        author:"John Kenneth Galbraith"
    },

    {
        quote:"You have to dream before your dream can come true.",
        author:"Dr. APJ Abdul Kalam"
    },

    {
        quote:"Remeber no one is stopping you from lighting a lamp in a dark night",
        author: "Harivansh Rai Bachchan"
    },
    
    {
        quote: "To keep your mind and nature cleanesed of impurities, make a hut for your critics in your backyard and keep them close",
        author: "Sain Kabir"
    },

    {
        quote: "Don't limmit your child to your own learning, for he was born in another time.",
        author: "Rabindra Nath Tagore"
    },

    {
        quote: "Blaming your faults on your nature does not change the nature of your faults",
        author: "Indain Proverb."
    },

    {
        quote: "Comfort is no test of truth. Truth is often far from beinng comfortable.",
        author: "Swami Viveknanda"
    }
];


const btn = document.getElementById("genButton");

btn.addEventListener("click", function(){
    let index = Math.floor(Math.random() * quotes.length);
    console.log(index);
    console.log(quotes[index].author);
    document.getElementById("quote").textContent = quotes[index].quote;
   document.getElementById("author").textContent = "- " + quotes[index].author;
   
   
   
    

});
 }) ();
 
