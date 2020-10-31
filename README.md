# Trivia Game

React based web trivia game!

## About

This is a web trivia game built on React, using a static JSON file of trivia data. Other technologies used include Sass, and Github Pages for deploying.

## Known Issues

- On window resize, sometimes an error is thrown due to the progress tracker not resizing correctly
- Styling issues on smaller breakpoints

## Post MVP Features

### Function

- Allow user to upload json data for new trivia questions
- Store score in local storage to allow user to compare results to previous games

### UI

- Animated transitions between questions
- Shake animation on next button if a user tries to click before selecting an answer
- On the results page, display the corresponding question to each listed answer on user hover or click

### Code improvements

- Setup unit tests to improve code
- Setup sass variables for reused colors to reduce redundancy

## Running the app

Clone the app into your local machine. Once in the project directory you can run the following:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
