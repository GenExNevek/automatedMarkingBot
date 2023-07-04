// Global variables
var assignmentID;
var userID;

// Get assignment ID and user ID from the URL
function getIDsFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    assignmentID = urlParams.get('assignment_id');
    userID = urlParams.get('user_id');
}

// Fetch assignment details from the server
function getAssignmentDetails() {
    fetch('/get_assignment_details/' + assignmentID)
        .then(response => response.json())
        .then(data => {
            populatePageWithAssignmentDetails(data);
        });
}

// Fetch student's current saved responses from the server
function getStudentSubmissions() {
    fetch('/get_student_submissions/' + userID + '/' + assignmentID)
        .then(response => response.json())
        .then(data => {
            populatePageWithStudentSubmissions(data);
        });
}

// Populate the page with the fetched assignment details
function populatePageWithAssignmentDetails(data) {
    // Populate the page with the assignment details
    // This will depend on your HTML structure
    // ...
}

// Populate the page with the fetched student submissions
function populatePageWithStudentSubmissions(data) {
    // Populate the page with the student's current saved responses
    // This will depend on your HTML structure
    // ...
}

// Save the student's responses
function saveSubmissions() {
    // Gather the student's responses from the page
    // This will depend on your HTML structure
    var submissions = [];
    // ...

    // Send the submissions to the server
    fetch('/save_student_submissions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'UserID': userID,
            'AssignmentID': assignmentID,
            'Submissions': submissions,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    });
}

// Call the above functions when the page loads
window.onload = function() {
    getIDsFromURL();
    getAssignmentDetails();
    getStudentSubmissions();
}

// Call the saveSubmissions function when the "Save" button is clicked
document.getElementById('saveButton').addEventListener('click', saveSubmissions);
