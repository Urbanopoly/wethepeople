  // Get the necessary elements
  const audioIcon = document.getElementById('audioIcon');
  const audioPlayer = document.getElementById('audioPlayer');
  const icon = document.getElementById('icon');

  // Add click event listener
  audioIcon.addEventListener('click', () => {
      if (audioPlayer.paused) {
          audioPlayer.play(); // Play the audio
          icon.classList.remove('fa-play');
          icon.classList.add('fa-pause');
      } else {
          audioPlayer.pause(); // Pause the audio
          icon.classList.remove('fa-pause');
          icon.classList.add('fa-play');
      }
  });