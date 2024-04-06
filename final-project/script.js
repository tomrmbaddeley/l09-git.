// Selecting name and title elements
const nameElement = document.getElementById('name');
const titleElement = document.getElementById('title');

// Adding event listeners for hover effect
nameElement.addEventListener('mouseenter', () => {
  nameElement.style.fontSize = '2em'; // Increase font size on hover
});

nameElement.addEventListener('mouseleave', () => {
  nameElement.style.fontSize = '1.5em'; // Restore font size on mouse leave
});

titleElement.addEventListener('mouseenter', () => {
  titleElement.style.fontSize = '1.5em'; // Increase font size on hover
});

titleElement.addEventListener('mouseleave', () => {
  titleElement.style.fontSize = '1em'; // Restore font size on mouse leave
});


// Fetch data from the API
function fetchRandomAdvice() {
    // Using XMLHttpRequest (XHR) object to make an AJAX request
    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // If request is successful (status code 200), parse and display the advice
          const response = JSON.parse(xhr.responseText);
          const advice = response.slip.advice;
          document.getElementById('advice').textContent = advice;
        } else {
          // If request is not successful, display an error message
          document.getElementById('advice').textContent = 'Failed to fetch advice';
        }
      }
    };
  
    xhr.open('GET', 'https://api.adviceslip.com/advice', true);
    xhr.send();
  }
  
  // Call the fetchRandomAdvice function to fetch and display the random advice
  fetchRandomAdvice();
  