// Function to calculate the carbon footprint
function calculateFootprint() {
    // Get user inputs
    const miles = parseFloat(document.getElementById("miles").value) || 0;
    const electricity = parseFloat(document.getElementById("electricity").value) || 0;
    const waste = parseFloat(document.getElementById("waste").value) || 0;

    // Conversion factors (approximate values)
    const milesToCO2 = 0.404; // kg CO2 per mile (average car emissions)
    const electricityToCO2 = 0.92; // kg CO2 per kWh (non-renewable energy)
    const wasteToCO2 = 1.2; // kg CO2 per kg waste (landfill emissions)

    // Calculate carbon emissions
    const milesEmissions = miles * milesToCO2;
    const electricityEmissions = electricity * electricityToCO2;
    const wasteEmissions = waste * wasteToCO2;

    // Total emissions
    const totalEmissions = milesEmissions + electricityEmissions + wasteEmissions;

    // Display results
    const result = document.createElement("div");
    result.className = "result";
    result.innerHTML = `
        <h3>Your Carbon Footprint:</h3>
        <p><strong>Transportation:</strong> ${milesEmissions.toFixed(2)} kg CO2</p>
        <p><strong>Electricity:</strong> ${electricityEmissions.toFixed(2)} kg CO2</p>
        <p><strong>Waste:</strong> ${wasteEmissions.toFixed(2)} kg CO2</p>
        <p><strong>Total:</strong> ${totalEmissions.toFixed(2)} kg CO2</p>
    `;

    // Remove previous result if any
    const previousResult = document.querySelector(".result");
    if (previousResult) {
        previousResult.remove();
    }

    // Append new result
    document.querySelector(".content").appendChild(result);
}
