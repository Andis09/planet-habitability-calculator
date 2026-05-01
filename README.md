# Planet Habitability Score Calculator

## Overview

The Planet Habitability Score Calculator is a web-based application that estimates how suitable a planet may be for supporting life. It analyzes key planetary characteristics and generates a habitability score based on how closely those conditions resemble Earth.

This project demonstrates how scientific concepts related to planetary habitability can be simplified and applied using programming and mathematical modeling.

---

## Features

* Select planets from the solar system with automatic data filling
* Enter custom planetary values
* Calculate a habitability score between 0 and 1
* Color-coded rating (Low, Moderate, High habitability)
* Bar chart visualization of factor contributions
* Detailed score breakdown for each factor
* Explanation message describing the results
* Input validation to ensure accurate calculations
* Reset functionality to clear inputs
* Animated background representing the selected planet
* Custom Planet option for manually entering data for planets outside the solar system
* Empty input fields are visually greyed out to guide the user


---

## How It Works

The application takes five main planetary factors:

* Surface temperature
* Distance from the star
* Planetary mass
* Orbital eccentricity
* Atmospheric presence

Each factor is normalized to a value between 0 and 1 based on how close it is to Earth’s conditions. These values are then weighted and combined to produce a final habitability score.

The scoring formula used is:

H = (0.30 × Temperature) + (0.25 × Distance) + (0.15 × Mass) + (0.10 × Eccentricity) + (0.20 × Atmosphere)

---

## Technologies Used

* HTML — structure and layout
* CSS — styling and user interface design
* JavaScript — logic, calculations, and interactivity
* Chart.js — data visualization (bar chart)

---

## How to Run the Project

1. Download or clone the repository
2. Open the project folder
3. Open `index.html` in a web browser

OR

Use Live Server in Visual Studio Code for a better development experience.

---

## Example Usage

1. Select a planet (e.g., Earth, Mars, Jupiter)
2. Observe the fields auto-fill
3. Click **Calculate Score**
4. View the habitability score, rating, breakdown, and chart

Users can also enter custom planetary values to test hypothetical planets.

---

## Limitations

* The model is simplified and does not include all scientific variables
* Atmospheric conditions are treated as a binary value (present or not)
* Does not include factors such as radiation, chemical composition, or magnetic fields
* Not connected to real-time planetary or exoplanet databases

---

## Future Improvements

* Integrate real exoplanet datasets
* Improve scoring accuracy with more advanced models
* Enhance user interface and responsiveness
* Add more environmental factors
* Expand visualization features

---

## Author

Andis Salinas

---

## Conclusion

This project successfully demonstrates how planetary habitability can be estimated using a simplified computational model. It combines scientific reasoning with programming to create an interactive and educational tool.
