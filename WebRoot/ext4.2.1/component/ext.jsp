<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <link rel="stylesheet" type="text/css" href="<%=path%>/ext4.2.1/ext4.2.1/resources/css/ext-all.css">
 <script type="text/javascript" src="<%=path%>/ext4.2.1/ext4.2.1/bootstrap.js"></script>
 <script type="text/javascript">
 	var pathUrl='<%=path%>';
 	Ext.onReady(function(){
 	 //初始化全局的快速提示框实例 和准备任何的快速提示框.
 		  Ext.QuickTips.init();
 	});
 </script>

