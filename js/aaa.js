window.addEventListener('scroll', function() {
    var fadeText = document.getElementById('fadeText');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var fadeStart = 0; // 开始渐隐的位置
    var fadeEnd = windowHeight / 2.5; // 完全消失的位置

    if (scrollPosition <= fadeStart) {
        fadeText.style.opacity = 1;
    } else if (scrollPosition >= fadeEnd) {
        fadeText.style.opacity = 0;
    } else {
        var opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
        fadeText.style.opacity = opacity;
    }
});
 
 //  活动数据
 let list = []
 //  获取所有活动
 function getActiveList(){
     $.get('http://localhost:3000/api/all', function(data, status) {
          console.log(data);
          list = data;
          showList()
     });

 }


 getActiveList()
 //  展示活动列表
function showList(){
 let html = '';

 for(let i=0;i<list.length;i++){
     let temp =`<div class="active-info" id='active${i+1}'>
           <div class="right">
             <img class="active-img"
             src="http://gips2.baidu.com/it/u=195724436,3554684702&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960"
             alt="">
         </div>
         <div class="left">
             <div class="left-item"><div>ID：</div><div class="line">${list[i].CATEGORY_ID}</div></div>
             <div class="left-item"><div>组织者：</div><div class="line">${list[i].ORGANIZER}</div></div>
             <div class="left-item"><div>标题：</div><div class="line">${list[i].TITLE}</div></div>
             
             <div class="left-item"><div>目标资金：</div><div class="line">${list[i].TARGET_FUNDING}</div></div>
             <div class="left-item"><div>当前资金：</div><div class="line">${list[i].CURRENT_FUNDING}</div></div>
             <div class="left-item"><div>城市：</div><div class="line">${list[i].CITY}</div></div>
             <div class="left-item"><div>类型：</div><div class="line">${list[i].NAME}</div></div>
         </div>
       
     </div>`
     html += temp
 }
 $(".list").html(html)
}
//   跳转到搜索页面
function toSearch(){
 window.location.href = 'Search fundraisers.html'
}