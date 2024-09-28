
                //  活动数据
                let list = []
        //  获取所有活动
        function getList(params){
            $.get('http://localhost:3000/api/search',params, function(data, status) {
                 console.log(data);
                 list = data;
                 showList()
            });

        }
       
        //   跳转到详情页面
        function toDetail(id) {
           localStorage.setItem('id',id)
        }
        //  搜索按钮
        function search() {
            var CITY = $(".CITY").val();
            var ORGANIZER = $(".ORGANIZER").val();
            var CATEGORY_ID = $(".CATEGORY_ID").val();
            if (!ORGANIZER && !CITY && !CATEGORY_ID) {
                return    alert('至少输入一个条件')
            }
            let params = {
                ORGANIZER:ORGANIZER,
                CITY:CITY,
                CATEGORY_ID:CATEGORY_ID
            }
            getList(params)

        }
        //  清楚下拉框数据
        function clearChechboxes() {
            $(".CITY").val('')
            $(".ORGANIZER").val('')
            $(".CATEGORY_ID").val('')
        }     
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
        $(".list").html(html)
       }
        //   跳转到首页
        function toIndex() {
            window.location.href = 'Home.html'
        }
        //   跳转到搜索页面
        function toSearch() {
            window.location.href = 'Search fundraisers.html'
        }



