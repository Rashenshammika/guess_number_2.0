let randomNumber;
        let attempts;
        
        function initializeGame() {
            randomNumber = Math.floor(Math.random() * 10) + 1;
            attempts = 3;
            document.getElementById("numberInput").disabled = false;
            document.getElementById("result").textContent = "";
            document.getElementById("attempts").textContent = attempts;
            document.getElementById("numberInput").value = "";
            console.log(randomNumber);
        }
        
        function checkNumber() {
            let userGuess = parseInt(document.getElementById("numberInput").value);
            let result = document.getElementById("result");
            let attemptsLeft = document.getElementById("attempts");
            
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
                result.textContent = "Please enter a number between 1 and 10.";
                result.style.color = "orange";
                return;
            }
            
            attempts--;
            attemptsLeft.textContent = attempts;
            
            if (userGuess === randomNumber) {
                result.textContent = "Congratulations! You guessed it right!";
                result.style.color = "green";
                document.getElementById("numberInput").disabled = true;
            } else if (userGuess > randomNumber) {
                result.textContent = "Too high! Try again.";
                result.style.color = "red";
            } else {
                result.textContent = "Too low! Try again.";
                result.style.color = "red";
            }
            
            if (attempts === 0 ) {
                result.textContent = "Game Over! The number was " + randomNumber;
                document.getElementById("numberInput").disabled = true;
                
            }
            if(attempts===-1){
                resetGame();
            }
        }

        function resetGame() {
            initializeGame();
        }

        initializeGame();