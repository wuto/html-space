function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}





window.onload=function(){
	//当前高亮的把标签的索引
	var index=0;
	var timer=null;
	
	var lis=$('notice-tit').getElementsByTagName('li'),
		divs=$('notice-con').getElementsByTagName('div');
	//遍历绑定事件
	for (var i = 0; i < lis.length; i++) {
		lis[i].id=i;
		lis[i].onmouseover=function(){
			clearInterval(timer);
			changeOption(this.id);
		}
		lis[i].onmouseout=function(){
			timer=window.setInterval(autoPlay,2000);
		}

	}


	if (timer) {
		clearInterval(timer);
		timer=null;
	}

	timer=window.setInterval(autoPlay,2000);

	function autoPlay(){
		index++;
		if (index>=lis.length) {
			index=0;
		}
		changeOption(index);

	}



	function changeOption(curIndex){
		for (var j = 0; j < lis.length; j++) {
			lis[j].className='';
			divs[j].style.display='none';
		}

		lis[curIndex].className='select';
		divs[curIndex].style.display='block';
		index=curIndex;
	}

}
		