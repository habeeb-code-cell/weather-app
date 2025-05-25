Weather App

Overview
The Weather App is a simple, responsive web application built with React and Vite. It allows users to search for real-time weather information for any city using the OpenWeatherMap API. The app displays the temperature, location, humidity, and wind speed, along with a weather icon representing the current conditions.
Features

Search Functionality: Enter a city name to fetch and display its current weather data.
Responsive Design: The app is optimized for various devices, including laptops, tablets, and mobile phones.
Weather Details: Displays temperature, location, humidity, and wind speed.
Dynamic Weather Icons: Shows an icon corresponding to the current weather condition (e.g., clear, cloudy, rainy).
Modern UI: Styled with a clean, gradient background and the Poppins font from Google Fonts.

Technologies Used

React: JavaScript library for building the user interface.
Vite: Frontend tooling for fast development and build.
CSS: Custom styles for responsive design (no frameworks used).
OpenWeatherMap API: For fetching real-time weather data.
Google Fonts: Poppins font for typography.

Prerequisites
Before running the app, ensure you have the following installed:

Node.js (v14 or higher)
npm (comes with Node.js) or yarn
An OpenWeatherMap API key (sign up at OpenWeatherMap to get one)

Setup Instructions

Clone the Repository (if applicable):
git clone <repository-url>
cd weather-app


Install Dependencies:Run the following command to install the required packages:
npm install


Set Up Environment Variables:

Create a .env file in the root directory.
Add your OpenWeatherMap API key:VITE_APP_ID=your_openweathermap_api_key



Note: The app currently uses a hardcoded API key in Weather.jsx. For security, it’s recommended to use the environment variable as shown in the commented code.

Run the App:Start the development server:
npm run dev

Open your browser and navigate to http://localhost:5173 (or the port specified in your terminal).


Usage

Search for a City: Type a city name (e.g., "Jos") into the search bar and click the search icon to fetch the weather data.
View Weather Details: The app will display the current temperature, location, humidity, and wind speed, along with a weather icon.
Responsive Layout: Test the app on different devices to see the responsive design in action.

Project Structure

src/App.jsx: Main app component that renders the Weather component.
src/components/Weather.jsx: Core component handling weather data fetching and rendering.
src/Weather.css: Custom styles for the Weather component.
src/index.css: Global styles, including the Poppins font import.
src/assets/: Contains weather-related icons (e.g., clear.png, humidity.png).
src/main.jsx: Entry point for the React app.

Deployment
The app is deployed on Render and works perfectly. To deploy your own version:

Push your code to a GitHub repository.
Connect the repository to Render (or your preferred hosting service).
Set the environment variable (VITE_APP_ID) in Render’s dashboard.
Deploy the app and access it via the provided URL.

Screenshots
Screenshot showing the weather details for Lagos with a temperature of 25°C, 91% humidity, and 1.5 km/h wind speed.
Known Issues

The API key is currently hardcoded in Weather.jsx. It’s recommended to use the environment variable (VITE_APP_ID) for security.
Error handling for failed API requests is minimal. Consider adding user feedback (e.g., an error message) if the API call fails.

Future Improvements

Add error handling for invalid city names or API failures.
Include more weather details (e.g., feels-like temperature, weather description).
Add a loading state while fetching weather data.
Support for multiple languages or unit systems (e.g., Celsius/Fahrenheit toggle).

Contributing
Feel free to fork this repository, make improvements, and submit a pull request. Any contributions are welcome!
License
This project is licensed under the MIT License.
Acknowledgments

OpenWeatherMap for providing the weather API.
Google Fonts for the Poppins font.

