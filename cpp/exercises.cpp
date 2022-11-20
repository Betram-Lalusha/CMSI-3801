#include "exercises.h"
#include <vector>
#include <array>
#include <valarray>
#include <iostream>
#include <map>
#include <algorithm>
#include <ranges>

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

vector<int> stretched_nonzeros(vector<int> v) {
    auto stretched = vector<int>();
    int i = 1;
    for (auto& n : v | views::filter([](const auto& n) { return n > 0; })) {
        stretched.insert(stretched.end(), i, n);
        i++;
    }
    return stretched;
}

void powers(int base, int limit, function<void(int)> consumer) {
    int power = 1;
    for (int exp = 1; power <= limit; exp++) {
        consumer(power);
        power = (int)pow(base, exp);
    }
}

int IntStack::size() {
    shared_ptr<Node> node = top;
    int count = 0;
    while (node) {
        count++;
        node = node->next;
    }
    return count;
}

void IntStack::push(int item) {
    auto add = shared_ptr<Node>(new Node{ item, top });
    top = add;
}

int IntStack::pop() {
    if (!top) {
        throw logic_error("Cannot pop an empty stack.");
    }
    int item = top->value;
    top = top->next;
    return item;
}

Sayer say;
string Sayer::operator()()
{
    return words;
};
Sayer Sayer::operator()(string word)
{
    if (words != "") {
        return {words+" "+word};
    } else {
        return {word};
    }
};

double dot(valarray<double> a, valarray<double> b)
{
    return (a[0] * b[0]) + (a[1] * b[1]) + (a[2] * b[2]);
}

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

Quaternion Quaternion::ZERO = {0, 0, 0, 0};
Quaternion Quaternion::I = {0, 1, 0, 0};
Quaternion Quaternion::J = {0, 0, 1, 0};
Quaternion Quaternion::K = {0, 0, 0, 1};

array<double, 4> Quaternion::coefficients()
{
    return {a, b, c, d};
}

bool Quaternion::operator==(const Quaternion &other) const
{
    return a == other.a && b == other.b && c == other.c && d == other.d;
}

ostream &operator<<(ostream &o, Quaternion q)
{
    // os << dt.mo << '/' << dt.da << '/' << dt.yr;
    string signB = q.b >= 0.0 ? "+" : "";
    string signC = q.c >= 0.0 ? "+" : "";
    string signD = q.d >= 0.0 ? "+" : "";
    string toString = to_string(q.a) + signB + to_string(q.b) + 'i' + signC + to_string(q.c) + 'j' + signD + to_string(q.d) + 'k';
    // cout << toString;
    o << q.a << signB << q.b << 'i' << signC << q.c << 'j' << signD << q.d << 'k';
    return o;
}
