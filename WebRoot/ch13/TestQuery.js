Ext.onReady(function(){
	var arr=Ext.query('div');
	for (var i = 0; i < arr.length; i++) {
		alert(arr[i].innerHTML);
	}
})