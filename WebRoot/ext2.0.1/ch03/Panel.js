var pan=null;
Ext.onReady(
	function (){
		pan=new Ext.Panel({
			id:'pl',
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
			autoLoad:'load.html',
			width:220,
			height:150,
			title:'panle',
			html:'风萧萧兮易水寒'+
					'风萧萧兮易水寒'+
					'风萧萧兮易水寒'+
					'风萧萧兮易水寒'+
					'风萧萧兮易水寒'+
					'风萧萧兮易水寒'+
					'风萧萧兮易水寒'+
					'风萧萧兮易水寒'+
					'风萧萧兮易水寒',
			autoScroll:true,
			collapsible:true,
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
		floating:true   //true表示为浮动此面板
		});
	}
);

alert(pan);