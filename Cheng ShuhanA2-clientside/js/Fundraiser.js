
let id = localStorage.getItem('id')
console.log(id)
//  活动数据
let list = []
//  获取所有活动
function getList(params) {


    fetch('http://localhost:3000/api/id?FUNDRAISER_ID='+params.FUNDRAISER_ID, {
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
                    <div class='left'>
                              <div>活动ID：<span class="show">${list[i].CATEGORY_ID}</span></div>
                    <div>活动组织者：<span class="show">${list[i].ORGANIZER}</span></div>
                    <div>活动标题：<span class="show">${list[i].TITLE}</span></div>
                    <div>活动目标资金：<span class="show">${list[i].TARGET_FUNDING}</span></div>
                    <div>活动当前资金：<span class="show">${list[i].CURRENT_FUNDING}</span></div>
                    <div>活动城市：<span class="show">${list[i].CITY}</span></div>
                    <div>活动类型：<span class="show">${list[i].NAME}</span></div>
             
                        </div>

                  </div>`;
    }

    var ele = document.querySelector('.show-area')
    ele.innerHTML = (html)
}

// 捐赠
function juanzeng() {
    alert('This feature is under contruction')
}
// 捐赠
function back() {
    location.href = 'Search fundraisers.html'
}
function toSearch() {
    window.location.href = 'Search fundraisers.html'
}
function toIndex() {
    window.location.href = 'Home.html'
}
