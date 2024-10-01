// Retrieve the 'id' from local storage
let id = localStorage.getItem('id')
console.log(id)
// Initialize an empty array to store activity data
let list = []

function getList(params) {

    //Send a request to get a list of activities
    fetch('http://localhost:3000/api/id?FUNDRAISER_ID=' + params.FUNDRAISER_ID, {
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            list = data;
            showList(list)
        })

}
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

//Call the getList function and pass in the arguments
getList({ FUNDRAISER_ID: id })
function showList() {
    let html = '';

    //Iterate through the list array to generate HTML content
    for (let i = 0; i < list.length; i++) {

        html = `
        
                <div class="detail">
                <div class="detail-title">${list[i].DETAIL_NAME}</div>
                    <div class='left'>
  
                        <div class='infor'>
                        <div>Caption：<span class="show">${list[i].TITLE}</span></div>
                        <div>ID：<span class="show">${list[i].CATEGORY_ID}</span></div>
                        <div>Organiser：<span class="show">${list[i].ORGANIZER}</span></div>
                        <div>Status：<span class="show">${list[i].STATUS}</span></div>
                        <div>Target funding：<span class="show">${list[i].TARGET_FUNDING}</span></div>
                        <div>Current funding：<span class="show">${list[i].CURRENT_FUNDING}</span></div>
                        <div>City：<span class="show">${list[i].CITY}</span></div>
                        <div>Category：<span class="show">${list[i].NAME}</span></div>
                        </div>
                    </div>
                </div>`;
    }
    debugger
    //Updated images and details
    document.querySelector('.img2').src = list[0].PICTURES
    document.querySelector('.content').innerHTML = list[0].detailed

    //Insert the resulting HTML content into the page
    var ele = document.querySelector('.show-area')
    ele.innerHTML = (html)
}

//Prompts the user that the feature is under construction
function donate() {
    alert('This feature is under contruction')
}

//Return to the Search Fundraiser page
function back() {
    location.href = 'Searchfundraisers.html'
}

//Jump to the search for fundraiser page
function toSearch() {
    window.location.href = 'Searchfundraisers.html'
}

//Jump to the home page
function toIndex() {
    window.location.href = 'Home.html'
}
