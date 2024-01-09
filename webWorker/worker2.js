// worker2.js
self.addEventListener('message', function(event) {
        // Perform some computation in Worker 2
        const result = performComputation('Worker 2');
        
        // Send the result back to the main script
        self.postMessage(result);
      });
      
      function performComputation(workerName) {
        let product = 1;
        for (let i = 1; i <= 10; i++) {
          product *= i;
        }
        return `Result from ${workerName}: ${product}`;
      }
      