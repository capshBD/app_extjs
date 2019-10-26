Ext.define('datao.view.PropertyList',{
	extend:'Ext.grid.property.Grid',
	title:'属性表格',
	alias:'widget.prolist',
	width:300,
	customRenderers:{
		boy:function(value){
			return value?'是':'否'
		},
        'email-width':function(value){
            return value;
        }
	},
    source:{
             boy:false,
            'email-width':100
        }
})