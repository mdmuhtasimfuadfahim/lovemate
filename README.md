[![NPM Version](https://img.shields.io/npm/v/soulmate.svg?style=flat-square)](https://www.npmjs.com/package/soulmate) [![NPM Monthly Downloads](https://img.shields.io/npm/dm/soulmate?style=flat-square)](https://npmjs.org/package/soulmate)

[![Last Commit](https://img.shields.io/github/last-commit/mdmuhtasimfuadfahim/soulmate?style=flat-square)](https://github.com/mdmuhtasimfuadfahim/soulmate/commits/) ![Language Most Used](https://img.shields.io/github/languages/top/mdmuhtasimfuadfahim/soulmate?style=flat-square) [![Implementations](https://img.shields.io/badge/%F0%9F%92%A1-implementations-8C8E93.svg?style=flat-square)](https://github.com/mdmuhtasimfuadfahim/soulmate/issues) ![Repository Size](https://img.shields.io/github/repo-size/mdmuhtasimfuadfahim/soulmate?style=flat-square)

[![Forks](https://img.shields.io/github/forks/mdmuhtasimfuadfahim/soulmate?style=social)](https://github.com/mdmuhtasimfuadfahim/soulmate/network/members) [![Stars](https://img.shields.io/github/stars/mdmuhtasimfuadfahim/soulmate?style=social)](https://github.com/mdmuhtasimfuadfahim/soulmate/stargazers) [![Watches](https://img.shields.io/github/watchers/mdmuhtasimfuadfahim/soulmate?style=social)](https://github.com/mdmuhtasimfuadfahim/soulmate/watchers)

[![Author GitHub](https://img.shields.io/github/followers/mdmuhtasimfuadfahim?label=Follow&style=social)](https://github.com/mdmuhtasimfuadfahim)

# soulmate 💖🎵

`soulmate` is a fun npm package designed to express affectionate phrases in various languages through voice.

## Table of Contents

- [Description](#description)
- [Supported Languages](#supported-languages)
- [Dependencies and API](#dependencies-and-api)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Author](#author)
- [Contribution](#contribution)

## Description

Solumate provides an extensive repertoire of romantic phrases in over `30+` languages, each complemented by a voice recording, text, and voice URL. Users can leverage these features to convey their affection to their loved ones with ease. Simply install the package and execute it to access a diverse array of heartfelt expressions, enhancing your communication in a myriad of languages.

> Currently, users can hear the phrases in a female voice, with plans to add male voice options in the future.

## Supported Languages

`soulmate` supports a wide range of languages, including:

- `af-ZA`: Afrikaans (South Africa)
- `ar-XA`: Arabic (Gulf)
- `bn-IN`: Bengali (India)
- `cs-CZ`: Czech (Czech Republic)
- `da-DK`: Danish (Denmark)
- `de-DE`: German (Germany)
- `el-GR`: Greek (Greece)
- `en-AU`: English (Australia)
- `en-GB`: English (United Kingdom)
- `en-IN`: English (India)
- `en-US`: English (United States)
- `es-ES`: Spanish (Spain)
- `es-US`: Spanish (United States)
- `fi-FI`: Finnish (Finland)
- `fil-PH`: Filipino (Philippines)
- `fr-CA`: French (Canada)
- `fr-FR`: French (France)
- `hi-IN`: Hindi (India)
- `hu-HU`: Hungarian (Hungary)
- `id-ID`: Indonesian (Indonesia)
- `it-IT`: Italian (Italy)
- `ja-JP`: Japanese (Japan)
- `ko-KR`: Korean (South Korea)
- `nb-NO`: Norwegian (Norway)
- `nl-NL`: Dutch (Netherlands)
- `pl-PL`: Polish (Poland)
- `pt-BR`: Portuguese (Brazil)
- `pt-PT`: Portuguese (Portugal)
- `ru-RU`: Russian (Russia)
- `sk-SK`: Slovak (Slovakia)
- `sv-SE`: Swedish (Sweden)
- `ta-IN`: Tamil (India)
- `tr-TR`: Turkish (Turkey)
- `uk-UA`: Ukrainian (Ukraine)
- `vi-VN`: Vietnamese (Vietnam)
- `zh-CN`: Chinese (Mandarin, Simplified)
- `zh-HK`: Chinese (Cantonese, Traditional)
- `zh-TW`: Chinese (Mandarin, Traditional)

## Dependencies and API

`soulmate` uses the following npm packages:

- `google-tts-api`: This package is used to generate the audio files from the translated phrases.
- `google-translate-api-x`: This package is used to translate the phrases into the desired language.
- `play-sound`: This package is used to play the generated audio files.

In addition, `soulmate` uses the `quotable.io` API to fetch random love quotes.

## Installation

To install `soulmate`, use npm or yarn:

```sh
npm install soulmate
```

or

```sh
yarn add soulmate
```

## Usage

```sh
const soulmateVoice = require("soulmate");

(async () => {
  try {
    const language = "bn-IN"; // Specify the language (e.g., 'en-US' for English, 'es-ES' for Spanish, etc.)
    const phrase = await soulmateVoice(language); // for English you don't need to pass the language parameter
    console.log("Message played successfully!", phrase);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
```

## 📜 License

Copyright © 2023 [Md. Muhtasim Fuad Fahim](https://github.com/mdmuhtasimfuadfahim)

This project is licensed under the MIT License. This license allows you to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software. However, you must include the original copyright notice and disclaimers.

For more information about this license, please visit [MIT License](https://api.github.com/licenses/mit).

## 👤 Author

🤓 **Md. Muhtasim Fuad Fahim <muhtasimfuadfahim@proton.me>**

- Contact: For any questions or suggestions, you can reach me at [muhtasimfuadfahim@proton.me](mailto:muhtasimfuadfahim@proton.me)

- Github: [@mdmuhtasimfuadfahim](https://github.com/mdmuhtasimfuadfahim)
- LinkedIn: [@mdmuhtasimfuadfahim](https://www.linkedin.com/in/mdmuhtasimfuadfahim)

## 📝 Contribution

Contributions, issues, and feature requests are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

Feel free to check the [issues page](https://github.com/mdmuhtasimfuadfahim/soulmate/issues) for any existing issues or to create a new one.

- Contributions, issues and features requests are welcome!
- 📮 Submit PRs to help solve issues or add features
- 🐛 Find and report issues
- 🌟 Star the project
