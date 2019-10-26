package cn.com.xml;
import java.util.Date;
import org.apache.struts2.json.annotations.JSON;
public class UserFinfo {
	private int org_id;
	private String bank_name;
	private boolean sex;
	private double save_bal;
	private Date limitDate;
	public UserFinfo(int org_id, String bank_name, double save_bal,
			Date limitDate,boolean sex) {
		super();
		this.org_id = org_id;
		this.bank_name = bank_name;
		this.save_bal = save_bal;
		this.limitDate = limitDate;
		this.sex=sex;
	}
	public int getOrg_id() {
		return org_id;
	}
	public void setOrg_id(int org_id) {
		this.org_id = org_id;
	}
	public String getBank_name() {
		return bank_name;
	}
	public void setBank_name(String bank_name) {
		this.bank_name = bank_name;
	}
	public double getSave_bal() {
		return save_bal;
	}
	public void setSave_bal(double save_bal) {
		this.save_bal = save_bal;
	}
	
	@JSON(format="yyyy-MM-dd HH:mm:ss")  
	public Date getLimitDate() {
		return limitDate;
	}
	
	public void setLimitDate(Date limitDate) {
		this.limitDate = limitDate;
	}
	public boolean isSex() {
		return sex;
	}
	public void setSex(boolean sex) {
		this.sex = sex;
	}
	
	
}
