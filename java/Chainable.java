public class Chainable {
    private String phrase = "";
    public Chainable(String initialPhrase){
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
