#include "exercises.h"

// copied from class notes
// vector<pair<string, int>> sorted_word_counts(list<string> words)
// {
//   map<string, int> counts;
//   for (string word : words)
//   {
//     counts[word]++;
//   }
//   auto value_descending = [](auto x, auto y)
//   { return y.second < x.second; };
//   vector<pair<string, int>> pairs(counts.begin(), counts.end());
//   sort(pairs.begin(), pairs.end(), value_descending);
//   return pairs;
// }

// Time :: Time(const int h, const int m, const int s)
//   : hour(h), minute (m), second(s)
// {}

// void Time :: setTime(const int h, const int m, const int s)
// {
//      hour = h;
//      minute = m;
//      second = s;
// }

// void Time :: print() const
// {
//      cout << setw(2) << setfill('0') << hour << ":"
// 	<< setw(2) << setfill('0') << minute << ":"
//  	<< setw(2) << setfill('0') << second << "\n";

// }

// bool Time :: equals(const Time &otherTime)
// {
//      if(hour == otherTime.hour
//           && minute == otherTime.minute
//           && second == otherTime.second)
//           return true;
//      else
//           return false;
// }

// IntStack:: Node(int value, shared_ptr next)
//     :value(value), next(next)
