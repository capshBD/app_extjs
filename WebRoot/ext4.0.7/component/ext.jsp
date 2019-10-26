<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <link rel="stylesheet" type="text/css" href="<%=path%>/ext4.0.7/ext4.0.7/resources/css/ext-all.css">
 <script type="text/javascript" src="<%=path%>/ext4.0.7/ext4.0.7/bootstrap.js"></script>
 <script type="text/javascript">
 	var pathUrl='<%=path%>';
 	Ext.onReady(function(){
 		  Ext.QuickTips.init();
 	});
 </script>

