//no myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

myFile.runContent();

function shouldContinue() {
    return pendingOSTasks.length || pendingOperations.length || pendingTimers.length;
}

while(shouldContinue()){
    // 5 steps occurs here
}

// exit back to terminal