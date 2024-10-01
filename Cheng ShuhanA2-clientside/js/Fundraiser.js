
let id = localStorage.getItem('id')
console.log(id)
//  活动数据
let list = []
//  获取所有活动
function getList(params) {


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


getList({ FUNDRAISER_ID: id })
function showList() {
    let html = '';

    /*for (let i = 0; i < list.length; i++) {
        let temp = `<div class="active-info" id='active${i + 1}'>
    <div class="right">
        <img class="active-img"
        src="./images/${i+1}.jpg"
        alt="">
    </div>
*/
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
    document.querySelector('.img2').src = list[0].PICTURES
    document.querySelector('.content').innerHTML = list[0].detailed

    var ele = document.querySelector('.show-area')
    ele.innerHTML = (html)
}

// 捐赠
function donate() {
    alert('This feature is under contruction')
}
// 捐赠
function back() {
    location.href = 'Searchfundraisers.html'
}
function toSearch() {
    window.location.href = 'Searchfundraisers.html'
}
function toIndex() {
    window.location.href = 'Home.html'
}
