package bai1;
public class bai1 {
	public static void main(String args[]){
		try{
		calculate(9,0);
		}catch(ArithmeticException e){
		System.out.println("error");
		}finally{
		System.out.println("finished");
		}
		}
		public static void calculate(int num, int i) throws
		ArithmeticException{
		System.out.println(num/i);
		}

	
}
s