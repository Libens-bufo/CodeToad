/* https://eloquentjavascript.net/02_program_structure.html
Exercises

1. 

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

for (let aLine = '#'; aLine.length < 8; aLine += '#'){
    console.log(aLine)
   
}