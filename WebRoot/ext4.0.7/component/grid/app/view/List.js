Ext.define('datao.view.List',{
        extend:'Ext.grid.Panel',
        title:'数据表格',
        frame:true,
        forceFit:true,
        alias:'widget.userlist',
        width:800,
        height:500,
		features:[
			Ext.create('Ext.grid.feature.RowBody',{
				getAdditionalData:function(data,idx,rec,org){
					 var headerCt = this.view.headerCt,
		                colspan = headerCt.getColumnCount();
		            return {
		                rowBody: '<div style="padding: 0em">'+rec.get("bank_name")+'</div>',
		                rowBodyCls:this.rowBodyCls,
		                rowBodyColspan: colspan
		            };
				}
			}),
			{ftype:'summary'},
            Ext.create('datao.util.filters'),
			Ext.create('Ext.grid.feature.Grouping',{
				groupText:'分组',
				groupHeaderTpl:'机构:{name} 一共{rows.length}人',
				showGroupsText:'展示分组',
				startCollapsed:false
			})
		],
        columns:[
            {text:'机构号',dataIndex:'org_id',groupable:true},//列锁定了无法分组
            //{text:'指标',columns:[//2级表头
            	{text:'机构名',dataIndex:'bank_name'},
	            {text:'存贷余额',dataIndex:'save_bal',summaryType: 'average',
                 filterable:true,filter:{type:'numeric'},
	             summaryRenderer: function(value, summaryData, dataIndex) {
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
            //]},
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
       // selType:'checkboxmodel',
       // selType:'rowmodel',
        selType:'cellmodel',
        //multiSelect:true,
       // enableKeyNav:true,//使用键盘
        plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1
            })
           /* Ext.create('Ext.grid.plugin.RowEditing',{
           		 clicksToEdit: 2
            })*/
        ],
        viewConfig:{
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