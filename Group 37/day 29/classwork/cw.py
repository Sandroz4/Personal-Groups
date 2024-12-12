# import math

# num1 = 16 

# print(math.sqrt(num1))


# print(num1 ** 0.5)



# custom functions

#def -> define - შექმნა

# შევქმნათ ფუნქცია, რომელსაც გადავცემთ რიცხვს, 
# ის კი პრინტავს რიცხვის კვადრატს ⬇️


# def squarer(number1):
#     print(number1 ** 2)

# squarer(5)


# def noarg():
#     print('hello')


# noarg()


# # ვქმნით ფუნქციას halfnumber, 
# # არგუმენტით num1
# def halfnumber(num1):
#     print(num1 // 2)
   

# # ფუნქციას ვიძახებთ და არგუმენტის მაგივრად
# # გადავცემთ 6-იანს, რომელიც ჩაგდება num1-ის მაგივრად.
# halfnumber(int(input('Enter number: ')))

# ვქმნით ფუნქციას, რომელიც პრინტავს
# ორი ციფრის ნამრავლს ⬇️

# def multiply(num1, num2):
#     print(num1 * num2)

# first = int(input('enter num1: '))
# second = int(input('enter num2: '))

# multiply(first, second)




# bmi (body mass index) calculator

def bmi(height, weight):
    result = weight / height**2
    print(result)

bmi(1.80, 68)




