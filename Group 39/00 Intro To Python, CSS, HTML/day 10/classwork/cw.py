# True ან False - Boolean

# 5 > 3 # True
# 2 < 4 # True
# 3 > 4 # False
# 2 >= 2 # True
# 3 <= 5 # True
# 6 <= 3 # False
# 3 == 3 # True
# 2 == 4 # False
# 2 != 3 # True
# 4 != 5 # True
# 6 != 6 # False


# print(5 > 3)
# print(3 != 3)

# != - არ უდრის

# 2 != 4 # True
# 2 != 2 # False
# print(3 != 4) # True


# soil_moisture = 80

# print(soil_moisture < 100)


# # and (ორივე მხარე უნდა იყოს True, რომ გამოგვიტანოს True
# #      სხვა შემთხვევაში გამოგვიტანს False)

# True and False # False
# False and True # False
# False and False # False
# True and True # True

# # or (ერთ-ერთი მხარე მაინც უნდა იყოს True, რომ გამოგვიტანოს True, 
# #     თუ არცერთი მხარე არარის True, გამოგვიტანს False)

# True or False # True
# False or True # True
# False or False # False 
# True or True # True

# name = 'goa'
# user_heartbeat = True
# user_adult = False


# print(True and user_adult) # False
# print(user_heartbeat or False) # True
# print(False or user_adult) # False
# print(True and user_heartbeat) # True


import random

# ლიდერების სია
leaders = {
    "ლუკა მირიანაშვილი": [],
    "თორნიკე ღორაშვილი": [],
    "მარიამ გელაშვილი": [],
    "სანან მამედოვი": []
}

# დარჩენილი მოსწავლეების სია
remaining = ["ალექსანდრე სამუშია", "ილია ჩიქოვანი", "დავით დევაძე", 
             "მარიამ ჩაიძე", "ნიკოლოზ ბატურინი", "ნიკუშა არჯევანიძე", 
             "ფილიპე ბურჭულაძე", "ანასტასია ნათელაური", 
             "ბენი ხუხაშვილი", "თენგო ნავერიანი",
             "მიხეილ კაპანაძე", "თეკლა მანდარია", "ლაზარე კუკავა", 
             "საბა ღლიღვაშვილი",
             "გიორგი ურიდია", "ალექს ჭითანავა", "გაბრიელ რობაქიძე"]


random.shuffle(remaining)


leader_names = list(leaders.keys())
for i, student in enumerate(remaining):
    leaders[leader_names[i % len(leader_names)]].append(student)


for leader, members in leaders.items():
    print(f"{leader}: {', '.join(members)}")
