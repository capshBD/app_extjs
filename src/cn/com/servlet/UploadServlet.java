package cn.com.servlet;


import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;

@SuppressWarnings("serial")
public class UploadServlet extends HttpServlet {
	
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		MultipartRequest multi=new MultipartRequest(
				request, 
				"E:\\BaiduYunDownload\\Upload",
				10*1024*1024,
				"utf-8"
				);
		
		System.out.println("文件名"+multi.getFilesystemName("f"));
		System.out.println("文件描述"+multi.getParameter("desc"));
	}
}
