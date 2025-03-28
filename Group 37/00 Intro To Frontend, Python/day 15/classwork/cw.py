# First part:

# 6. for loop-ის გამოყენებით დაპრინტეთ 4-მდე არსებული 
# ყველა რიცხვის ჯამი, ეს ჯამი უნდა შეინახოს for loop-ის 
# გარეთ შექმნილ ცვლად sum-ში.


# # range(4) -> 0, 1, 2, 3

# sum = 0 # იქნება 6-ის ტოლი

# for i in range(4):
#     sum = sum + i
    
# print(sum)


# for i in range(4):
#     print(i)

# range(4) -> 0, 1, 2, 3



# for i in range(3):
#   print(i < 1)

# range(3) -> 0,1,2

# True
# False
# False

# print (5 == 5) # is 5 equal to 5? True
# print (5 == 7) # is 5 equal to 7? False
# print (5 != 7) # is 5 different from 7? True
# print (5 != 5) # is 5 different from 5? False
# print (5 <= 5) # is 5 less than or equal to 5? True
# print (5 >= 5) # is 5 greater than or equal to 5? True


# password = "SecretWord"
# guess = input() 

# while guess != password:  
#   guess = input() 

# print("Access Granted")



# # age checker

# print('welcome to amusement park!')


# user_choice = int(input('enter your age: '))

# #მინიმუმი ასაკი
# age = 18


# # თუ შემოტანილი ასაკი ნაკლებია მინიმუმზე:
# if user_choice < age:
#     print('you are too young for this ride!')
# elif user_choice >= age:
#     print('you are old enough for this ride!')
# else:
#     print('enter correct age')