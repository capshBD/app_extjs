Ext.define('datao.view.PropertyList',{
	extend:'Ext.grid.property.Grid',
	title:'属性表格',
	alias:'widget.prolist',
	width:300,
	customRenderers:{ //定制规则渲染器
		boy:function(value){
			return value?'是':'否'
		},
        'email-width':function(value){
            return value;
        }
	},
    source:{//属性的每行的属性以及值
             boy:false,
            'email-width':100
        }
})