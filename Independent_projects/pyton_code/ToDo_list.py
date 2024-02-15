""""
Create a to do list program
Create an emtpy list
ask user for input of a task as a string
append task into list
prompt user for more task or "q" to quit program
format tasks by number in ascending order and output list of tasks
Todo list is complete
User needs to mark tasks complete
After completed list prints out promp user to ender number of task to mark done.
remove task from list
repeat until list is empty
once list is empty output "Todo list complete Well done!"
"""

class ToDoList:
    def __init__(self):
        # Initialize empty lists for tasks and completed tasks
        self.tasks = []
        self.completed_tasks = []

    def add_task(self, task):
        # Add a task to the to-do list
        self.tasks.append(task)

    def print_todo_list(self):
        # Print the to-do list with task numbers
        print("To-Do List:")
        for i, task in enumerate(self.tasks, 1):
            print(f"{i}. {task}")

    def mark_task_as_done(self, task_number):
        # Mark a task as done and move it to the completed tasks list
        task = self.tasks.pop(task_number - 1)
        self.completed_tasks.append(task)
        print(f"Task '{task}' marked as done!")

# Create a ToDoList instance
todo_list = ToDoList()

while True:
    # Ask the user for input
    task = input("Enter a task (type 'q' to quit): ")

    if task.lower() == 'q':
        # If the user enters 'q', break the loop and print the to-do list
        break
    else:
        # Add the task to the to-do list
        todo_list.add_task(task)

# Ask the user if they want to mark tasks as done
mark_done = input("Do you want to mark tasks as done? (yes/no): ")

while mark_done.lower() in ['yes', 'y'] and todo_list.tasks:
    # Print the current to-do list
    todo_list.print_todo_list()

    # Ask the user for the task number to mark as done
    task_number = int(input("Enter the task number to mark as done: "))

    # Mark the task as done
    todo_list.mark_task_as_done(task_number)

    # Ask the user if they want to mark more tasks as done
    mark_done = input("Do you want to mark more tasks as done? (yes/no): ")

# Print the final to-do list and completed tasks
print("Final To-Do List:")
todo_list.print_todo_list()
print("Completed Tasks:")
for i, task in enumerate(todo_list.completed_tasks, 1):
    print(f"{i}. {task}")
