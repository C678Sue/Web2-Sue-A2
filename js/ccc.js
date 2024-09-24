
let id = localStorage.getItem('id')
console.log(id)
//  活动数据
let list = []
//  获取所有活动
function getList(params) {
    $.get('http://localhost:3000/api/id', params, function (data, status) {
        console.log(data);
        list = data;
        showList()
    });

}
getList({ FUNDRAISER_ID: id })
function showList() {
    let html = '';
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

    $(".show-area").html(html)
}

// 捐赠
function juanzeng() {
    alert('功能正在开发中')
}
// 捐赠
function back() {
    location.href = 'Search fundraisers.html'
}

