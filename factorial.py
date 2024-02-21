def factorial(n):
    if n == 0:
        return 1
    else:
        print("Calling factorial(", n, ")")
        result = n * factorial(n - 1)
        print("Returning from factorial(", n, ") with result", result)
        return result

# Example usage:
num = 5
print("Factorial of", num, "is", factorial(num))



