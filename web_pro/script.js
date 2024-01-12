// Replace with the coordinates of your desired location
var apiKey = 'e5453076591091d3687b3ffd33a3855f';

// Function to fetch weather by city
function fetchWeatherByCity(city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    $.get(apiUrl)
        .done(function (data) {
            var weatherInfo = 'City: ' + data.name + '<br>Temperature: ' + data.main.temp + '°C';
            $('#weather-info').html(weatherInfo);
        })
        .fail(function (error) {
            console.error('Error fetching weather:', error);
            $('#weather-info').html('Error fetching weather information.');
        });
}

// Event listener for city dropdown change
$('#city-selector').change(function () {
    var selectedCity = $(this).val();
    fetchWeatherByCity(selectedCity);
});

// Initial fetch with default city
fetchWeatherByCity('Istanbul');
