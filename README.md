# The Project - Password Generator

A random password generator application has been developed using javascript. This application runs in the browser featuring dynamically updated HTML and CSS scripts. This application allows an employee can use to generate a random password based on criteria they’ve selected by modifying starter code.

## How the program works

A user clicks on a button to generate a password.
A series of prompts pop up, requiring user input for the following password criteria.

1.How many characters would you like in your password
2.The number of characters is between 8 and 128 chars.
3.If user input is < 8 and > than 128 the user is asked to try again.
4.If user input is between 8 and 128 the rest of the prompt continues.

# Password Criteria Prompts

5. The user is asked whether to include numbers in the password with OK/Cancel options.
6. The user is asked whether to include special characters in the password with OK/Cancel options.
7. The user is asked whether to include uppercase in the password with OK/Cancel options.
8. The user is asked whether to include lowercase in the password with OK/Cancel options.

If the user selects one or more Cancel option in the above Password Criteria Prompt, user is asked to try again.

Once user has satisfied all the selection criteria a password containing numbers, characters, uppercase letters, and lowercase letters is generated and dipslayed in the password box.

# Screenshots

A series of screenshots have been uploadded under Issues to demonstrate the testing phases that was carried out. A copy of the screenshots have also been uploaded under the Assets folder.

# 1 - The password form
![](Assets/1-Password%20generator%20form.png)

# 2 - User inputs number 6 when prompted how many characters to include in the password
![](Assets/1-Password%20generator%20form.png)

# 3 - User inputs number 6
![](Assets/2-input%206.png)

# 4 - Because number 6 is < 8 user is prompted again
![](Assets/3-prompt%20try%20again.png)

# 5 - User inputs number 129
![](Assets/4-user%20input%20129.png)

# 6 - Beacuse 129 > 128 user is promped again
![](Assets/5-user%20prompted%20try%20agian.png)

# 7 - User inputs number 128
![](Assets/6-input%20128.png)

# 8 - User is prompted whether to iclude numbers in the password - User selects cancel
![](Assets/7-prompt%20for%20numbers%20-%20select%20cancel.png)

# 9 - User is prompted whether to include special characters in the password - User selects Yes
![](Assets/8-prompt%20special%20characters%20-%20select%20yes.png)

# 10 - User is prompted whether to include upper case in the password - User selects Yes
![](Assets/9-prompt%20upper%20case%20-%20select%20yes.png)

# 11 - User is prompted whether to include lower case in the password - User selects Yes
![](Assets/10-prompt%20lower%20case%20-%20select%20yes.png)

# 12 - Because user selected not to include numbers @ No.8 user is re-prompted
![](Assets/11-prompt-%20option%20missed.png)

# 11 - Finally user chooses Yes for all prompts and the form outputs 128 character password
![](Assets/12-output%20128%20characters.png)











