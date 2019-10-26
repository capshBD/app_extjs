package cn.com.xml;

public class Person {
	private int id;
	private String name;
	private int age;
	private String homePage;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getHomePage() {
		return homePage;
	}

	public void setHomePage(String homePage) {
		this.homePage = homePage;
	}

	public Person(int id, String name, int age, String homePage) {
		this.id = id;
		this.name = name;
		this.age = age;
		this.homePage = homePage;
	}

}
