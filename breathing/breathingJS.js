var exerciseElement = document.getElementById('exercise');
var timerElement = document.getElementById('timer');
var startButton = document.getElementById('start');
var restartButton = document.getElementById('restart');
var progressBar = document.getElementById('progress');

var inhaleTime = 4;
var exhaleTime = 6;
var totalTime = 5 * 60; // 5 minutes in seconds
var elapsedTime = 0;

function startExercise() {
    var doneButton = document.getElementById('done');
var messageElement = document.getElementById('message');
    exerciseElement.textContent = 'Inhale';
    countdown(inhaleTime);
    setTimeout(function() {
        exerciseElement.textContent = 'Exhale';
        countdown(exhaleTime);
        setTimeout(startExercise, exhaleTime * 1000);
        elapsedTime += inhaleTime + exhaleTime;
        if (elapsedTime >= 2 * 60) exhaleTime = 7;
        if (elapsedTime >= 4 * 60) exhaleTime = 8;
        progressBar.style.width = (elapsedTime / totalTime * 100) + '%'; // Update the progress bar
    }, inhaleTime * 1000);
    if (elapsedTime >= totalTime) {
        exerciseElement.style.display = 'none';
        timerElement.style.display = 'none';
        startButton.style.display = 'none';
        restartButton.style.display = 'none';
        doneButton.style.display = 'block';
        messageElement.textContent = 'Successfully Completed .';
        messageElement.style.display = 'block';
    }
}

function countdown(seconds) {
    timerElement.textContent = seconds;
    var interval = setInterval(function() {
        seconds--;
        timerElement.textContent = seconds;
        if (seconds <= 0) clearInterval(interval);
    }, 1000);
}

startButton.addEventListener('click', function() {
    startExercise();
    startButton.disabled = true;
});

restartButton.addEventListener('click', function() {
    location.reload();
});