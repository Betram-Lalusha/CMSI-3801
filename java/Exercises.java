import java.util.*;
import java.util.stream.*;
import java.util.regex.*;
import java.util.function.IntConsumer;
import java.util.function.Predicate;

public class Exercises {
    public static List<Integer> change(int amount) {
        if (amount < 0) {
            throw new IllegalArgumentException("Amount cannot be negative");
        }
        List<Integer> coins = List.of(25, 10, 5, 1);
        List<Integer> coinCounts = new ArrayList<>();
        for (Integer coin : coins) {
            coinCounts.add(amount / coin);
            amount %= coin;
        }
        return Collections.unmodifiableList(coinCounts);
    }

    // Help splitting up strings from: https://stackoverflow.com/a/59311631
    public static String stretched(String toStretch) {
        toStretch = toStretch.replaceAll("\\s", "");

        List<String> graphemes = Pattern.compile("\\P{M}\\p{M}*+").matcher(toStretch)
                .results()
                .map(MatchResult::group)
                .collect(Collectors.toList());

        String stretchedString = "";
        int index = 1;
        for (String g : graphemes) {
            stretchedString = stretchedString.concat(g.repeat(index));
            index++;
        }

        return stretchedString;
    }

    public static int[] powers(int base) {
        return new int[base];
    }
    
    public static void powers(int base, int limit, IntConsumer consume) {
        for (int power = 1; power <= limit; power *= base) {
            consume.accept(power);
        }
    }

    public static Optional<String> findFirstThenLower(Predicate<String> predicate, List<String> words) {
        return words.stream().filter(predicate).findFirst().map(String::toLowerCase);
    }

    public static Chainable say(String inputString) {
        return new Chainable(inputString);
    }
    public static Object say() {
        return "";
    }
}
