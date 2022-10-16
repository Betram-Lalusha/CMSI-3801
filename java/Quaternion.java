import java.util.List;

public record Quaternion(double a, double b, double c, double d) {

    public static final Quaternion I = new Quaternion(0, 1, 0, 0);
    public static final Quaternion J = new Quaternion(0, 0, 1, 0);
    public static final Quaternion K = new Quaternion(0, 0, 0, 1);
    public static final Quaternion ZERO = new Quaternion(0, 0, 0, 0);

    public Quaternion(double a, double b, double c, double d) {
        if (Double.isNaN(a) || Double.isNaN(b) || Double.isNaN(c) || Double.isNaN(d)) {
            throw new IllegalArgumentException("arguments can not be NaN");
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
        }

    }

    public Quaternion plus(Quaternion other) {
        return new Quaternion(this.a + other.a(), this.b + other.b(), this.c + other.c(), this.d + other.d());
    }

    public Quaternion minus(Quaternion other) {
        return new Quaternion(this.a - other.a(), this.b - other.b(), this.c - other.c(), this.d - other.d());
    }

    public Quaternion times(Quaternion other) {
        Double t0 = this.a * other.a() -
                this.b * other.b() -
                this.c * other.c() -
                this.d * other.d();
        Double t1 = this.a * other.b() +
                this.b * other.a() +
                this.c * other.d() -
                this.d * other.c();
        Double t2 = this.a * other.c() -
                this.b * other.d() +
                this.c * other.a() +
                this.d * other.b();
        Double t3 = this.a * other.d() +
                this.b * other.c() -
                this.c * other.b() +
                this.d * other.a();
        return new Quaternion(t0, t1, t2, t3);
    }

    public List<Double> coefficients() {
        return List.of(this.a, this.b, this.c, this.d);
    }

    @Override
    public String toString() {
        return "Quaternion[a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + "]";
    }
}