

var fullscreenButton = document.querySelector('#fullscreen-button');
fullscreenButton.addEventListener('click', toggleFullscreen);
function toggleFullscreen() {
  if (document.fullscreenElement) {
    // If the document is already in fullscreen mode, exit fullscreen mode
    document.exitFullscreen();
  } else {
    // If the document is not in fullscreen mode, enter fullscreen mode
    document.documentElement.requestFullscreen();
  }
}
function toggleFullscreen() {
  if (document.fullscreenElement) {
    // If the document is already in fullscreen mode, exit fullscreen mode and update the button text
    document.exitFullscreen();
    fullscreenButton.textContent = 'Enter Fullscreen';
  } else {
    // If the document is not in fullscreen mode, enter fullscreen mode and update the button text
    document.documentElement.requestFullscreen();
    fullscreenButton.textContent = 'Exit Fullscreen';
  }
}

//



// Get a reference to the video element and the button element
var video = document.querySelector('#video');
var pipButton = document.querySelector('#pip-button');

// Add a click event listener to the button element
pipButton.addEventListener('click', function() {
  // Check if the video element is in Picture-in-Picture mode
  if (document.pictureInPictureElement === video) {
    // If it is, exit Picture-in-Picture mode
    document.exitPictureInPicture()
      .then(function() {
        console.log('Exited Picture-in-Picture mode');
      })
      .catch(function(error) {
        console.error(error);
      });
  } else {
    // If it is not, enter Picture-in-Picture mode
    video.requestPictureInPicture()
      .then(function() {
        console.log('Entered Picture-in-Picture mode');
      })
      .catch(function(error) {
        console.error(error);
      });
  }
});

if ('pictureInPictureEnabled' in document) {
  // The Picture-in-Picture API is supported
} else {
  // The Picture-in-Picture API is not supported
}



if ('getBattery' in navigator) {
  navigator.getBattery().then(function(battery) {
    // Update the battery level, charging status, and time left every time they change
    battery.addEventListener('levelchange', updateBatteryStatus);
    battery.addEventListener('chargingchange', updateBatteryStatus);
     battery.addEventListener('dischargingtimechange', updateBatteryStatus);

    // Initialize the battery level and charging status
    updateBatteryStatus();

    function updateBatteryStatus() {
      // Get the current battery level, charging status, and time left
      var level = battery.level * 100;
      var charging = battery.charging;
      var timeLeft = battery.dischargingTime;

      // Convert dischargingTime from seconds to hours, minutes, and seconds
  var hours = Math.floor(timeLeft / 3600);
  var minutes = Math.floor((timeLeft % 3600) / 60);
  //var seconds = timeLeft % 60;


      // Update the display with the current battery level and charging status
      document.querySelector('#battery-level').innerText = level + '%';
      if (level < 25) {
        document.querySelector('#battery-level').style.color = 'red';
      } else if (level < 50) {
        document.querySelector('#battery-level').style.color = 'yellow';
      } else {
        document.querySelector('#battery-level').style.color = 'green';
      }
      document.querySelector('#battery-level').innerText = level + '%';
      document.querySelector('#battery-charging').style.color = charging ? 'green' : 'red';
      document.querySelector('#battery-charging').innerText = charging ? 'Charging' : 'Not charging';
      document.querySelector('#battery-time-left').innerText = hours + ' hours and ' + minutes + ' minutes';
    }
  });
}



if ('getEyedropper' in navigator) {
  navigator.getEyedropper().then(function(eyedropper) {
    // Get a reference to the eye dropper button element
    var eyeDropperButton = document.querySelector('#eye-dropper-button');

    // Add a click event listener to the button element
    eyeDropperButton.addEventListener('click', function() {
      // Check if the eye dropper is currently active
      if (eyedropper.active) {
        // If it is, deactivate the eye dropper
        eyedropper.deactivate();
      } else {
        // If it is not, activate the eye dropper
        eyedropper.activate();
      }
    });

    // Add an event listener for the colorchange event
    eyedropper.addEventListener('colorchange', function(event) {
      // Get the selected color
      var color = event.detail;

      // Update the display with the selected color
      document.querySelector('#selected-color').style.backgroundColor = color;
    });
  });
} else {
  // The EyeDropper API is not supported
  // Your code to handle the lack of support goes here
}

document.getElementById('btnGo').addEventListener('click', (ev) => {
  const output = document.getElementById('result');

  if (!'EyeDropper' in window) {
    output.textContent = 'Sorry. No support for the Eyedropper API';
    return;
  }

  const dropper = new EyeDropper();
  const abortController = new AbortController();
  // abortController.abort(); //cancel the eyedropper

  dropper
    .open({ signal: abortController.signal })
    .then((result) => {
      console.log(result.sRGBHex);
      output.textContent = result.sRGBHex;
      output.style.borderLeftColor = result.sRGBHex;
    })
    .catch((err) => {
      output.textContent = err;
      output.style.borderLeftColor = `transparent`;
    });
});



document.getElementById('btnGo1').addEventListener('click', (ev) => {
  const output = document.getElementById('result');

  if (!'EyeDropper' in window) {
    output.textContent = 'Sorry. No support for the Eyedropper API';
    return;
  }

  const dropper = new EyeDropper();
  const abortController = new AbortController();
  // abortController.abort(); //cancel the eyedropper

  dropper
    .open({ signal: abortController.signal })
    .then((result) => {
      console.log(result.sRGBHex);
      output.textContent = result.sRGBHex;
      output.style.borderLeftColor = result.sRGBHex;
    })
    .catch((err) => {
      output.textContent = err;
      output.style.borderLeftColor = `transparent`;
    });
});

//
