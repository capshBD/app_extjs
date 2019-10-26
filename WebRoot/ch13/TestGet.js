Ext.onReady(function(){
	Ext.get('hi').hide();//隐藏
	alert(Ext.get('hi').dom.innerHTML);
	alert(Ext.get(document.getElementById('hi')).dom.innerHTML);
	var hi=new Ext.Element('hi');
	alert(Ext.get(hi).dom.innerHTML);
	
	Ext.get('hi').highlight();
	Ext.get('hi').setX(300);
	Ext.get('hi').setY(300);
})