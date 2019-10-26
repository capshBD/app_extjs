<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'keytool.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

  </head>
  
  <body>
  	<applet codebase="."
  		  code="cn.com.app.MyApplet"
  		  archive="keytool-1.0.jar,dom4j-1.6.1.jar"
  		  name="app"
  		  width    = "100%"
		  height   = "100%"
		  hspace   = "0"
		  vspace   = "0"
		  align    = "middle">
  		
  	</applet>
  </body>
</html>
