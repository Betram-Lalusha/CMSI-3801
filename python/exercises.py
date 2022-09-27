import math
from dataclasses import dataclass
from typing import Iterator
from os import urandom
from Crypto.Cipher import AES


def change(amount: int) -> tuple:
    if not type(amount) is int:
        raise TypeError(
            "amount cannot be negative")
    elif amount < 0:
        raise ValueError("amount cannot be negative")
    else:
        index = 0
        resIndex = 0
        remainder = amount
        res = [0, 0, 0, 0]
        coins = [25, 10, 5, 1]
        while (amount > 0 and remainder > 0 and index < 4):
            if remainder > coins[index]:
                remainder = amount % coins[index]
                res[resIndex] = math.floor(amount / coins[index])
                amount = remainder
            else:
                index += 1
                resIndex += 1

        return (res[0], res[1], res[2], res[3])


def stretched(String: str) -> str:
    spacelessString = "".join(String.split())
    stretchedString = ""
    for index, Char in enumerate(spacelessString):
        stretchedString += Char * (index + 1)
    return stretchedString


def powers(*, base: int, limit: int) -> int:
    for result in (base ** exponent for exponent in range(0, limit)):
        if result > limit:
            break
        yield result

# Currying help from: https://stackoverflow.com/a/39038455
def say(String = "") -> str:
    def _sayHelper(newString = "") -> str:
        if newString == "":
            return _sayHelper.s
        _sayHelper.s += " " + newString
        return _sayHelper
    _sayHelper.s = String
    return _sayHelper if String != "" else ""


def find_first_then_lower() -> str:
    return ""


def top_ten_scorers(object: object) -> object:
    return {}

def makeCryptoFunctions(secret_key=urandom(16), algorithm=AES.MODE_CBC, iv=urandom(16)):
    cipher = AES.new(secret_key, algorithm, iv)
    decipher = AES.new(secret_key, algorithm, iv)
    
    def encryption (message):
        return cipher.encrypt(message)

    def decryption(secret):
        return decipher.decrypt(secret)
    return [encryption, decryption]


@dataclass(frozen=True)
class Quaternion:
    q0: int
    q1: int
    q2: int
    q3: int

    def __add__(self, other):
        sum1 = self.q0 + other.q0
        sum2 = self.q1 + other.q1
        sum3 = self.q2 + other.q2
        sum4 = self.q3 + other.q3
        return Quaternion(sum1, sum2, sum3, sum4)

    def __mul__(self, other):
        t0 = self.q0 * other.q0 - self.q1 * other.q1 - \
            self.q2 * other.q2 - self.q3 * other.q3
        t1 = self.q0 * other.q1 + self.q1 * other.q0 + \
            self.q2 * other.q3 - self.q3 * other.q2
        t2 = self.q0 * other.q2 - self.q1 * other.q3 + \
            self.q2 * other.q0 + self.q3 * other.q1
        t3 = self.q0 * other.q3 + self.q1 * other.q2 - \
            self.q2 * other.q1 + self.q3 * other.q0
        return Quaternion(t0, t1, t2, t3)

    @property
    def coefficients(self):
        return (self.q0, self.q1, self.q2, self.q3)