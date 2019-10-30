Ext.define('datao.view.List',{
        extend:'Ext.grid.Panel',
        title:'数据表格',
        frame:true,
        forceFit:true,//设置为true，则强制列自适应成可用宽度
        alias:'widget.userlist',
        width:800,
        height:500,
        //要添加到该表格的一个关于表格特征的数组
		features:[
			Ext.create('Ext.grid.feature.RowBody',{
				getAdditionalData:function(data,idx,rec,orig){ //data这个特殊行的数据,rec Ext.data.Model记录实例 orig orig生成prepareData的原始数据
					 var headerCt = this.view.headerCt;//this.view 为TableView的引用
                         /*if(idx==0)
                             console.info(headerCt);*/ //Ext.grid.header.Container类的对象
		                colspan = headerCt.getColumnCount();
		            return {
		                rowBody: '<div style="padding: 0em">'+rec.get("bank_name")+'</div>',
		                rowBodyCls:this.rowBodyCls,
		                rowBodyColspan: colspan
		            };
				}
			}),
			{ftype:'summary'},//通过ftype制定摘要
            Ext.create('datao.util.filters'),
			Ext.create('Ext.grid.feature.Grouping',{
				groupText:'分组',
				groupHeaderTpl:'机构:{name} 一共{rows.length}人',
				showGroupsText:'展示分组',
				startCollapsed:false
			})
		],
        columns:[ //Ext.grid.column.Column列模型的对象数组
            {text:'机构号',dataIndex:'org_id',groupable:true},//列锁定了无法分组,若表格配置了Ext.grid.feature.Grouping, 则该列可用于禁用列菜单中的“按该列分组”。
            {text:'指标',columns:[//2级表头
            	{text:'机构名',dataIndex:'bank_name'},
	            {text:'存贷余额',dataIndex:'save_bal',summaryType: 'average', //可以统计此列的平均值
                 filterable:true,filter:{type:'numeric'}, //可过滤
	             summaryRenderer: function(value, summaryData, dataIndex) { //此列的平均值的渲染
			            return Ext.util.Format.number(value,'00.0');
			      }},
		      {
		      	text:'性别',dataIndex:'sex',xtype:'booleancolumn', trueText: '男',falseText: '女'
		      },
            {text:'期限日期',dataIndex:'limitDate',width:200,
                field:{
                    xtype:'textfield',
                    allowBlank:false
                }
            },
            ]},
            {xtype:'actioncolumn',tooltip: 'Edit',header:'action',text:'operation',icon:'app/png/add.gif',width:50}
        ],
        store:'SaveLoanInfos',
        tbar:[
            {xtype:'button',text:'add'},
            {xtype:'button',text:'remove',id:'remove'},
            {xtype:'button',text:'edit'},
            {xtype:'button',text:'save'},
            {xtype:'button',text:'cancel',id:'cancel'}
        ],
        dockedItems:[{
            xtype:'pagingtoolbar',
            store:'SaveLoanInfos',
            dock:'bottom',
            displayInfo:true
        }],
        //checkbox选择模式
       //selType:'checkboxmodel', //Ext.selection.CheckboxModel类的对象
       selType:'rowmodel',
        //selType:'cellmodel',
        multiSelect:true,
       // enableKeyNav:true,//使用键盘
        plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1
            }),
            Ext.create('Ext.grid.plugin.RowEditing',{
           		 clicksToEdit: 2
            })
        ],
        viewConfig:{//将应用于表格的 UI 视图的配置对象。任何对于Ext.view.Table所使用到的配置选项都在这里被指定。 如果指定了view，则忽略此选项
        	plugins:[
        		Ext.create('Ext.grid.plugin.DragDrop',{
        			ddGroup:'ddTree',//单行选择模式可拖拽
        			dragGroup:'userlist',
        			dropGroup:'userlist',
        			enableDrag:true,
        			enableDrop:true
        		})
        	]
        },
        initComponent:function(){
            this.callParent(arguments);
        }
})