document.getElementById("menu-icon").addEventListener('click', function(event) {
    document.getElementById("menu").classList.toggle("menu-sm");
    this.classList.toggle("fa-times");
});





/* Upload Profile */

function showUploadOption() {
    document.getElementById('file-input').click();
}

function uploadProfilePhoto() {
    const fileInput = document.getElementById('file-input');
    const profileIcon = document.getElementById('profile-icon');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            profileIcon.src = e.target.result;
        }

        reader.readAsDataURL(fileInput.files[0]);
    }
}




function showForm() {
    document.getElementById('formContainer').style.display = 'block';
}

function closeForm() {
    document.getElementById('formContainer').style.display = 'none';
}


function formatDate(date) {
    // Define month names and day suffixes
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

    // Extract components
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    // Format time
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24-hour time to 12-hour time

    // Format the final string
    const formattedDate = `${month} ${day}${nth(day)}, ${year} &#x2022; <span>${hours}:${minutes} ${ampm}</span>`;
    return formattedDate;
}

function updateCurrentDate() {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    document.getElementById('notice_date').innerHTML = formattedDate;
}


function addForm() {
    let notice_form_heading = document.getElementById("notice_form_heading");
    let notice_form_description = document.getElementById("notice_form_description");
    const timestamp = new Date().toLocaleString();
    

    let notice_heading = document.getElementById("notice-heading");
    let notice_description = document.getElementById("notice-description");
    let notice_date = document.getElementById("notice-date");
    const formattedDate = formatDate(new Date(timestamp));

    notice_heading.textContent = notice_form_heading.value;
    notice_description.textContent = notice_form_description.value;
    document.getElementById('notice_date').innerHTML = formattedDate;

    notice_form_heading.value = "";
    notice_form_description.value = "";
    notice_date.textContent = "Teja";
    document.getElementById('notice_add_btn').addEventListener('click', updateCurrentDate);

}


document.getElementById('notice_add_btn').addEventListener('click', updateCurrentDate);


/* create Project */
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