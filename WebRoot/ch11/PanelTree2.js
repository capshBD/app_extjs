Ext.onReady(
	function(){
		Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
		Ext.QuickTips.init();
		var root=new Ext.tree.TreeNode({
			id:'root',
			text:'根节点'
		});
		
		var childNode1 = new Ext.tree.TreeNode({
			id:"childNode1",
			text:"子节点1"
		});
		
		var childNode2 = new Ext.tree.TreeNode({
			id:"childNode2",
			text:"子节点2"
		});
		
		var childNode3 = new Ext.tree.TreeNode({
			id:"childNode3",
			text:"子节点3"
		});
		
		var gChildNode1 = new Ext.tree.TreeNode({
			id:"gChildNode1",
			text:"孙子节点1"
		})
		
		var gChildNode2 = new Ext.tree.TreeNode({
			id:"gChildNode2",
			text:"孙子节点2"
		})
		
		var gChildNode3 = new Ext.tree.TreeNode({
			id:"gChildNode3",
			text:"孙子节点3"
		})
		
		root.appendChild(childNode1);
		root.appendChild(childNode2);
		root.appendChild(childNode3);
		
		childNode2.appendChild(gChildNode1);
		childNode2.appendChild(gChildNode2);
		childNode2.appendChild(gChildNode3);
		
		var mytree=new Ext.tree.TreePanel({
			renderTo:pt,
			id:"mytree",
			title:"树",
			width:300,
			height:200,
			root:root
		})
		
		mytree.on('click',function(node,event){
			alert(node.text);
		});
		root.on('click',function(node,event){
			alert(node.text);
		})
	}
);