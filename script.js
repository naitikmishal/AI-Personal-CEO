function generatePlan() {

let goal = document.getElementById("goal").value;
let output = document.getElementById("output");

if(goal === ""){
    output.innerHTML = "Please enter a goal.";
    return;
}

output.innerHTML = `
<h3>Goal</h3>
<p>${goal}</p>

<h3>Today's Action Plan</h3>
<ul>
<li>Work on your goal for 1 hour.</li>
<li>Complete one important task.</li>
<li>Track your progress.</li>
<li>Review and improve.</li>
</ul>

<h3>AI Recommendation</h3>
<p>Stay consistent and focus on the highest priority task.</p>
`;

}