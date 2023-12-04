async function moduleProject4() {

  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  // Get the dropdown element
  // Remove the duplicate declaration of 'dropdown'
  // Hide the weather widget
  const weatherWidget = document.getElementById('weatherWidget');
  weatherWidget.style.display = 'none';

  // Show loading indicator
  const infoParagraph = document.querySelector('p.info');
  // Move the declaration of apiUrl outside of the event listener
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${selectedCity}`;

  axios.get(apiUrl)
    .then(response => {
      // Handle successful response here
      console.log(response.data);
    })
    .catch(error => {
      // Handle error here
      console.error(error.message);
    });

  axios.get(apiUrl)
    .then(response => {
      // Handle successful response here
      console.log(response.data);
    })
    .catch(error => {
      // Handle error here
      console.error(error.message);
    });
  then(response => {
    // Handle successful response here
    console.log(response.data);
  })
  .catch(error => {
    // Handle error here
    console.error(error.message);
  });

  // Inside your event listener

// Handle data fetching success
function handleDataFetchingSuccess(data) {
  // Empty out the info paragraph
  infoParagraph.textContent = '';

  // Re-enable the dropdown
  dropdown.disabled = false;

  // Make the weather widget visible again
weatherWidget.style.display = 'block';

// Transform the weather description into emoji
// Add your code here

// 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()
