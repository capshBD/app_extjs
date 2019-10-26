Ext.onReady(function(){
	Ext.get('a1').applyStyles({
		position:'absolute',//绝对位置
		top:200,
		left:200,
		backgroundColor:'red',
		width:100,
		height:100
	}).slideIn('r',{duration:10});
	
		Ext.get('a2').applyStyles({
		position:'absolute',
		top:200,
		left:200,
		backgroundColor:'red',
		width:100,
		height:100
	}).highlight("0000ff", 
		{
	    attr: "background-color", //改变背景颜色
	    endColor: "ff0000",
	    easing: 'easeIn',
	    duration: 2						//持续时间
  		}
  	);

		Ext.get('a3').applyStyles({
			position:'absolute',
			top:200,
			left:200,
			backgroundColor:'red',
			width:100,
			height:100
		}).frame("C3DAF9", 3,
		{
	      duration: 3 //每个波纹持续的时间
	   						 // 注意：这里不能使用 Easing 选项在，即使被包含了也会被忽略
		}
	);
	
		Ext.get('a4').applyStyles({
				position:'absolute',
				top:200,
				left:200,
				backgroundColor:'red',
				width:100,
				height:100
			}).scale(200,200 ,
		{
	    easing: 'easeOut',
	    duration:5
		}
	);
	
		Ext.get('a5').applyStyles({
				position:'absolute',
				top:200,
				left:200,
				backgroundColor:'red',
				width:100,
				height:100
			}).shift(
			{
		    width: 130,
		    height:50,
		    x:200,
		    y:200,
		    opacity:3,//透明度
		    easing: 'easeOut',
		    duration:5
			}
		);


	}
);