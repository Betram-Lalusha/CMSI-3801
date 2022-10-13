import java.util.*;
import java.util.function.Predicate;

public class Exercises {
    public static List<Integer> change(int amount) {
        return List.of(0, 0, 0, 0);
    }

    public static String stretched(String toStretch) {
        return "";
    }

    public static int[] powers(int number) {
        int[] powers = new int[number];
        return powers;
    }

    public static Optional findFirstThenLower(Predicate<String> predicate, List<String> words) {
        return words.stream().filter(predicate).findFirst().map(s -> s.toLowerCase());
    }
}