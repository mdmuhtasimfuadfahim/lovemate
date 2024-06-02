// Importing required modules
const axios = require('axios');
const translate = require('google-translate-api-x'); // Google Translate API for Node.js
const fallbackPhrases = require('./fallbackPhrases'); // Importing fallback phrases

/*
----------------------------
Function name: getPhrases
----------------------------
This function fetches a random love quote from the Quotable API and translates it to the specified language.
If there's an error fetching or translating the quote, it returns a random fallback phrase in the specified language.
It takes one parameter: the language code (default is 'en-US').
*/
const getPhrases = async (language = 'en-US') => {
    try {
        // Send a GET request to the Quotable API to fetch a random love quote
        const response = await axios.get('https://api.quotable.io/random?tags=love&minLength=10&maxLength=100');
        const phrase = response.data.content;

        // Translate the quote to the specified language
        const translated = await translate(phrase, { to: language.split('-')[0] });

        return translated.text;
    } catch (error) {
        console.error('Error fetching or translating phrases:', error.message);

        // Get the fallback phrases for the specified language, or for English if the language is not supported
        const phrases = fallbackPhrases[language] || fallbackPhrases['en-US'];

        // Generate a random index
        const randomIndex = Math.floor(Math.random() * phrases.length);

        // Return a random fallback phrase
        return phrases[randomIndex];
    }
};

module.exports = getPhrases;