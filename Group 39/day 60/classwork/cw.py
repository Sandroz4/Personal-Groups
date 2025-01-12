# calculator

# def calculator(num1, num2, operator):
#     if operator == '+':
#         return num1 + num2 
#     elif operator == '-':
#         return num1 - num2
#     elif operator == '*':
#         return num1 * num2
#     elif operator == '/' and num2 == 0:
#         return "can't divide by zero"
#     elif operator == '/':
#         return num1 / num2
#     elif operator == '//' and num2 == 0:
#         return "can't divide by zero"
#     elif operator == '//':
#         return num1 // num2

# # 0 / 2 - ✅
# # 5 / 0 - ❌

# user_input1 = int(input('Enter num1: '))
# user_input2 = int(input('Enter num2: '))
# user_input3 = input('Choose operator (+,-,*,/,//): ')

# print(calculator(user_input1, user_input2, user_input3))

# print(11/2) # 5.5
# print(11//2) # 5


# def mod(a, b):
#     pass

# def exponent(a, b):
#     pass

# list = ['goa', 'group39']

# for i in list:
#     print(i)
    

# 



# 1 დატრიალება

# number = 2
# count = 0

# საბოლოოდ - count = 2


# 1 დატრიალება

# number = 5
# count = 2



# range(2) -> 0,1
# list -> 2,5,6,6,7

# number = 2 
# number = 5 
# number = 6
# number = 6
# number = 7


nums = [2, 4, 6, 7, 8]

count = 0 # 2 -> 6 -> 13 -> 19 -> 27

# ყოველი ელემენტისთვის, nums სიაში
for num in nums:
    count = count + num

print(count)





#1. count = 0     + 2 = 2
#   print(count)

#2. count = 2     + 4 = 6   
#   print(count)

#3. count = 6     + 6 = 12
#   print(count)

#4. count = 12    + 7 = 19
#   print(count)

#5. count = 19    + 8 = 27
#   print(count)



