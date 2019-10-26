<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String username=request.getParameter("username");
	String password=request.getParameter("password");
	String msg="";
	if(username.equals("lbb")&&password.equals("111")){
		msg="成功"; 
	}else{
		msg="失败";
	}
	response.getWriter().print(msg);
 %>
