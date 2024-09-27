window.addEventListener('scroll', function() {
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
                navItems.forEach(nav => nav.classList.remove('.nav-item.active'));
                item.classList.add('.nav-item.active');
            });
        });

        // 保持Home按钮在页面加载时为active状态
        document.getElementById('home').classList.add('.nav-item.active');
        document.getElementById('search').classList.add('.nav-item.active');
 
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