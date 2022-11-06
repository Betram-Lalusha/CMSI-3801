#include "exercises.h"

// copied from class notes
vector<pair<string, int>> sorted_word_counts(list<string> words)
{
  map<string, int> counts;
  for (string word : words)
  {
    counts[word]++;
  }
  auto value_descending = [](auto x, auto y)
  { return y.second < x.second; };
  vector<pair<string, int>> pairs(counts.begin(), counts.end());
  sort(pairs.begin(), pairs.end(), value_descending);
  return pairs;
}
