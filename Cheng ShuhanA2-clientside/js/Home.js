//Add a scrolling fade-out effect to the welcome message
window.addEventListener('scroll', function () {
    //Get the element with the ID 'welcome'
    const welcomeMessage = document.getElementById('welcome');
    const welcomeSection = document.querySelector('.welcome-section');
    //If the page scrolls more than 100 pixels, add the 'fade-out' class to the 'welcomeMessage' element
    if (window.scrollY > 100) {
        welcomeMessage.classList.add('fade-out');
    } else {
        welcomeMessage.classList.remove('fade-out');
    }
    //If the page scrolls more than 150 pixels, add the 'fade-out' class to the 'welcomeSection' element
    if (window.scrollY > 150) {
        welcomeSection.classList.add('fade-out');
    } else {
        welcomeSection.classList.remove('fade-out');
    }
});

//Highlight the currently selected navigation item
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

//  Initializes an empty array that stores the list of activities
let list = []
//  Get all the activities
function getActiveList() {

    //Use the fetch API to get data from the specified URL
    fetch('http://localhost:3000/api/all', {
        headers: {
            'Content-Type': 'application/json' //Specify the content type as JSON
        },
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            list = data;
            renderList()
        })

}

getActiveList()
function renderList() {
    let html = ''; //Initialize an empty string to store HTML content

    //Traverse each item in the list array
    for (let i = 0; i < list.length; i++) {
        let temp = `<div class="active-info" id='active${i + 1}'>
    <div class="right">
        <img class="active-img"
        src="${list[i].PICTURES}"
        alt="">
    </div>
    
         <div class="left">
         <div class="left-item"><div>Caption：</div><div class="line">${list[i].TITLE}</div></div>
             <div class="left-item"><div>ID：</div><div class="line">${list[i].CATEGORY_ID}</div></div>
             <div class="left-item"><div>Organiser：</div><div class="line">${list[i].ORGANIZER}</div></div>
             <div class="left-item"><div>Status：</div><div class="line">${list[i].STATUS}</div></div>
             <div class="left-item"><div>Target funding：</div><div class="line">${list[i].TARGET_FUNDING}</div></div>
             <div class="left-item"><div>Current funding：</div><div class="line">${list[i].CURRENT_FUNDING}</div></div>
             <div class="left-item"><div>City：</div><div class="line">${list[i].CITY}</div></div>
             <div class="left-item"><div>Category：</div><div class="line">${list[i].NAME}</div></div>
         </div>
         
     </div>`
        html += temp
    }
    //Select the element with the class name 'arr' and set its innerHTML to the generated HTML content
    var ele = document.querySelector('.arr')
    ele.innerHTML = (html)
}
//   Jump to the search page
function toSearch() {
    window.location.href = 'Searchfundraisers.html'
}