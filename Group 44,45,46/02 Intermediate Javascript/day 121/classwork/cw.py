def vendingMachine(products, balance):
    for i in products:
        print(i)

    print()
    print(f'your balance is {balance}$')
    print()
    user_input = int(input('Enter a product number: '))
    product = products[user_input][:-3]

    print(f'you got {product}')



vendingMachine(['2$ - Snickers (0)', '5$ - Oreo (1)', '2$ - KitKat (2)', '2$ - Bounty (3)', '3$ - Mars (4)', 
                '4$ - Twix (5)', '6$ - Haribo (6)'], 10) 


# def vendingMachine(products, prices, balance):
#     for i in products:
#         print(i)

#     print()
#     print(f'your balance is {balance}$')
#     print()
#     user_input = int(input('Enter a product number: '))
#     product = products[user_input][:-3]

#     print(f'you got {product}')



# vendingMachine(['Snickers', 'Oreo', 'KitKat', 'Bounty', 'Mars', 
#                 'Twix', 'Haribo'], [2, 5, 2, 2, 3, 4, 6], 10) 