const soulmateVoice = require('../index');

(async () => {
    try {
        const result = await soulmateVoice('bn-IN'); // Bengali voice
        console.log('Message played successfully!', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
