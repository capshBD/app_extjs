Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
	
	var propertyGrid = new Ext.grid.PropertyGrid({
		id:"propertyGrid",
		renderTo:"gp",
		title:"propertyGrid",
		width:300,
		height:300,
		source:{
				"员工名称" : "张吧",
				"出生日期" : new Date(2008,5,23),
				"性别" : '男',
				"是否已婚" : false,
				"年龄" : 29
		},
		customEditors:{
			"性别":new Ext.grid.GridEditor(new Ext.form.ComboBox({
				mode: 'local',
				store:new Ext.data.SimpleStore({
					fields:["sex"],
					data:[["男"],["女"]]
				}),
				displayField:"sex",
				triggerAction:"all",
				selectOnFocus:true
			})),
			"年龄":new Ext.grid.GridEditor(new Ext.form.NumberField({
				allowBlank:false,
				allowDecimals:false,
				allowNegative:false
			}))
		}
	});
	
	propertyGrid.getColumnModel().dateFormat="Y年m月d日";
});
