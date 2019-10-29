Ext.onReady(
	function() {
		Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
		Ext.QuickTips.init();
		var root = new Ext.tree.TreeNode({
			id:"root",
			text:"根节点"
		});
		
		root.appendChild(new Ext.tree.TreeNode({
			id:"childNode",
			text:"静态子节点1"
		}))
		
		root.appendChild(new Ext.tree.AsyncTreeNode({
			id:"childNode2",
			text:"静态子节点2",
			loader:new Ext.tree.TreeLoader({
				url:"treedata.js"
			})
		}))
		
		var mytree = new Ext.tree.TreePanel({
			renderTo:"pt",
			id:"mytree",
			title:"混合树",
			width:300,
			height:200,
			root:root
		});
	}
);