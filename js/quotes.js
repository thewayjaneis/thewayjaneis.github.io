const quotes = [
    {
        quote: "If you don't live in the way you think, you'll think the way you live.",
        author: "Jane",
    },
    {
        quote: "Happiness is not by chance, but by choice.",
        author: "Jane",
    },
    {
        quote: "Take the moment and make it perfect.",
        author: "Jane",
    },
    {
        quote: "Tomorrow is the first blank page of a 365 page book. Write a good one.",
        author: "Jane",
    },
    {
        quote: "The best project you'll ever work on is you.",
        author: "Jane",
    },
    {
        quote: "Now or Never.",
        author: "Jane",
    },
    {
        quote: "What we think we become.",
        author: "Buddha",
    },
    {
        quote: "Go for it.",
        author: "Aussie",
    },
    {
        quote: "Eat healty, Feel healty",
        author: "Jane",
    },
];
const quotePlay = document.querySelector("#quote span:first-child");
const authorPlay = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quotePlay.innerText = todaysQuote.quote;
authorPlay.innerText = todaysQuote.author;