# movies=["Avatar","Titanic","Alien"]
# movies.append("Avengers")

# movies.insert(2, "Terminator")
# print(movies[3])

# #  0          1         2         3           4
# ["Avatar","Titanic","Terminator", "Alien","Avengers"]



# for loop


# # 1

# for i in range(10):
#     print(i)

# # 2

# for i in range(5, 16):
#     i += 2
#     print(i)

# # 3

# for i in range(5, 16, 2):
#     print(i)



# for loop over strings

# # #     0123456
# name = 'georgia'

# # i-სთვის, name-ში
# for i in name[-2:7]:
#     print(i)


# # int iterable 

# age = 134

# for i in str(age):
#     print(i)










# # noob enter

# print('hello world')
# print()
# print('bye world')


# # pro


# print('hello world \n')
# print('\nbye world')




# user enters input, functions spells it, 
# letter by letter

# user = input('Enter your name: ') 

# def speller(user):
#     print('\nYour name spelled: ')
#     for letter in user:
#         print(letter)
    

# speller(user)







# # for loops over list
 

# grades = [9,8,10,10]

# for num in grades[1:3]:
#     print(num)

# +, -, /, * 

# # simple calculator
 
# def calculator(a, b, operation):
#     if operation == '+':
#         return a + b
#     elif operation == '-':
#         return a - b
#     elif operation == '*':
#         return a * b
#     elif b == 0:
#         return 'cant divide by 0'
#     elif operation == '/':
#         return a / b 
#     else:
#         return 'invalid input'
    
# a = int(input('Enter Num1: '))
# b = int(input('Enter Num2: '))
# operation = input('Enter operation (+, -, /, *): ')

# print(calculator(a, b, operation))