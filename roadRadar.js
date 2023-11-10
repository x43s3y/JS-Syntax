let areasSpeedLimits = {
    "motorway": 130,
    "interstate": 90,
    "city": 50,
    "residential": 20
};

function roadRadar(speed, area) {
    return (areasSpeedLimits[area] >= speed) ? `Driving ${speed} km/h in a ${areasSpeedLimits[area]} zone` : `The speed is ${speed - areasSpeedLimits[area]} km/h faster than the allowed speed of ${areasSpeedLimits[area]} - ${(speed - areasSpeedLimits[area] <= 20) ? "speeding" : (speed - areasSpeedLimits[area] <= 40) ? "excessive speeding" : "reckless driving"}`;
}

console.log(roadRadar(500, "motorway"));