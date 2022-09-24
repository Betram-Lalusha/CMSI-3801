import math


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
    return ""


def powers(*, base: int, limit: int) -> list:
    return []


def say(String: str) -> str:
    return ""


def find_first_then_lower() -> str:
    return ""


def top_ten_scorers(object: object) -> object:
    return {}


def crypto_functions():
    return


def Quaternion(q1: int, q2: int, q3: int, q4: int):
    return
