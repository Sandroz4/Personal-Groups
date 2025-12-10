def vendingMachine(products, balance):
    print('=== Vending Machine ===')

    for i, (name, price) in enumerate(products):
        print(f'{i}. {name} - ${price}')
    
    print(f'Your balance is ${balance}\n')

    choice = int(input('Enter a product number: '))
    
    if choice < 0  or choice >= len(products):
        print('Wrong product number')
    
    name, price = products[choice]

    if balance >= price:
        balance -= price
        print(f'✅ You got {name} for ${price}')
        print(f'💰 Remaining balance: ${balance}')
    else:
        price -= balance
        print(f'❌ Not enough balance, Top up with ${price}')
    
    print('\nThank you for using the vending machine!')


products = [
    ('Snickers', 2),
    ('Oreo', 5),
    ('KitKat', 22),
    ('Mars', 3),
]

vendingMachine(products, 10) 






# for index, (name, price) in enumerate(products):
#     print(f'{index},   {name}, {price}')
# product, price = products[0]
# print(product, price)


