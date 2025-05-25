# list = ['mic', 'laptop', 'phone', 'tablet']

# def index_num(num):
#     if num > 3:
#         print('Index must be less then 4!')
#     elif num < -4:
#         print('Index must be more then -4!')
#     elif num <= 3:
#         print(list[num])


# # index = int(input('Enter Index between 0 and 3: '))
# # index_num(index)


# #        -4       -3       -2       -1
# #         0        1        2        3
# list = ['mic', 'laptop', 'phone', 'tablet'] 


# index = int(input('Enter index from -4 to 3: ')) # 23

# # თუ index ნაკლებია -4-ზე
# if index < -4:
#     print('Choose number higher than -4!')
# # თუ index მეტია 3-ზე
# elif index > 3:
#     print('Choose number lower then 3!')
# # ყველა სხვა შემთხვევა (თუ index  მეტია -4-ზე და ნაკლებია 3-ზე)
# else:
#     print(list[index])



# შექმენით ფუნქცია, vending-machine, გექნებათ პროდუქტების სია,
# მომხმარებელმა, კი უნდა აირჩიოს სასურველი პროდუქტი, თქვენ კი უნდა
# დაუპრინტოთ.


# products_list = ['chips', 'water', 'sprite',
#                  'nuts', 'bread', 'gum',
#                  'chocolate', 'stake', 'khinkali']



# print('''chips (0), water (1), sprite (2), nuts (3),
# bread (4), gum (5), chocolate (6), stake (7),
# khinkali (8).
# ''')

# print('')

# user_choice = int(input('Choose product by index: ')) #3

# print( products_list[user_choice] )


products_list = ['chips', 'water', 'sprite',
                 'nuts', 'bread', 'gum',
                 'chocolate', 'stake', 'khinkali']

def vending_machine(index1, index2):
    print(products_list[index1:index2+1])


print('''chips (0), water (1), sprite (2), nuts (3),
bread (4), gum (5), chocolate (6), stake (7),
khinkali (8).
''')

user_choice1 = int(input('Choose first product by index: ')) 
user_choice2 = int(input('Choose second product by index: ')) 

vending_machine(user_choice1, user_choice2)
