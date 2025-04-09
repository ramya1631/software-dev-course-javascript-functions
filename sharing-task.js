/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.


const readline = require('readline-sync');

function generateBadge(name, role) {
    if (!name || !role) return "Invalid input";
    let newRole = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
    return `Name: ${name}, Role: ${newRole}`;
}

console.log(generateBadge(readline.question("What is your name? "), readline.question("What is your role? ")));





// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.

function eventCost(attendees, cost) {
    let totalCost = attendees * cost;
	if (attendees > 100) {
		totalCost *= 0.9;
	}
	return totalCost;
}
console.log(eventCost(120, 25)); // Output: 2700
console.log(eventCost(100, 25)); // Output: 2500

// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.



function validateEmail(email) {
    if (!email) {
        email = readline.question("What is your email? ");
    }

    while (!(email.includes("@") && email.includes("."))) {
        email = readline.question("Please enter a valid email address: ");
    }

    return email; //  Return the valid email
}

//  Call the function and store the returned email
let userEmail = validateEmail();

console.log("Thanks! Your email is: " + userEmail);







// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

console.log(generateBadge(readline.question("What is your name? "), readline.question("What is your role? "))); // Happy Path
console.log(generateBadge(readline.question("What is your name? "), null)); // supplying null input
console.log(generateBadge(readline.question("What is your name? "), " ")); // supplying empty space
console.log(generateBadge(readline.question("What is your name? "), "%")); // supplying special char


// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?


