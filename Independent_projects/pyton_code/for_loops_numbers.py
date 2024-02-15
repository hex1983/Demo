""" Create a for loop that checks how many odd numbers in range
    Return Output the number of instances in a list
    Return number of times 
"""

# odd_numbers = []
# def num_function(range(n)):
#     for i in n:
#         if i % 2:
#             continue
#         elif i % 3:
#             i.append(odd_numbers)
    
# num_function(range(13))

def num_function(n):
    odd_numbers = []
    for i in n:
        if i % 2 != 0:
            odd_numbers.append(i)
    return odd_numbers, len(odd_numbers)

result = num_function(range(23))
print(result)

odd_numbers_list, odd_numbers_count = num_function(range(23))
print("Odd Numbers List:", odd_numbers_list)
print("Number of Odd Numbers:", odd_numbers_count)
