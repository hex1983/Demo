from tkinter import Tk, Button, Entry

root = Tk()
root.title("Simple Calculator")

result_text = Entry(root, width=20, font=("Arial", 14), justify="right")
result_text.grid(row=0, column=0, columnspan=4)

stored_value = None
operator = None


def on_number_pressed(number):
    current_text = result_text.get()
    if number == ".":
        if len(current_text) == 0 or "." in current_text:
            return

    result_text.insert("end", str(number))


def can_operate():
    return len(result_text.get()) >= 1


def operate(number):
    global stored_value, operator
    result = None

    if operator == "+":
        result = stored_value + number
    elif operator == "-":
        result = stored_value - number
    elif operator == "x":
        result = stored_value * number
    elif operator == "/":
        if number != 0:
            result = stored_value / number
        else:
            result_text.delete(0, "end")
            result_text.insert("end", "Error")
            return

    result_text.delete(0, "end")
    result_text.insert("end", result)
    stored_value = None
    operator = None


def on_operation_pressed(operation):
    current_number = float(result_text.get())

    if not can_operate():
        return

    if operation == "=" and stored_value is not None:
        operate(current_number)
    elif operation == "C":
        result_text.delete(0, "end")
        stored_value = None
        operator = None
    else:
        global operator, stored_value
        operator = operation
        stored_value = current_number
        result_text.delete(0, "end")


# Number buttons
for i in range(1, 10):
    Button(root, text=str(i), command=lambda i=i: on_number_pressed(i)).grid(row=(i - 1) // 3 + 1, column=(i - 1) % 3)

Button(root, text="0", command=lambda: on_number_pressed(0)).grid(row=4, column=1)
Button(root, text=".", command=lambda: on_number_pressed(".")).grid(row=4, column=2)

# Operation buttons
operations = ["+", "-", "x", "/"]
for i, operation in enumerate(operations):
    Button(root, text=operation, command=lambda operation=operation: on_operation_pressed(operation)).grid(row=i + 1, column=3)

Button(root, text="=", command=lambda: on_operation_pressed("=")).grid(row=4, column=3)
Button(root, text="C", command=lambda: on_operation_pressed("C")).grid(row=5, column=0)

root.mainloop()
