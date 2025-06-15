# grocery = ['bread', 'milk', 'water', 'cheese']

# # enumerate()

# for index, element in enumerate(grocery):
#     print(element + ' is on index ' + str(index))




# grocery = ['bread', 'milk', 'water', 'cheese']

# # enumerate()

# for element in grocery:
#     print(element)


# grocery = ['bread', 'milk', 'water', 'cheese']
# e = enumerate(grocery)

# print(list(e))



# # გავარკვიოთ 'water'-ის ინდექსი

# grocery = ['bread', 'milk', 'water', 'cheese']

# for index, element in enumerate(grocery):
#     if element == 'water':
#         print(index)



# # დავადგინოთ რომელი ელემენტია მე-3 ინდექსზე

# grocery = ['bread', 'milk', 'water', 'cheese']

# for index, name in enumerate(grocery):
#     if index == 3:
#         print(name)


# #                                      -1
# grocery = ['bread', 'milk', 'water', 'cheese']

# for index, name in enumerate(grocery, start=-1):
#      print(index, name)


# grocery = ['bread', 'milk', 'water', 'cheese']
# start_index = -len(grocery)

# # 4 ელემენტი, -4

# for index, name in enumerate(grocery, start=start_index):
#     print(index, name)

# year = 1700

# 1699

# result = ((year - 1) // 100) + 1
# print(result)

# result = (year + 99) // 100
# print(result)



# print(int(1.6))


# name = 'java script intermediate'

# result = name.split('a')
# print(result)


# list = ['apple', 'milk', 'water']


# #        რითი ვაერთებთ ელემენტებს ⬇️, join(list)
# result = ' and  '.join(list)
# print(result)


# https://www.w3schools.com/python/ref_string_split.asp
# https://www.w3schools.com/python/ref_string_join.asp
# https://www.w3schools.com/python/ref_func_enumerate.asp


# # 0.5ლ თითო საათში

# hour = 3

# print(3*0.5)

# print(int(1.5))

fruits = ['apple', 'milk', 'water']

print(fruits.index('milk'))
print(fruits.index('apple'))