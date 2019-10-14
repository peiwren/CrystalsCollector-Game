        /* pseudocode
            -need the computer to generate a random number (between 19 - 120) at the start of the game
            -need the user to click the button and then get each crystal random value respectively
            -capture the value and sum them up
            -compare the total crystal numbers with the computer random number. If the user's total number matches the computer number, the user win, otherwise lose
            -display the result to the user as win or lose
            -reset the game */

        $(function () {
            let targetRanNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            let redCrystRanNum = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            let blueCrystRanNum = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            let yellowCrystRanNum = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            let greenCrystRanNum = Math.floor(Math.random() * (12 - 1 + 1) + 1);
            // console.log(targetRanNum);

            //display computer random number as a target
            $("#target-randomNum").text(targetRanNum);

            //variables for win, loss and total numbers
            let totalNum = 0;
            let wins = 0;
            let losses = 0;

            //reset game function
            function reset() {
                targetRanNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
                $("#target-randomNum").text(targetRanNum);
                totalNum = 0;
                $("#yourTotalNum").text(totalNum);
            }

            //function to check win or loss
            function checkWinOrLoss() {
                if (totalNum === targetRanNum) {
                    wins++;
                    $("#win").text("Wins: " + wins);
                    $("#display-result").text("You won!")
                    reset();

                } else if (totalNum > targetRanNum) {
                    losses++;
                    $("#loss").text("Losses: " + losses);
                    $("#display-result").text("You lost this time, try again.")
                    reset();
                }
            };

            //click event to each button
            $("#red").click(function () {
                totalNum += redCrystRanNum;
                // console.log(redCrystRanNum);
                $("#yourTotalNum").text(totalNum);
                checkWinOrLoss();
            });

            $("#blue").click(function () {
                totalNum += blueCrystRanNum;
                // console.log(blueCrystRanNum);
                $("#yourTotalNum").text(totalNum);
                checkWinOrLoss();
            });

            $("#yellow").click(function () {
                totalNum += yellowCrystRanNum;
                // console.log(yellowCrystRanNum);
                $("#yourTotalNum").text(totalNum);
                checkWinOrLoss();
            });

            $("#green").click(function () {
                totalNum += greenCrystRanNum;
                // console.log(greenCrystRanNum);
                $("#yourTotalNum").text(totalNum);
                checkWinOrLoss();
            });

        }); // end of doc ready function