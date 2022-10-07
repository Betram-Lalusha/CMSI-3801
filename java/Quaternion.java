public record Quaternion(double a, double b, double c, double d) {
    public static double I;
    public static double K;
    public static double J;
    
    public Quaternion plus(Quaternion other) {
        return new Quaternion(0,0,0,0);
    }
    
    public Quaternion minus(Quaternion other) {
        return new Quaternion(0,0,0,0);
    }
    
    public Quaternion times(Quaternion other) {
        return new Quaternion(0,0,0,0);
    }
    
    public Quaternion coefficients() {
        return new Quaternion(0,0,0,0);
    }
    
    @Override
    public String toString() {
        return "";
    }
}