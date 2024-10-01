//  Initializes an empty array that stores the list of activities
let list = []
//  Get all the activities
function getList(params) {

    //The URL of the request is constructed, and the initial URL contains the basic query parameters
    var url = `http://localhost:3000/api/search?a=1`
    //Add the query parameters based on the CITY parameter that is passed in
    if (params.CITY) {
        url += `&CITY=${params.CITY}`;
    }
    if (params.ORGANIZER) {
        url += `&ORGANIZER=${params.ORGANIZER}`;
    }
    if (params.CATEGORY_ID) {
        url += `&CATEGORY_ID=${params.CATEGORY_ID}`;
    }
    //Send a GET request to get activity data
    fetch(url, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            return response.json(); //Convert responses to JSON format
        })
        .then(data => {
            console.log(data);
            list = data;
            showList(list)
        })

}

//Select all elements that have a 'nav-item' class
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

//   Go to the details page
function toDetail(id) {
    localStorage.setItem('id', id)
}

//  搜索按钮
function search() {
    // Get the value of the input field with class 'CITY'
    var CITY = document.querySelector('.CITY').value;
    var ORGANIZER = document.querySelector('.ORGANIZER').value;
    var CATEGORY_ID = document.querySelector('.CATEGORY_ID').value;

    // Create an object 'params' to hold the search parameters
    let params = {
        ORGANIZER: ORGANIZER,
        CITY: CITY,
        CATEGORY_ID: CATEGORY_ID
    }
    // Check if all search parameters are empty
    if (!ORGANIZER && !CITY && !CATEGORY_ID) {
        // If all parameters are empty, show an alert message
        return alert('Enter at least one condition')
    }
    // Call the function 'getList' with the search parameters
    getList(params)
}

//  清楚下拉框数据
function clearChechboxes() {
    //Clear the value of the input field with the class name 'CATEGORY_ID'
    document.querySelector('.CATEGORY_ID').value = '';
    document.querySelector('.CITY').value = '';
    document.querySelector('.ORGANIZER').value = '';
}

function showList() {
    let html = ''; //Initialize an empty string to store HTML content
    //If the list is empty, a prompt message is displayed
    if (list.length == 0) {
        let list = document.querySelector('.list')
        list.innerHTML = ` <div class="tips red">No relevant information found</div>`
        return
    }
    //Iterate through each item in the list
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
                    <div class="left-item"><div>Organiser：</div><a onclick='toDetail(${list[i].FUNDRAISER_ID})' href='./Fundraiser.html' class="line">${list[i].ORGANIZER}</a></div> 
                    <div class="left-item"><div>Status：</div><div class="line">${list[i].STATUS}</div></div>
                    <div class="left-item"><div>Target funding：</div><div class="line">${list[i].TARGET_FUNDING}</div></div>
                    <div class="left-item"><div>Current funding：</div><div class="line">${list[i].CURRENT_FUNDING}</div></div>
                    <div class="left-item"><div>City：</div><div class="line">${list[i].CITY}</div></div>
                    <div class="left-item"><div>Category：</div><div class="line">${list[i].NAME}</div></div>
            </div>

                 </div>`

        html += temp
    }
    let ele = document.querySelector('.list')
    ele.innerHTML = html
}



//   Jump to the Home
function toIndex() {
    window.location.href = 'Home.html'
}
//   Jump to the search page
function toSearch() {
    window.location.href = 'Searchfundraisers.html'
}



