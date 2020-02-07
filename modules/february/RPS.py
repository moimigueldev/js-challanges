from random import randrange

wins = 0
draws = 0
loses = 0
isPlaying = 0
userChoise = ''
compChoise = ''
choices = ['rock', 'paper', 'scissors']


# wouldLikeToPlay = input("Would You like to play? Y/n > ")


def game():
    compChoise = choices[randrange(3)]
    userChoise = choices[int(input("Choose: (1)Rock, (2)Paper, (3)Scissors > ")) - 1]
    print('Playing the game', userChoise, compChoise)


game()
# if (wouldLikeToPlay != 'y'):
#     print("ok See you later")
# else:
#     game()
