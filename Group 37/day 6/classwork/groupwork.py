import random

# ლიდერების სია
leader0 = ['ნიკოლოზ გირგვლიანი']
leader1 = ['ალექსი დოლიძე']
leader2 = ['დიტო ღუბელაძე']

# აქ არის დარჩენილი მოსწავლეების სია
remaining = ['იოანე აბულაძე', 'დავით დევაძე',
              'აჩიკო უთრუგაშვილი', 
             'დაჩი ბითაძე', 'რევაზ ფერაძე', 
             'მათე მასიურაძე', 
             'სალომე ობგაიძე', 
             'გიორგი გურგენიძე', 'ტარიელ ჯანგულაშვილი', 
             ' საბა ხიდაშელი', 'ნიკოლოზ მურჯიკნელი']


# გადანაწილება
def randomize(leader_arr):
    for i in range(3):
        student = random.choice(remaining)
        leader_arr.append(student)
        remaining.remove(student)

randomize(leader0)
randomize(leader1)
randomize(leader2)
leader2 = leader2 + remaining

# საბოლოო შედეგი
print(f" Group: {leader0}")
print(f" Group: {leader1}")
print(f" Group: {leader2}")








