<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
	Integer num=(Integer)(session.getAttribute("num"));
	if(num==null)
		num=0;
	session.setAttribute("num", num+1);
	out.write(num);
%>


