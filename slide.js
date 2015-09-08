(function($){
	$.fn.slideImg = function(options) {
		//默认参数
		var defaults = {
			imgWidth: 200,					//图片宽度
			imgHeight: 200,					//图片高度
			idTop: 180,						//序号离顶部距离
			idleft: 50,						//序号离左边距离
			idWidth: 30,					//序号宽度
			imgCount: 4,					//图片数量
			changeSpeed: 100,				//切换速度
			autoChangeTime: 4000,			//自动切换间隔时间
			hoverTime: 500					//鼠标悬停XX毫秒后切换
		};

		var options = $.extend(defaults, options);

		var id = options.imgCount - 1;
		var obj = this;

		//设置CSS属性
		//图片框属性设置
		$(obj).css({
			width: options.imgWidth,
			height: options.imgHeight
		});
		//图片属性设置
		$(obj).find('#slide-img img').css({
			width: options.imgWidth,
			height: options.imgHeight,
			transition: 'transform '+options.autoChangeTime/1000+'s ease-in-out'
		});
		//序号属性设置
		$(obj).find('#slide-id').css({
			top: options.idTop,
			left: options.idleft
		});


		//图片切换
		var changeImg = function(o) {
			//移除前一张选中属性
			$(o).find('#slide-id li').eq(id).removeClass('check');
			//前一张后置
			$(o).find('#slide-img img').eq(id).animate({
				zIndex: 0,
				opacity: 0},
				options.changespeed
				);
			//放大图片
			$(o).find('#slide-img img').eq(id).css({
				transform: 'scale(1.1)'
			});

			//切换至后一张
			id ++;
			if( id === options.imgCount ) {
				id = 0;
			}

			//添加选中属性
			$(o).find('#slide-id li').eq(id).addClass('check');
			//前置图片
			$(o).find('#slide-img img').eq(id).animate({
				zIndex: 1,
				opacity: 1},
				options.changespeed
				);
			//缩小图片
			$(o).find('#slide-img img').eq(id).css({
				transform: 'scale(1)'
			});
		}

		//鼠标悬停暂停自动切换
		$(obj).hover(function() {
			clearInterval(sic);
		}, function() {
			sic = setInterval(function(){changeImg(obj);},options.autoChangeTime);
		});

		//鼠标悬停序号时切换图片
		var stc;
		$(obj).find('#slide-id li').hover(function() {
			var that = this;
			stc = setTimeout(function() {
				if( id !== $(that).index() ) {
					$(obj).find('#slide-id li').eq(id).removeClass('check');
					$(obj).find('#slide-img img').eq(id).animate({
						zIndex: 0,
						opacity: 0},
						options.changespeed
						);
					$(obj).find('#slide-img img').eq(id).css({
						transform: 'scale(1.1)'
					});
				}

				id = $(that).index();

				$(obj).find('#slide-id li').eq(id).addClass('check');

				$(obj).find('#slide-img img').eq(id).animate({
					zIndex: 1,
					opacity: 1},
					options.changespeed
					);
				$(obj).find('#slide-img img').eq(id).css({
						transform: 'scale(1)'
					});
			}, options.hoverTime);
		}, function() {
			if( !stc ) {
				return ;
			}
			clearTimeout(stc);
		});

		//自动切换图片
		changeImg(obj);
		var sic = setInterval(function(){changeImg(obj);},options.autoChangeTime);

	};
})(jQuery);
