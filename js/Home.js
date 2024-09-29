//这是新加的代码！！！
window.addEventListener('scroll', function () {
    const welcomeMessage = document.getElementById('welcome');
    const welcomeSection = document.querySelector('.welcome-section');
    if (window.scrollY > 100) {
        welcomeMessage.classList.add('fade-out');
    } else {
        welcomeMessage.classList.remove('fade-out');
    }
    if (window.scrollY > 150) {
        welcomeSection.classList.add('fade-out');
    } else {
        welcomeSection.classList.remove('fade-out');
    }
});

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});//直到这儿


//  活动数据
let list = []
//  获取所有活动
function getActiveList() {
    $.get('http://localhost:3000/api/all', function (data, status) {
        console.log(data);
        list = data;
        showList()
    });

}


getActiveList()
//  展示活动列表
function showList() {
    let html = '';

    for (let i = 0; i < list.length; i++) {
        let temp = `<div class="active-info" id='active${i + 1}'>
    <div class="right">
        <img class="active-img"
        src="./images/${i+1}.jpg"
        alt="">
    </div>

         <div class="left">
         <div class="left-item"><div>Caption：</div><div class="line">${list[i].TITLE}</div></div>
             <div class="left-item"><div>ID：</div><div class="line">${list[i].CATEGORY_ID}</div></div>
             <div class="left-item"><div>Organiser：</div><div class="line">${list[i].ORGANIZER}</div></div>
             <div class="left-item"><div>Target funding：</div><div class="line">${list[i].TARGET_FUNDING}</div></div>
             <div class="left-item"><div>Current funding：</div><div class="line">${list[i].CURRENT_FUNDING}</div></div>
             <div class="left-item"><div>City：</div><div class="line">${list[i].CITY}</div></div>
             <div class="left-item"><div>Category：</div><div class="line">${list[i].NAME}</div></div>
         </div>
         
     </div>`
        html += temp
    }
    $(".list").html(html)
}
//   跳转到搜索页面
function toSearch() {
    window.location.href = 'Search fundraisers.html'
}