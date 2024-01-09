self.addEventListener('message', function(event) {
        // Perform some computation in Worker 1
        const result = performComputation('Worker 1');
        
        // Send the result back to the main script
        self.postMessage(result);
      });
      
      function performComputation(workerName) {
        let sum = 0;
        for (let i = 0; i < 50000000; i++) {
          sum += i;
        }
        return `Result from ${workerName}: ${sum}`;
      }
      