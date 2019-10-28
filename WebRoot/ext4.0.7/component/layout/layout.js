Ext.onReady(function(){
    var navigate =function(panel,direction){
            var layout=panel.getLayout();
            layout[direction](); //执行此布局的next或prev方法 进行卡片切换
            Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
            Ext.getCmp('move-next').setDisabled(!layout.getNext());
    }
        Ext.create('Ext.panel.Panel',{
            width:'100%',
            height:800,
            layout: 'border', //内部会生成一个Ext.layout.container.Border类的一个布局对象
            title:'layout布局',
            renderTo:Ext.getBody(),
            defaults:{
               split: true
            },
            items:[{
                xtype:'panel',
                region:'east',
	            width: '30%',
	            title: "锚点布局",
	            layout: 'anchor', //东边的子面板 进行锚点布局
                split: true, 
	            items:[{
	                 xtype: 'panel',
	                 title: '75% 宽 and 20% 高', //占父面板的宽和高的百分数
	                 anchor: '75% 20%'
	            },{
	                 xtype: 'panel',
	                 title: '右边 -150 下面  -200',
	                 anchor: '-150 -200' 
	            },{
	                xtype: 'panel',
	                title: '混合距离偏移和百分比',
	                anchor: '-250 20%'
	            }]   
            },{
                xtype:'panel',
                region:'west',
                title:'手风琴',
                width: '20%',
                split: true, 
                layout: {  //西边的子面板 进行手风琴布局
			        type: 'accordion',
			        titleCollapse: false //'true' 表示允许通过点击标题栏的任意位置来展开/收缩子项Panel
			    },
                items:[{
			        title: 'Panel 1',
			        html: '手风琴1'
			    },{
			        title: 'Panel 2',
			        html: '手风琴2'
			    },{
			        title: 'Panel 3',
			        html: '手风琴3'
                }]
            },{
                xtype:'panel',
                region:'north',
                height:'20%',
                layout:'card', //北部的子面板 进行卡片布局
                title:'card布局',
                split: true,
                bodyStyle: 'padding:5px',//内容内边距
                defaults: {
		        // 应用到所有子面板
		          border: false
		        },
                bbar:[{
                    id:'move-prev',
                    text:'后退',
                    handler:function(btn){
                         navigate(btn.up("panel"), "prev");
                    },
                    disabled: true
                },'->',{
                    id:'move-next',
                    text:'前进',
                    handler:function(btn){
                         navigate(btn.up("panel"), "next");
                    },
                    disabled: false            
                }],
                items:[{
                     id: 'card-0',
                     html: '<h1>卡片布局1!</h1><p>第一张</p>'
                },{
                     id: 'card-1',
                     html: '<h1>卡片布局2!</h1><p>第二张</p>'
                },{
                     id: 'card-2',
                     html: '<h1>卡片布局3!</h1><p>第三张</p>'
                }]
            },{
                xtype:'panel',
                region:'south',
                height:'20%',
                layout:'column', //南部的子面板 进行列布局
                title:'column布局',
                // 第一列会占用宽度120px, 而后3列会填满容器剩下的宽度,宽度进行columnWidth的配置分配
                items:[{
                    title:'col_1',
                    html:'第一列',
                    width:120
                },{
                    title:'col_2',
                    html:'第二列',
                    columnWidth:.3
                },{
                    title:'col_3',
                    html:'第三列',
                    columnWidth:.3
                },{
                    title:'col_4',
                    html:'第四列',
                    columnWidth:.4
                }]
            },{
                xtype:'panel',
                region:'center', //中心的子面板 进行表格布局
                title:'表格布局',
                margins: '5 5 5 5',//与相邻组件外边距
		        layout: {
			        type: 'table',
			        columns: 3
		      },
              defaults: {
                 bodyStyle: 'padding:20px'
             },
              items: [{
			        html: '单元格1跨2行',
			        rowspan: 2
			    },{
			        html: '单元格2跨2列',
			        colspan: 2
			    },{
			        html: '单元格3',
			        cellCls: 'highlight'
			    },{
			        html: '单元格4'
			    }]
            }]
        })
})