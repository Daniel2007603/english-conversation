let recognition;

function startRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Browser tidak support Speech Recognition");
        return;
    }
    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.start();
    recognition.onresult = function (event) {
        const text = event.results[0][0].transcript;

        document.getElementById("output").innerText = text;

        generateFeedback(text);
    };

    recognition.onerror = function (event) {
        document.getElementById("feedback").innerText =
            "Error: " + event.error;
    };
}

function stopRecognition() {
    if (recognition) {
        recognition.stop();
    }
}

function generateFeedback(text) {
    let feedback = "";

    if (text.length < 5) {
        feedback = "Try speaking more clearly and longer sentences.";
    } else if (text.includes("I am") || text.includes("my name")) {
        feedback = "Good self-introduction!";
    } else if (text.includes("how are you")) {
        feedback = "Good greeting expression!";
    } else {
        feedback = "Good try! Keep practicing your pronunciation.";
    }

    document.getElementById("feedback").innerText = feedback;
}