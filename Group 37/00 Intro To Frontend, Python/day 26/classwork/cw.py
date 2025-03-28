# user_input = input('Enter your name: ')

# if user_input == "achiko":
#     print('access granted')
# else:
#     print('access denied')



# string functions

# # .lower() - აპატარავებს ყველა ასოს.
# name1 = 'GROUP'
# print(name1.lower()) # -> group 


# # .upper() - ადიდებს ყველა ასოს.
# name2 = 'group'
# print(name2.upper()) # -> GROUP


# # .capitalize() - ადიდებს პირველ ასოს, აპატარავებს დანარჩენს.
# name3 = 'group'
# print(name3.capitalize()) # -> Group


# # .find() - ეძებს სტრინგში ფრჩხილში ჩასმული ასოს ინდექსს.
# name = 'academy'
# print(name.find('y')) # -> 6

# print('secret word: ******')
# print()




# secret_word = 'revazi'
# print('secret word: ******')
# print()

# user_guess = input('Guess a letter: ') 

# index_of_letter = secret_word.find(user_guess)

# if index_of_letter == -1:
#     print('wrong guess')
# else:
#     print(f'you won, index of that letter is {index_of_letter}')



# list functions

# len() - ითვლის თუ რამდენი ელემენტია სიაში.
friends = ['irakli', 'dito', 'achiko', 'dachi', 'giorgi']

print(len(friends)) # -> 5

movie = 'avatar'
print(len(movie)) # -> 6


# .append() - ამატებს ელემენტს სიის ბოლოში.
friends = ['irakli','dachi','giorgi']

friends.append('ilia')
print(friends)

friends.append('aleksi')
print(friends)


# insert() - ამატებს ელემენტს სიის კონკრეტულ ინდექსში.
#             0         1       2          3       4
friends = ['irakli', 'dito', 'achiko', 'dachi', 'giorgi']
friends.insert(3, 'sandro')

print(friends)

# pop() - ამოაგდებს შესაბამისი ინდექსის ელემენტს სიიდან.
list = ['word', 'dog', 'book', 'lamp']
list.pop(1)

print(list)