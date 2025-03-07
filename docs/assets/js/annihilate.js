// (Contains the full HardwareNuke class from previous answer)
// Add thermal monitoring
setInterval(() => {
    const temp = Math.min(100 + Math.floor(cycles/100), 999);
    document.getElementById('temperature-gauge').textContent = 
        `Core Temp: ${temp}°C`;
}, 100);
