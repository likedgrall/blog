from django.shortcuts import render
import random
# Create your views here.

def index(request):
    return render(request, './Core/index.html')

def main(request):
    return render(request, './Core/main.html')

def magic(request):
    # result = "Welcome to the game, to continue the game, enter a number"
    randomNumber = random.randint(1, 10)
    if request.method == 'POST':
        inputUser = request.POST['userNumber']   
        print(randomNumber) 
        print(inputUser == randomNumber)
        print(inputUser)
        if inputUser == "":
            inputUser = 0
        if int(inputUser) == randomNumber:
            result = "You win!"
        else:
            result = "You lose!"    
        return render(request, './Core/magicNumber.html', {'random':randomNumber, 'result':result})  
    return render(request, './Core/magicNumber.html', {'random':randomNumber})
    