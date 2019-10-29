Ext.onReady(
	function (){
		new Ext.Panel({
			tools:[
			       {id:'save',handler:function(){
			    	   Ext.MessageBox.confirm("保存","是否保存",function(e){
			    		   if(e=='yes'){
			    			   alert('保存成功');
			    		   }else{
			    			   alert('错做取消');
			    		   }
			    	   });
			       }},
			       {id:'help'},
			       {id:'close'}
			       ],
			renderTo:hello,
			contentEl:"localElement",
			width:220,
			height:150,
			title:'panle',
			autoScroll:true,
			collapsible:true,
			titleCollapse:true, //true表示为允许单击头部区域任何一个位置都可收缩面板
			tbar:[
			      {text:'上一',handler:function(){
			    	  Ext.MessageBox.alert("点击","上一被点击");
			      }},
				  {text:'上二'}
			      ],
			bbar:[
			      {text:'下一'},
			      {text:'下二'}
			     ],
			draggable:{
				insertProxy:false,
				onDrag:function(e){
					var pel=this.proxy.getEl();
					this.x=pel.getLeft(true);
					this.y=pel.getTop(true);
					var s=this.panel.getEl().shadow;
					s.hide();
				},
			endDrag:function(e){
				this.panel.setPosition(this.x,this.y);
				}
			},
		x:100,
		y:100,
		floating:true
		});
	}
);