// test script linkage
console.log("Hello, anonymous! Welcome to the world of JavaScript."); 

// update the year in the footer
document.getElementById("year").innerHTML = new Date().getFullYear();

// Vars to show MADS option
const yesMads = document.getElementById("yesmads");
const noMads = document.getElementById("nomads");
const thirdOption = document.getElementById("madscheckbox");

//funtion to show MADS option
function updateMadsOption() {
    if (yesMads.checked) {
        thirdOption.style.display = "block";
    } 
    else {
        thirdOption.style.display = "none";
        thirdOption.selected = false; // deselect if hiding
    }
}

//make sure vars work
console.log(yesMads);
console.log(noMads);

  // Attach listeners
yesMads.addEventListener("change", updateMadsOption);
noMads.addEventListener("change", updateMadsOption);

  // Initialize on page load
window.addEventListener("DOMContentLoaded", updateMadsOption);


// Vars for showing course list(s) ids for lists are 
const subjectCheckboxes = [
    { id: "programming", coursesId: "programmingcourses" },
    { id: "math", coursesId: "mathcourses" },
    { id: "mads", coursesId: "madscourses" }
];

// Function to update course list(s) visibility
function updateCourseVisibility() {
    subjectCheckboxes.forEach(({ id, coursesId }) => {
        const checkbox = document.getElementById(id);
        const courseDiv = document.getElementById(coursesId);

        if (checkbox.checked) {
            courseDiv.style.display = "block";
        } else {
            courseDiv.style.display = "none";
        }
    });
}

  // Attach event listeners to each checkbox
subjectCheckboxes.forEach(({ id }) => {
    document.getElementById(id).addEventListener("change", updateCourseVisibility);
});

  // Run once on page load in case of pre-filled form
window.addEventListener("DOMContentLoaded", updateCourseVisibility);



//Vars for updating the message box
const messageBox = document.getElementById("message");
const selects = [
    document.getElementById("programmingselected"),
    document.getElementById("mathselected"),
    document.getElementById("madsselected")
];

// Function to update the message box
function updateMessage() {
    let selectedCourses = [];

    selects.forEach(select => {
        Array.from(select.selectedOptions).forEach(option => {
            selectedCourses.push(option.value);
        });
    });

    if (selectedCourses.length > 0) {
        messageBox.value = `Hello! I'm looking for help with: ${selectedCourses.join(", ")}. Can you please reach out with more information?`;
    } else {
        messageBox.value = "";
    }
}

// Attach change listeners
selects.forEach(select => {
    select.addEventListener("change", updateMessage);
});