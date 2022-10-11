
public record Quaternion(double a,double b,double c,double d){public static final Quaternion I=new Quaternion(0,1,0,0);public static final Quaternion J=new Quaternion(0,0,1,0);public static final Quaternion K=new Quaternion(0,0,0,1);

public Quaternion{if(Double.isNaN(a)||Double.isNaN(b)||Double.isNaN(c)||Double.isNaN(d)){throw new IllegalArgumentException("arguments can not be NaN");}}

public Quaternion plus(Quaternion other){return new Quaternion(0,0,0,0);}

public Quaternion minus(Quaternion other){return new Quaternion(0,0,0,0);}

public Quaternion times(Quaternion other){return new Quaternion(0,0,0,0);}

public Quaternion coefficients(){return new Quaternion(0,0,0,0);}

@Override public String toString(){return"";}}