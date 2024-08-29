print('''available products: 
      
cola(1), fanta(2), sprite(3), 
lays(4), doritos(5), pringles(6), 
kitkat(7), bounty(8), snikers(9).
      
      ''')

user_input = int(input('Enter product number: ')) 

products = ['cola', 'fanta', 'sprite',
            'lays', 'doritos', 'pringles',
            'kitkat', 'bounty', 'snikers']

user_choice = products[user_input-1] 

print(' ')
print('You recieved ' + user_choice + '!')
print(' ')







