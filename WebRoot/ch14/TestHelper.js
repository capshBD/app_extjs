Ext.onReady(function(){
	//Ext.DomHelper.append(Ext.get('good'),'hello');
	new Ext.Panel({
		id:"myPanel",
		title:"myPanel",
		width:200,
		height:200,
		html:"<div id='test'>hello</div>",
		renderTo:good
	})
	Ext.DomHelper.append(Ext.get('test'),',world');
});