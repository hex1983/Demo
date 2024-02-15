""" Create a simple calculator that accepts integers and 
    performs basic computation + - * /
    The program should run until the user decides to quit"""
    

def add_numbers(number1, number2):
    return number1 + number2

def subract_numbers(number1, number2):
    return number1 - number2

def multiply_numbers(number1, number2):
    return number1 * number2

def divide_numbers(number1, number2):
    if number2 != 0:
        return number1 / number2
    else: 
        return "Cannot divide by zero"
    
while True:
    try:
        number1 = int(input("Enter a number (or type 'q' to quit): "))
        if number1 == 'q':
            break
        
        print(number1)

        number2 = int(input("Enter another number: "))
        print(number2)

        operation = input("Choose operation (+, -, *, /) or type 'q' to quit: ")

        if operation == 'q':
            break
        
        if operation in ("+", "-", "*", "/"):
            if operation == "+":
                result = add_numbers(number1, number2)
                print("Addition:", result)
            elif operation == "-":
                result = subract_numbers(number1, number2)
                print("Subtraction:", result)
            elif operation == "*":
                result = multiply_numbers(number1, number2)
                print("Multiplication:", result)
            elif operation == "/":
                result = divide_numbers(number1, number2)
                print("Division:", result)
        else:
            print("Invalid operation. Please choose +, -, * or / or type 'q' to quit.")
    except ValueError:
        print("Invalid input. Please enter a valid number.")

