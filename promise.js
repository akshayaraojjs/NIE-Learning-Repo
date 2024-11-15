const orderFood = () => {
    return new Promise((resolve, reject) => {
      console.log("Order placed. Waiting for confirmation...");

      setTimeout(() => {
        const isAvailable = Math.random() > 0.5; // Simulating a 50/50 chance
        if (isAvailable) {
          resolve("Your food is on its way!");
        } else {
          reject("Sorry, your order couldn't be completed.");
        }
      }, 2000); // Simulate waiting time
    });
  };

  // Use the promise with arrow functions
  orderFood()
    .then((message) => console.log("Success:", message)) // Runs if promise is resolved
    .catch((error) => console.log("Error:", error)); // Runs if promise is rejected