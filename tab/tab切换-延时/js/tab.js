function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=function(){
	//标签的索引
	var index=0;
	var timer=null;
	var lis=$('notice-tit').getElementsByTagName('li'),
		divs=$('notice-con').getElementsByTagName('div');
	if(lis.length!=divs.length)
		return;
	//遍历titles下的所有li
	for (var i = 0; i <lis.length; i++) {
		lis[i].id=i;
		lis[i].onmouseover=function(){
			var that=this;
			//如果存在准备执行的定时器，立即清除，只有当前停留时间大于500ms时才开始执行
			if (timer) {
				clearTimeout(timer);
				timer=null;
			}
			timer=window.setTimeout(function(){
				for (var j = 0; j < lis.length; j++) {
					lis[j].className='';
					divs[j].style.display='none';
				}
				//设置当前tab为高亮
				lis[that.id].className='select';
				divs[that.id].style.display='block';

			},500);
		}
	}
}
		