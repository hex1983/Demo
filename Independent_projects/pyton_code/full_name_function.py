"""
    Create a function that takes 2 arguments fname & lname
    and returns a neatly formatted version
"""
    
def full_name_gen(fname, lname):
    
    return f"Nice to meet you. Please address me as, {fname.title()} {lname.title()}!"

full_name = full_name_gen("hector", "galvez")
print(full_name)
