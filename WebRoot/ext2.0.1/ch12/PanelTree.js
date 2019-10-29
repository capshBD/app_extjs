Ext.onReady(
	function() {
		Ext.BLANK_IMAGE_URL = "../Extjs/resources/images/default/s.gif";
		Ext.QuickTips.init();
		var root = new Ext.tree.TreeNode({
			id:"root",
			text:"根节点",
			checked:true,  //true则在text前有个选中的复选框,false则text前有个未选中的复选框,默认没有任何框框
			expanded:true,//是否展开
			qtip:"根节点",  //提示信息
            singleClickExpand:true //单击文本展开 

		});
		
		root.appendChild(new Ext.tree.TreeNode({
			id:"childNode",
			text:"静态子节点1",
			checked:false
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
			root:root,
			animate:false,//收缩动画
			autoHeight:true, //自动高度
			enableDrag:true, //是否可以拖动
			enableDrop:true, //放置节点
			lines:false,//节点间虚线
			rootVisible:true,//是否显示根节点
			trackMouseOver:true,//是否显示经过时效果
			useArrows:true//是否使用小箭头
		});
	}
);