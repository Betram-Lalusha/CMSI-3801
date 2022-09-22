import math


def change(amount):
    if not type(amount) is int or amount < 0:
        raise TypeError(
            "Please enter numbers only with no decimals. Negative numbers not allowed")
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

        return res
