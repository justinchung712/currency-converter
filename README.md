# Currency Converter Chrome Extension

## Overview

This is a simple and efficient Chrome Extension for currency conversion, built using **React.js**, **Manifest v3**, and **Webpack**. The tool fetches live currency exchange rates using the free open-source API from [exchange-api](https://github.com/fawazahmed0/exchange-api) and supports math expressions for currency amounts via the **math.js** library.

## Features

* **Real-time Exchange Rates**: Fetches live rates for currency conversion.
* **Math Input**: Allows basic math expressions (e.g., `100+20`, `200*1.2`) for the amount to convert.
* **React-powered UI**: Provides a fast and interactive user experience.
* **Optimized Build Options**: Supports both development and production builds.

## Installation

1. Clone the repository:
```
git clone https://github.com/justinchung712/currency-converter.git
cd currency-converter
```
2. Install dependencies:
```
npm install
```

## Usage

### Development Build

Run the following command to start a development build:
```
npm run dev
```

This will build the project and generate the necessary files in the `dist/` folder.

### Production Build

Run the following command to create an optimized production build:
```
npm run build
```

This will produce a minified and optimized version of the extension in the `dist/` folder.

### Load the Extension in Chrome

1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" in the top-right corner.
3. Click on "Load unpacked" and select the `dist/` folder.
4. The extension should now be loaded and ready to use!

## Project Structure

```
currency-converter/
|-- public/             # Contains static assets like the HTML template
|-- src/                # Source files for the React app
|   |-- components/     # React components for the extension UI
|   |-- styles/         # CSS/SCSS files for styling
|   |-- utils/          # Utility functions, including API integration
|   |-- App.js          # Main React app entry point
|   |-- index.js        # Application bootstrap file
|-- webpack.config.js   # Webpack configuration file
|-- package.json        # NPM package configuration
|-- README.md           # Project documentation (this file)
```

## Dependencies

* **React.js**: For building the user interface.
* **Webpack**: For bundling JavaScript files and assets.
* **math.js**: For parsing and evaluating math expressions.
* **Manifest v3**: For Chrome Extension compatibility.

## API Integration

This project uses the free and open-source [exchange-api](https://github.com/fawazahmed0/exchange-api) for fetching live currency exchange rates. The API is simple to use and provides reliable data for currency conversions.

## Contribution

Feel free to fork this repository and submit pull requests for new features or bug fixes. Before contributing:

1. Ensure your changes adhere to the project's code style.
2. Test thoroughly to ensure functionality is not broken.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any questions or suggestions, feel free to reach out:

* **Author**: Justin Chung
* **Email**: justinchung712@gmail.com
* **Repository**: [Currency Converter Chrome Extension](https://github.com/justinchung712/currency-converter/tree/main)
