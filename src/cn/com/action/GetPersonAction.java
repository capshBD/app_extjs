package cn.com.action;

import java.util.ArrayList;
import java.util.List;

import cn.com.xml.Person;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class GetPersonAction extends ActionSupport{
	private List<Person> persons;
	
	public List<Person> getPersons() {
		return persons;
	}

	public void setPersons(List<Person> persons) {
		this.persons = persons;
	}

	public String jsonTest() throws Exception {
		persons = new ArrayList<Person>();
		Person person = new Person(1,"xcbao",20,"www.beifeng.com");
		Person person2 = new Person(2,"dagou",34,"bbs.ibeifeng.com");
		persons.add(person);
		persons.add(person2);
		return "success";
	}
}
