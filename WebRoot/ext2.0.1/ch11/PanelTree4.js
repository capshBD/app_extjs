Ext.onReady(
	function(){
		var root=new Ext.tree.AsyncTreeNode({
			id:'root',
			text:'根节点',
			loader:new Ext.tree.TreeLoader({
				url:'treedata.js'
			})
		});
		
		var mytree=new Ext.tree.TreePanel({
			id:'mytree',
			renderTo:pt,
			title:'动态树',
			width:200,
			height:600,
			root:root
		})
	
	}

);