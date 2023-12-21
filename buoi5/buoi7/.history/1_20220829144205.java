
package 1;
import java.util.Scanner;

public class 1{
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        System.out.print("nhập a: ");
        int a=s.nextInt();
        System.out.print("Nhập b: ");
        int b =s.nextInt();
        System.out.print("Nhập c: ");
        int c =s.nextInt();
        String s1=a>b?" lớn hơn ":" không lớn hơn ";
        String s2=b>c?" lớn hơn ":" không lớn hơn ";
        String s3=a>c?" lớn hơn ":" không lớn hơn ";
        System.out.println(a+s1+b); 
        System.out.println(b+s2+c); 
        System.out.println(a+s3+c); 
    }
    
}
