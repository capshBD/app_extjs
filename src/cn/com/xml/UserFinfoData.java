package cn.com.xml;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

public class UserFinfoData {
	public static List<UserFinfo> datas=new ArrayList<UserFinfo>();
	
	static{
			int num=37;
		for (int i = 0; i <num; i++) {
			datas.add(new UserFinfo((int)(Math.random()*100), "重庆银行"+i,Math.random()*1000,
					  new Date(new Random().nextInt(9999)),
					  new Random().nextBoolean()));
		}
		
	}
}
