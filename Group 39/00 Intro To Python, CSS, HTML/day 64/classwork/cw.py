# def calculator(x, y, op):
#     # თუ პირველი რიცხვი, არგუმენტი, არ უდრის
#     # ინტეჯერს, გამოიტანოს 'unknown value'
#     if type(x) != int:
#         return 'unknown value'
#     # თუ მეორე რიცხვი, არგუმენტი, არ უდრის
#     # ინტეჯერს, გამოიტანოს 'unknown value'
#     elif type(y) != int:
#         return 'unknown value'
#     # თუ ოპერაციის არგუმენტი არ უდრის სტრინგს,
#     # გამოიტანოს 'unknown value'
#     elif type(op) != str:
#         return 'unknown value'
    
#     elif op == '+':
#         return x + y
#     elif op == '-':
#         return x - y
#     elif op == '*':
#         return x * y
#     elif op == '/':
#         return x / y
#     # ყველა სხვა შემთხვევაში, ანუ თუ ოპერაციის სტრინგი
#     # არ უდრის ჩამოთვლილთ, გამოიტანოს 'unknown value'
#     else:
#         return 'unknown value'
    

# print(calculator(5, 4, '//'))



list = [1,2,-5, 3,-3,-2]


count_positives = 0
sum_negatives = 0

for i in list:
    if i > 0:
        count_positives += 1
    elif i < 0:
        sum_negatives += i

print([count_positives, sum_negatives])
    


