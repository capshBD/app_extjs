<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%

	
	String shengfen = request.getParameter("shengfen");
	
	String beijing = "['北京','beijing']";
	String guangdong = "['广州','guangzhou'],['中山','zhongshan'],['东莞','dongguan']";
	String hunan = "['长沙','changsha'],['株洲','zhuzhou'],['湘潭','xiangtan']";
	String citys = "";
	
	if(shengfen.equals("beijing")) {
		citys = "[" + beijing + "]";
	} else if(shengfen.equals("guangdong")) {
		citys = "[" + guangdong + "]";
	} else if(shengfen.equals("hunan")) {
		citys = "[" + hunan + "]";
	} 
	
	response.getWriter().write(citys);
%>
