
//  活动数据
let list = []
//  获取所有活动
function getList(params) {



var url = `http://localhost:3000/api/search?a=1`
    if(params.CITY){
        url += `&CITY=${params.CITY}`
    }
    if(params.CIORGANIZERTY){
        url += `&CIORGANIZERTY=${params.ORGANIZER}`
    }
    if(params.CATEGORY_ID){
        url += `&CATEGORY_ID=${params.CATEGORY_ID}`
    }
    fetch(url, {
        method: 'GET', // 默认值就是 GET，所以其实可以省略
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
//这是新加的代码
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

function search() {
    const city = document.getElementById('city').value;
    const organizer = document.getElementById('organizer').value;
    const category = document.getElementById('category').value;

    // Simulate a database query result
    const database = [
        { city: 'New York', organizer: 'John Doe', category: '1' },
        { city: 'Los Angeles', organizer: 'Jane Smith', category: '2' }
    ];

    const hasMatchingFundraisers = database.some(fundraiser =>
        fundraiser.city === city &&
        fundraiser.organizer === organizer &&
        fundraiser.category === category
    );

    const errorMessage = document.getElementById('error-message');
    if (!hasMatchingFundraisers) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
}

function clearCheckboxes() {
    document.getElementById('city').value = '';
    document.getElementById('organizer').value = '';
    document.getElementById('category').value = '';
    document.getElementById('error-message').style.display = 'none';
}//直到这儿

//   跳转到详情页面
function toDetail(id) {
    localStorage.setItem('id', id)
}
//  搜索按钮
function search() {
    var CITY = document.querySelector('.CITY').value;
    var ORGANIZER = document.querySelector('.ORGANIZER').value;
    var CATEGORY_ID =document.querySelector('.CATEGORY_ID').value;
  
    let params = {
        ORGANIZER: ORGANIZER,
        CITY: CITY,
        CATEGORY_ID: CATEGORY_ID
    }
    if (!ORGANIZER && !CITY && !CATEGORY_ID) {
        return alert('至少输入一个条件')
    }
    getList(params)

}
//  清楚下拉框数据
function clearChechboxes() {
    document.querySelector('.CATEGORY_ID').value = '';
    document.querySelector('.CITY').value = '';
    document.querySelector('.ORGANIZER').value = '';
//  展示活动列表
}
function showList() {
    let html = '';

    for (let i = 0; i < list.length; i++) {
        let temp = `<div class="active-info" id='active${i + 1}'>
                  <div class="right">
                    <img class="active-img"
                    src="http://gips2.baidu.com/it/u=195724436,3554684702&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960"
                    alt="">
                </div>
                <div class="left">
                    <div class="left-item"><div>ID：</div><div class="line">${list[i].CATEGORY_ID}</div></div>
                    <div class="left-item"><div>组织者：</div><a onclick='toDetail(${list[i].CATEGORY_ID})' href='./Fundraiser.html' class="line">${list[i].ORGANIZER}</a></div>
                    <div class="left-item"><div>标题：</div><div class="line">${list[i].TITLE}</div></div>
                    
                    <div class="left-item"><div>目标资金：</div><div class="line">${list[i].TARGET_FUNDING}</div></div>
                    <div class="left-item"><div>当前资金：</div><div class="line">${list[i].CURRENT_FUNDING}</div></div>
                    <div class="left-item"><div>城市：</div><div class="line">${list[i].CITY}</div></div>
                    <div class="left-item"><div>类型：</div><div class="line">${list[i].NAME}</div></div>
                </div>
              
            </div>`
        html += temp
    }
    let ele = document.querySelector('.list')
    ele.innerHTML = html
}



//   跳转到首页
function toIndex() {
    window.location.href = 'Home.html'
}
//   跳转到搜索页面
function toSearch() {
    window.location.href = 'Search fundraisers.html'
}



