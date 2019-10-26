Ext.onReady(function(){
		var xt=new Ext.XTemplate(
			"<table border={b} width={w}>",
			"<tr>",
			'<td>{v1:date("Y年m月d日H时i分s秒")}</td>',
			"<td>{v2:lowercase}</td>",
			"<td>{v3:ellipsis(5)}</td>",
			"</tr>",
			"</table>"
		);
		xt.append("xt",{b:1,w:350,v1:new Date(),v2:"CELL2",v3:"这是一段非常长的字符串"});
		xt.compile();
	}
);