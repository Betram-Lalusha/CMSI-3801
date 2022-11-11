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

Quaternion::Quaternion(double a, double b, double c, double d)
    : a(a), b(b), c(c), d(d)
{
}

Quaternion Quaternion::operator-(const Quaternion &other)
{
    return {a - other.a, b - other.b, c - other.c, d - other.d};
}

Quaternion Quaternion::operator+(const Quaternion &other)
{
    return {a + other.a, b + other.b, c + other.c, d + other.d};
}

Quaternion Quaternion::operator*(const Quaternion &other)
{
    double a0 = a * other.a - b * other.b - c * other.c - d * other.d;

    double b0 =
        a * other.b +
        b * other.a +
        c * other.d -
        d * other.c;
    double c0 =
        a * other.c -
        b * other.d +
        c * other.a +
        d * other.b;
    double d0 =
        a * other.d +
        b * other.c -
        c * other.b +
        d * other.a;

    return {a0, b0, c0, d0};
}
