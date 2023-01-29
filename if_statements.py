

ice_cream_check = ['flake', 'sauce', 'milk']
ice_cream_request = ['mustard', 'sugar', 'cone', 'milk']

#This checksusing a comaprison of multiple lists between one another. The available items are printed. 

for request_topping in ice_cream_request:
    if request_topping in ice_cream_check:
        print(f'this {request_topping} works')
    else:
        print(f'this {request_topping} is a no')
print('your ice cream is ready')





#Checking for usernames with the lowercase function
current_user = ['omar', 'tariq', 'shaek']

new_user = ['OmAr', 'rabia', 'jimothy']

for userss in new_user:
    if userss.lower() in current_user:
        print(f'{userss} is taken' )
    else:
        print(f'{userss} is available ')

#Nesting 

aliens = []

#make 30 green aliens, range will create a fleet of 30 ships
for alien_number in range(30):
    new_alien = {'color': 'green', 'points': 5, 'speed': 'slow'}
    aliens.append(new_alien)

#show the first 5 aliens. 
for alien in aliens[:5]:
    print(alien)
print("...")

for alien in aliens[:3]:
    if alien['color'] == 'green':
        alien['color'] = 'yellow'
        alien['speed'] = 'medium'
        alien['points'] = 10

#show how many aliens have been created.
print(f"Total number of aliens: {len(aliens)}")