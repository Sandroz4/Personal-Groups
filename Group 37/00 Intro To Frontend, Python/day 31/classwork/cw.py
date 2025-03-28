# # built-in functions

# print()
# int()
# float()
# input()
# type()



# custom functions

# # print

# def multiply(a, b):
#     print(a*b) #20


# result = multiply(5, 4)

# print(result)


# # return 

# 1

# def multiply(a, b): # ფუნქციას დაუბრუნდა 20
#     return a*b  # 20   


# result = multiply(5,4) # უდრის 20-ს/ინახავს 20-ს


# print(result)

# 1 

# def sumOfThree(a, b, c):
#     print(a + b + c)

# print(sumOfThree(2,3,4) + 1)








# def register(gender, name, password, passwordconf):
#     if password != passwordconf:
#         if gender.lower() == "m":
#             return f'you failed Mr {name}!'
#         else:
#             return f'you failed Ms {name}!'
#     return 'you passed'
    

# print(register(input('Choose your gender (M/F): '),
#                input('Enter your name: '), 
#                 input('Enter your password: '), 
#                 input('Confirm your password: ')))






def addFive(a, b):
    return a + 2, b + 5
            

result1, result2 = addFive(2, 5)

print(result2+result1 - 3)

# ირაკლი - 6, 11
# ნიკოლოზი - 11