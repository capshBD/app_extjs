Ext.onReady(function(){
	/*alert(Ext.getDom("hi").innerHTML);
	alert(Ext.getDom(new Ext.Element('hi')).innerHTML);
	var e=new Ext.Element('hi');
	alert(Ext.getDom(e.dom).innerHTML);*/
	
	var arr=[1,2,3,4,5];
	Ext.each(arr,function(item,index,allItems){
		//alert(item);
		alert(allItems[index]);
	})
});
