// Importing required modules
const axios = require('axios');
const googleTTS = require('google-tts-api'); // Google Text-to-Speech API for Node.js
const player = require('play-sound')(); // Play sounds using the command line
const languages = require('./languages'); // Importing supported languages
const getPhrases = require('./helpers/getPhrases'); // Importing helper function to get phrases
const fs = require('fs');
const path = require('path');

/*
----------------------------
Function name: getVoiceUrl
----------------------------
This function generates the URL for the Google Text-to-Speech API.
It takes two parameters: the text to be converted to speech and the language code.
*/
const getVoiceUrl = (text, lang) => {
    return googleTTS.getAudioUrl(text, {
        lang: lang, // Language code
        slow: false, // Speed of speech
        host: 'https://translate.google.com', // API host
    });
};

/*
----------------------------
Function name: lovemateVoice
----------------------------
This function generates the voice from text using Google Text-to-Speech API.
It takes one parameter: the language code.
*/
const lovemateVoice = async (language = 'en-US') => {
    try {
        // Check if the language is supported
        if (!languages[language]) {
            throw new Error('Unsupported language'); // Throw an error if the language is not supported
        }

        // Get the phrase for the specified language
        const text = await getPhrases(language);
        // Generate the URL for the Google Text-to-Speech API
        const url = getVoiceUrl(text, language);
        // Define the path for the output file
        const filePath = path.join(__dirname, 'lovemate-voice.mp3');

        // Send a GET request to the Google Text-to-Speech API
        const response = await axios({
            url, // API URL
            method: 'GET', // HTTP method
            responseType: 'arraybuffer', // Response type
        });
        // Write the response data to a file
        fs.writeFileSync(filePath, response.data);

        // Play the sound
        player.play(filePath, (err) => {
            // Log the error if there is one
            if (err) {
                console.error('Error playing the sound:', err);
                return;
            }
        });

        // Return the text and the URL
        return { text, url };

    } catch (error) {
        console.error('Error:', error.message);
        return;
    }
};

module.exports = lovemateVoice;