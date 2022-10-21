import java.util.*;
import java.util.stream.*;
import java.util.regex.*;
import java.util.function.IntConsumer;
import java.util.function.Predicate;
import java.util.List;
import java.util.Map;
import java.util.HashMap;

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

    // Help with streams from: https://www.baeldung.com/java-inifinite-streams
    public static IntStream powers(int base) {
        return IntStream.iterate(1, power -> power *= base);
    }

    public static void powers(int base, int limit, IntConsumer consume) {
        for (int power = 1; power <= limit; power *= base) {
            consume.accept(power);
        }
    }

    public static Optional<String> findFirstThenLower(Predicate<String> predicate, List<String> words) {
        return words.stream().filter(predicate).findFirst().map(String::toLowerCase);
    }

    public static class Chainable {
        private String phrase = "";

        public Chainable(String initialPhrase) {
            phrase += initialPhrase;
        }

        public Chainable and(String nextPhrase) {
            phrase += " " + nextPhrase;
            return this;
        }

        public String ok() {
            String returnPhrase = phrase + "";
            phrase = "";
            return returnPhrase;
        }
    }

    public static Chainable say(String inputString) {
        return new Chainable(inputString);
    }

    public static String say() {
        return "";
    }
    
    public static List<String> topTenScorers(Map<String, List<String>> stats) {
        ArrayList<String> topPlayers = new ArrayList<String>();
        stats.entrySet().stream().forEach((e)->{
            String[] items = e.getValue().toString().replace("]","").replace("[","").split(",");
            double avg =Integer.parseInt(items[2])/Integer.parseInt(items[1]);
            topPlayers.add(String.join("|",items[0],String.format("%.2f",avg),e.getKey()));
    });
        return topPlayers;
    }
}
