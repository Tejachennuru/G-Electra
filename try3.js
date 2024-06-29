// Toggle menu
document.getElementById("menu-icon").addEventListener('click', function(event) {
    document.getElementById("menu").classList.toggle("menu-sm");
    this.classList.toggle("fa-times");
});

// Show and hide form
function showForm() {
    document.getElementById('formContainer').style.display = 'block';
}

function closeForm() {
    document.getElementById('formContainer').style.display = 'none';
}

// Format date
function formatDate(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const nth = function(d) {
        if (d > 3 && d < 21) return 'th'; // Exceptions for 11th, 12th, 13th
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24-hour time to 12-hour time

    return `${month} ${day}${nth(day)}, ${year} &#x2022; <span>${hours}:${minutes} ${ampm}</span>`;
}

// Update current date
function updateCurrentDate() {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    document.getElementById('notice_date').innerHTML = formattedDate;
}

// Add form content
function addForm() {
    const notice_form_heading = document.getElementById("notice_form_heading").value;
    const notice_form_description = document.getElementById("notice_form_description").value;
    const formattedDate = formatDate(new Date());

    document.getElementById("notice-heading").textContent = notice_form_heading;
    document.getElementById("notice-description").textContent = notice_form_description;
    document.getElementById('notice_date').innerHTML = formattedDate;

    document.getElementById("notice_form_heading").value = "";
    document.getElementById("notice_form_description").value = "";
}

document.getElementById('notice_add_btn').addEventListener('click', updateCurrentDate);

// Slide-in card
document.querySelector('.createProjectButton').addEventListener('click', function() {
    const card = document.querySelector('.card');
    card.style.display = 'block';  // Ensure the card is visible
    setTimeout(() => {
        card.classList.add('show');  // Trigger the slide-in effect
    }, 10);  // Small delay to ensure the transition works
});

document.getElementById('closeCardBtn').addEventListener('click', function() {
    const card = document.querySelector('.card');
    card.classList.remove('show');  // Trigger the slide-out effect
    setTimeout(() => {
        card.style.display = 'none';  // Hide the card after the slide-out effect
    }, 500);  // Match the transition duration
});

document.getElementById('createTeamBtn').addEventListener('click', function() {
    document.getElementById('createProjectForm').style.display = 'block';
    document.getElementById('joinProjectForm').style.display = 'none';
    document.getElementById('teamCodeDisplay').style.display = 'none';
});

document.getElementById('joinProjectBtn').addEventListener('click', function() {
    document.getElementById('joinProjectForm').style.display = 'block';
    document.getElementById('createProjectForm').style.display = 'none';
    document.getElementById('teamCodeDisplay').style.display = 'none';
});

document.getElementById('createBtn').addEventListener('click', function() {
    const teamCode = 'TEAM' + Math.floor(Math.random() * 10000);
    document.getElementById('generatedCode').innerText = teamCode;
    document.getElementById('teamCodeDisplay').style.display = 'block';
    document.getElementById('createProjectForm').style.display = 'none';
});

document.getElementById('closeCreateFormBtn').addEventListener('click', function() {
    document.getElementById('createProjectForm').style.display = 'none';
});

document.getElementById('closeJoinFormBtn').addEventListener('click', function() {
    document.getElementById('joinProjectForm').style.display = 'none';
});

document.getElementById('closeCodeDisplayBtn').addEventListener('click', function() {
    document.getElementById('teamCodeDisplay').style.display = 'none';
});
