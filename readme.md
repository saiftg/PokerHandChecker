* JS file to check poker hands and determine winner


This could be a LOT simpler and cleaner, but thats for another day


Just used a ton of if/else to determine hand superiority,  rank points for the different hands, and head-to-head for highcard when its a tie.


- An array for each player
- Each player gets an empty array each for rank score and high card.
- RegEx to split the the card number and suit
- 'for' loop to convert the alphabets to numbers
- 'sort' the hand arrays to arrange and splice to remove ""s
- function to check hands, push rank score and high card(after parseInt) into their appropriate arrays
- function runs the previous functions to see who wins and deal with pesky ties 
- Great Success