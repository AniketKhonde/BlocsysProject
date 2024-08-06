# Cryptocurrency Listing Interface

## Project Overview

This project is a cryptocurrency listing interface that displays key information about various cryptocurrencies. The interface allows users to search and sort through the list of cryptocurrencies and presents the data in a clear, easy-to-read format.

## Features

- **Search Functionality**: Filter cryptocurrencies by name or symbol in real-time.
- **Sorting Functionality**: Sort the list based on current price, market cap, circulating supply, or alphabetically by name.
- **Display**: Show detailed information including symbol, name, image URL, current price, market cap, circulating supply, and total supply.
- **Responsive Design**: Usable on both desktop and mobile devices.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool for faster development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn UI**: UI components library.
- **Axios**: HTTP client for making API requests.

## Installation

1. Clone the repository:
    git clone <repository-url>

2. Navigate to the project directory:
    cd cryptoproject
   

3. Install dependencies:
    npm install
 

4. Run the development server:
    npm run dev
  

5. Open `http://localhost:5174` in your browser.

## Deployment

The project is deployed on Vercel. You can view the live version (https://blocsys-project-gtbu.vercel.app/).

## API

The data is fetched from the [CoinGecko API](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false).


## Contributing

If you have any suggestions or improvements, please feel free to fork the repository and create a pull request.


Thank You!

