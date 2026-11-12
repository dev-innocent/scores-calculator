 // Select all student rows
        let rows = document.querySelectorAll("tbody tr");

        // Loop through each row
        rows.forEach(function(row) {

            // Select all input fields in the row
            let inputs = row.querySelectorAll(".score");

            // Listen for input changes
            inputs.forEach(function(input) {

                input.addEventListener("input", function() {

                    // Get the values of the inputs
                    let ca1 = Number(inputs[0].value);
                    let ca2 = Number(inputs[1].value);
                    let ca3 = Number(inputs[2].value);
                    let exam = Number(inputs[3].value);

                    // Calculate total
                    let total = ca1 + ca2 + ca3 + exam;

                    // Calculate grade
                    let grade;

                    if (inputs[0].value === "" ||
                        inputs[1].value === "" ||
                        inputs[2].value === "" ||
                        inputs[3].value === "") {

                        grade = "-";

                    } else if (total >= 70) {
                        grade = "A";

                    } else if (total >= 60) {
                        grade = "B";

                    } else if (total >= 50) {
                        grade = "C";

                    } else if (total >= 45) {
                        grade = "D";

                    } else if (total >= 40) {
                        grade = "E";

                    } else {
                        grade = "F";
                    }

                    // Display total and grade
                    row.querySelector(".total").textContent = total;
                    row.querySelector(".grade").textContent = grade;

                });

            });

        });