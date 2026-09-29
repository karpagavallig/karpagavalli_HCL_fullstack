// Input autofill handlers
const handleNameClick = (event) => {
  event.preventDefault();
  const nameField = document.getElementById("name");
  if (nameField) nameField.value = "Abhishek";
};

const handleEmailClick = (event) => {
  event.preventDefault();
  const emailField = document.getElementById("email");
  if (emailField) emailField.value = "abhishek.yadav@happiestminds.com";
};

const handleMessageClick = (event) => {
  event.preventDefault();
  const messageField = document.getElementById("message");
  if (messageField) messageField.value = "You are awesome😊";
};

// Form submission reset handler
const handleSubmit = (event) => {
  event.preventDefault();
  alert("Form submitted successfully!");
  const form = document.getElementById("basicForm");
  if (form) form.reset();
};

// Theme switcher function
const toggleMode = () => {
  document.body.style.backgroundColor = "rgb(16, 33, 48)";
  document.body.style.color = "#ffffff";

  const inputs = document.querySelectorAll(".inputField");
  inputs.forEach((field) => {
    field.style.backgroundColor = "#000000";
    field.style.color = "#ffffff";
  });

  const modeButton = document.getElementById("mode");
  if (modeButton) {
    modeButton.innerText = "Dark mode enabled";
  }
};

// Page routing helper
function goToPage(targetUrl) {
  window.location.href = targetUrl;
}

// Exception handling example for division
function divide() {
  const dividendVal = parseFloat(document.getElementById("dividend").value);
  const divisorVal = parseFloat(document.getElementById("divisor").value);
  const displayArea = document.getElementById("result");

  try {
    if (isNaN(dividendVal) || isNaN(divisorVal)) {
      throw new Error("Please enter valid numerical values in both fields.");
    }
    if (divisorVal === 0) {
      throw new Error("Cannot divide by zero.");
    }
    
    displayArea.innerText = `Result: ${dividendVal / divisorVal}`;
  } catch (err) {
    displayArea.innerText = err.message;
  }
}

// Simulated Promise task
async function simulateAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const rand = Math.random();
        console.log("Random Value Generated:", rand);

        if (rand < 0.5) {
          throw new Error("Failed to perform the asynchronous operation.");
        }
        resolve("Asynchronous operation executed successfully!");
      } catch (err) {
        reject(err);
      }
    }, 2000);
  });
}

// Async/Await handler function
async function performAsyncOperation() {
  const outputBox = document.getElementById("output");
  try {
    const response = await simulateAsyncOperation();
    console.log(response);
    if (outputBox) outputBox.innerText = response;
  } catch (err) {
    console.error("Execution Error:", err);
    if (outputBox) outputBox.innerText = `Error: ${err.message}`;
  } finally {
    console.log("Asynchronous process complete.");
  }
}