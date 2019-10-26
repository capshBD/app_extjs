Ext.onReady(
	function(){
		Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
		Ext.QuickTips.init();
		var root=new Ext.tree.TreeNode({
			id:'root',
			text:'根节点'
		});
		root.appendChild(new Ext.tree.TreeNode({
			id:'childNode1',
			text:'子节点一'
		})
		)
		
		var mytree=new Ext.tree.TreePanel({
			renderTo:pt,
			id:"mytree",
			title:"树",
			width:300,
			height:200,
			root:root
		})
	}
);