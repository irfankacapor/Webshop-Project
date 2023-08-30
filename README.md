# React Webshop App

This project was created as part of an internship at Symphony IS, a medium-sized software development outsourcing company that has worked with large companies inside and outside of the IT industry, such as Apple and Nike.

## Description

The project involved building a React webshop app from scratch. The products are fetched from a mock API, and the data is modeled, refined, and then displayed on the webpage.

## Features

- **Home Page**: The home page includes a navbar and footer that are persistent across other pages.
- **Products Page**: This page fetches data using the Axios library from a dummy API and creates product cards that enable the user to view the products and add them to the cart.
- **Cart Page**: Implemented using local storage and custom context.
- **Filters Component**: Filters the data according to user preferences, i.e., by brand, category, or price.
- **Autocomplete Search**: Enables the user to search for products by name.
- **Checkout Page**: Contains a form that collects user personal info and card info. It has fully functional validation implemented using Yup and React Hook Form.
- **Sign Up, Sign In, and Forgot Password Pages**: Enable users to register and login, and afterwards see their profile picture in the navbar when logged in.
- **Localization**: The webpage supports localization, allowing it to be translated into different languages. This was implemented using the popular React library, i18next.

## Technologies Used

- React
- Styled-components
- Axios
- Yup
- React Hook Form
- Jest
- React Testing Library
- i18next

## Installation

To get started with this project:

1. Clone the repository.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the development server.

## Usage

Open http://localhost:3000 to view it in your browser. The page will reload when you make changes.

## Tests

Run `npm test` to launch the test runner in interactive watch mode. The tests are unit tests that use Jest and React Testing Library with a coverage of 80% over all lines of code.

## Deployment

Run `npm run build` to build the app for production. The build is minified, and the filenames include the hashes. Your app is ready to be deployed!

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## Contact Information

For any questions or collaboration requests, please feel free to reach out.
