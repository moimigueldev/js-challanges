from random import randrange




choices = ['rock', 'paper', 'scissors']
wins = 0
draws = 0
loses = 0




def game():
    compChoise = choices[randrange(3)]
    userChoise = choices[int(input("Choose: (1)Rock, (2)Paper, (3)Scissors > ")) - 1]
    
    global wins
    global draws
    global loses

    print(f"Choices:", userChoise, compChoise)
    
    if (compChoise == userChoise): 
        draws += 1
        print('draw', draws)
    elif (compChoise == 'rock' and userChoise == 'paper'):
        wins += 1
        print('user wins', wins)
    elif (compChoise == 'paper' and userChoise == 'scissors'):
        wins += 1
        print('user wins', wins)
    elif (compChoise == 'scissors' and userChoise == 'rock'):
        wins += 1
        print('user wins', wins)
    else: 
        loses += 1
        print('computer wins', loses)

    

    
def playAgain():
    wouldLikeToPlay = input("Would You like to play? Y/n > ")
    if (wouldLikeToPlay != 'y'):
        print('========================')
        print(f"Wins: {wins}, Draws: {draws}, Loses: {loses}")
        print('========================')
        return False
    else:
        return True


def playGame():
    isPlaying = True
    

    while(isPlaying):
        print('playing')
        game()
        isPlaying = playAgain()



playGame()






