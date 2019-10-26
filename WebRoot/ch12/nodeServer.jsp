<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	StringBuffer str = new StringBuffer();
	str.append("[");
	str.append("{id:'childNode1',text:'动态子节点1',leaf:true},");
	str.append("{id:'childNode2',text:'动态子节点2',leaf:true},");
	str.append("{id:'childNode3',text:'动态子节点3',leaf:true},");
	str.append("{id:'childNode4',text:'动态子节点4',leaf:true},");
	str.append("{id:'childNode5',text:'动态子节点5',leaf:true}");
	str.append("]");
	response.getWriter().write(str.toString());
%>