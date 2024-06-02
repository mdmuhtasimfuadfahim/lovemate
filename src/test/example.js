const lovemateVoice = require('../index');

(async () => {
    try {
        const result = await lovemateVoice('bn-IN'); // Bengali voice
        console.log('Message played successfully!', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
