<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%
	String id=request.getParameter("id");
	if(id.equals("1"))
		out.write("[{id:'A0',name:'wz'},{id:'A1',name:'zx'},{id:'A2',name:'dj'}]");
	else
		out.write("[{id:'B0',name:'dc'},{id:'B1',name:'hd'},{id:'B2',name:'xj'}]");

%>