var extjsAnimal=function(){
		var config={
			title:'飞消息',
			msg:'消息框',
			width:400,
			multiline:true,
			closable:false,
			buttons:Ext.MessageBox.YESNOCANCEL,
			icon:Ext.MessageBox.QUESTION,
			animEL:'fly'
		}
	Ext.MessageBox.show(config);
}