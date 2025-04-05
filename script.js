// Get references to the clock hand elements
var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var hours = document.getElementById("hours");

// Get the current system time
var currentTime = new Date();
var c_seconds = currentTime.getSeconds();
var c_minutes = currentTime.getMinutes();
var c_hours = currentTime.getHours();

// Convert current time to rotation angles in degrees
var s_deg = c_seconds * 6;  // 360° / 60 seconds = 6° per second
var m_deg = (c_minutes + (c_seconds / 60)) * 6;  // Minute angle including seconds
var h_deg = (c_hours + ((c_minutes + (c_seconds / 60)) / 60)) * 30;  // Hour angle including minutes and seconds

// Function to update clock hands every second
function timeUpdate() {
  s_deg = s_deg + 6;               // Add 6° for each passing second
  m_deg = m_deg + (6 / 60);        // Add 0.1° to minute hand every second
  h_deg = h_deg + (30 / 3600);     // Add 0.0083° to hour hand every second

  // Apply the updated rotation to each hand
  seconds.style.transform = 'rotate(' + s_deg + 'deg)';
  minutes.style.transform = 'rotate(' + m_deg + 'deg)';
  hours.style.transform = 'rotate(' + h_deg + 'deg)';
}

// Call timeUpdate function every 1000 milliseconds (1 second)
setInterval(timeUpdate, 1000);
