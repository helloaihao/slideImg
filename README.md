#仿天猫图片轮播
##使用说明
- 下载 slide.css slide.js 文件并引入 html 代码中
- html代码结构
```
    <div id="slide">
        <!-- 幻灯图片 -->
            <div id="slide-img">
                <a href="#"><img src="images/1.jpg"></a>
                ...
            </div>
        <!-- 图片编号 -->
            <ul id="slide-id">
                <li class><a href="javascript:void(0);">1</a></li>
                ...
            </ul>
    </div>
    ...
    <script type="text/javascript">
        <!-- 默认参数 -->
        $('#slide').slideImg();
        <!-- 自选参数 -->
        $('#slide').slideImg({
            imgWidth: 400,
            imgHeight: 200
        });
    </script>
```
- 插件参数：
```
    imgWidth: 200,                  //图片宽度
    imgHeight: 200,                 //图片高度
    idTop: 180,                     //序号离顶部距离
    idleft: 50,                     //序号离左边距离
    idWidth: 30,                    //序号宽度
    imgCount: 4,                    //图片数量
    changeSpeed: 100,               //切换速度
    autoChangeTime: 4000,           //自动切换间隔时间
    hoverTime: 500                  //鼠标悬停XX毫秒后切换
```

##注意事项
inline-block 造成的空白问题

opacity 影响 z-index 问题