Ext.onReady(function(){
	var eleA1=Ext.get('a1').applyStyles({
		position:'absolute',//绝对位置
		top:200,
		left:200,
		backgroundColor:'pink',
		width:300,
		height:200
	});
	Ext.create('Ext.fx.Anim', {
		target: eleA1,
		duration: 10000,
		from: {
			width: 300 // 开始宽度 400
		},
		to: {
			width: 200, // 结束宽度 300
			height: 20 // 结束高度 300
		}
	});
	
		Ext.get('a2').applyStyles({
		position:'absolute',
		top:200,
		left:200,
		backgroundColor:'blue',
		width:100,
		height:100
	}).highlight("0000ff", 
		{
	    attr: "background-color", //改变背景颜色
	    endColor: "ff0000",
	    easing: 'easeIn',
	    duration: 2000						//持续时间
  		}
  	);

            Ext.get('a3').applyStyles({
                position:'absolute',
                top:200,
                left:200,
                backgroundColor:'green',
                width:100,
                height:100
            }).frame("C3DAF9", 3,
            {
              duration: 3000 //每个波纹持续的时间
                                    // 注意：这里不能使用 Easing 选项在，即使被包含了也会被忽略
            }
        );

                Ext.get('a4').applyStyles({
                        position:'absolute',
                        top:200,
                        left:200,
                        backgroundColor:'gray',
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
                            backgroundColor:'yellow',
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