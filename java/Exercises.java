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
    
    public static List<String> topTenScorers(HashMap<String, List<String>> stats) {

		List<String> topPlayers = new ArrayList<String>();
		List<String> top10 = new ArrayList<String>();
		List<String> top10sorted = new ArrayList<String>();
		
		for(Map.Entry<String, List<String>> players : stats.entrySet()) {
			int count = (players.getValue().size());
			for(int i = 0; i < count; i++) {
				String[] info = players.getValue().get(i).split(",", 5);
				if(Integer.valueOf(info[1]) >= 15) {
					topPlayers.add(info[0] + "," + String.format("%.2f",(Double.valueOf(info[2])/Double.valueOf(info[1]))) + "," + (players.getKey()));
				}
			}
		}
		
		while(top10.size() != 10) {
			int indexOfHigh = 999;
			double high = 0;
			for(int i = 0; i < topPlayers.size(); i++) {
				String[] info = topPlayers.get(i).split(",", 5);
				if(Double.valueOf(info[1]) > high) {
					high = Double.valueOf(info[1]);
					indexOfHigh = i;
				}
			}
			top10.add(topPlayers.get(indexOfHigh));
			topPlayers.remove(indexOfHigh);
		}
		
		for(int i = 0; i < top10.size(); i++) {
			top10sorted.add(i,top10.get(i).replace(",", "|"));
		}
		return top10sorted;
	}
}
