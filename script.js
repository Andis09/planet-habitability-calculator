let scoreChart;

const planets = {
    mercury: { distance: 0.39, temp: 440, mass: 0.055, ecc: 0.21, atm: "no" },
    venus:   { distance: 0.72, temp: 737, mass: 0.82,  ecc: 0.01, atm: "yes" },
    earth:   { distance: 1.00, temp: 288, mass: 1.00,  ecc: 0.02, atm: "yes" },
    mars:    { distance: 1.52, temp: 210, mass: 0.11,  ecc: 0.09, atm: "yes" },
    jupiter: { distance: 5.20, temp: 120, mass: 317.8, ecc: 0.05, atm: "yes" },
    saturn:  { distance: 9.58, temp: 95,  mass: 95.2,  ecc: 0.06, atm: "yes" },
    uranus:  { distance: 19.2, temp: 60,  mass: 14.5,  ecc: 0.05, atm: "yes" },
    neptune: { distance: 30.1, temp: 55,  mass: 17.1,  ecc: 0.01, atm: "yes" }
};

function loadPlanet() {
    let selected = document.getElementById("planetSelect").value;

    if (selected && planets[selected]) {
        let p = planets[selected];

        document.getElementById("distance").value = p.distance;
        document.getElementById("temp").value = p.temp;
        document.getElementById("mass").value = p.mass;
        document.getElementById("ecc").value = p.ecc;
        document.getElementById("atm").value = p.atm;

        updatePlanetBackground(selected);
    }
}

function calculateHabitability() {
    let distance = Number(document.getElementById("distance").value);
    let temp = Number(document.getElementById("temp").value);
    let mass = Number(document.getElementById("mass").value);
    let eccentricity = Number(document.getElementById("ecc").value);
    let atmosphere = document.getElementById("atm").value;

    let tempScore = 1 - Math.abs(temp - 288) / 200;
    let distanceScore = 1 - Math.abs(distance - 1) / 2;
    let massScore = 1 - Math.abs(mass - 1) / 2;
    let eccScore = 1 - eccentricity;
    let atmScore = atmosphere === "yes" ? 1 : 0;

    tempScore = Math.max(0, Math.min(1, tempScore));
    distanceScore = Math.max(0, Math.min(1, distanceScore));
    massScore = Math.max(0, Math.min(1, massScore));
    eccScore = Math.max(0, Math.min(1, eccScore));

    let finalScore =
        (0.30 * tempScore) +
        (0.25 * distanceScore) +
        (0.15 * massScore) +
        (0.10 * eccScore) +
        (0.20 * atmScore);

    document.getElementById("result").innerText =
        "Habitability Score: " + finalScore.toFixed(2);

    let ratingElement = document.getElementById("rating");
    let rating = "";

    if (finalScore >= 0.75) {
        rating = "High Habitability";
        ratingElement.className = "high";
    } else if (finalScore >= 0.45) {
        rating = "Moderate Habitability";
        ratingElement.className = "medium";
    } else {
        rating = "Low Habitability";
        ratingElement.className = "low";
    }

    ratingElement.innerText = rating;

    document.getElementById("breakdown").innerHTML = `
        <h3>Score Breakdown</h3>
        <p>Temperature Score: ${tempScore.toFixed(2)}</p>
        <p>Distance Score: ${distanceScore.toFixed(2)}</p>
        <p>Mass Score: ${massScore.toFixed(2)}</p>
        <p>Eccentricity Score: ${eccScore.toFixed(2)}</p>
        <p>Atmosphere Score: ${atmScore.toFixed(2)}</p>
    `;

    let scores = [tempScore, distanceScore, massScore, eccScore, atmScore];
    let labels = ["Temperature", "Distance", "Mass", "Eccentricity", "Atmosphere"];

    if (scoreChart) {
        scoreChart.destroy();
    }

    let ctx = document.getElementById("scoreChart").getContext("2d");

    scoreChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Factor Score",
                data: scores
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 1
                }
            }
        }
    });
}

function resetFields() {
    document.getElementById("planetSelect").value = "";
    document.getElementById("distance").value = "";
    document.getElementById("temp").value = "";
    document.getElementById("mass").value = "";
    document.getElementById("ecc").value = "";
    document.getElementById("atm").value = "yes";

    document.getElementById("result").innerText = "Habitability Score: --";

    let ratingElement = document.getElementById("rating");
    ratingElement.innerText = "";
    ratingElement.className = "";

    document.getElementById("breakdown").innerHTML = "";

    if (scoreChart) {
        scoreChart.destroy();
        scoreChart = null;
    }

    updatePlanetBackground("default");
}

function updatePlanetBackground(planet) {
    let bg = document.getElementById("planetBackground");

    const planetStyles = {
        default: "radial-gradient(circle at 30% 30%, #8fd3ff, #1d4ed8, #0b1020)",
        mercury: "radial-gradient(circle at 30% 30%, #d6d6d6, #777, #333)",
        venus: "radial-gradient(circle at 30% 30%, #ffd27f, #c87932, #5c2e0e)",
        earth: "radial-gradient(circle at 30% 30%, #8fd3ff, #1d8f4f, #123c69)",
        mars: "radial-gradient(circle at 30% 30%, #ff9f6e, #c1440e, #451804)",
        jupiter: "radial-gradient(circle at 30% 30%, #f5d6a2, #b77945, #5c4033)",
        saturn: "radial-gradient(circle at 30% 30%, #f4e1a1, #c2a35b, #5c4a24)",
        uranus: "radial-gradient(circle at 30% 30%, #b8ffff, #5ccfd6, #1b6670)",
        neptune: "radial-gradient(circle at 30% 30%, #7aa7ff, #2454c6, #061a66)"
    };

    bg.style.background = planetStyles[planet];
}