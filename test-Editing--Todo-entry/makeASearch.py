from pprint import pprint
from secretkeys import secretkey1
currentdirectory = secretkey1
with open(f"{secretkey1}/progress.txt", "r") as openFile:
    storeFile_Lines = openFile.readlines()

# process:

String = ""
for i in storeFile_Lines:
    String += i
newListofLines = String.split("\n")
# print(newListofLines)


# read line by line, get line---length:  # then write 

with open(f"{secretkey1}/post-progress---processed.txt", "w") as openFile:
    longestLine = 0
    for i in storeFile_Lines:
        getLengthOfI = len(i)
        if getLengthOfI > longestLine:
            longestLine = getLengthOfI
        # print("longestLine: ", longestLine)
    for i in newListofLines:
        if i == "":
            continue
        # stringAppended = i.ljust(longestLine+5) + "|-".ljust(longestLine+5-1)
        stringAppended = f"|  {i}".ljust(longestLine+5) + "| ".ljust(longestLine+5-1) + "| ".ljust(longestLine+5-1) + "| " "\n"
        print(stringAppended)
        if i in ["Introduction", "Prerequisites", "Git Basics", "HTML Foundations", "CSS Foundations", "Flexbox", "JavaScript Basics", "Conclusion"]:
            openFile.write("-".ljust((longestLine+5)*3+3,"-")+"\n")
        openFile.write(stringAppended)
        if i in ["Introduction", "Prerequisites", "Git Basics", "HTML Foundations", "CSS Foundations", "Flexbox", "JavaScript Basics", "Conclusion"]:
            openFile.write("-".ljust((longestLine+5)*3+3,"-")+"\n")
    openFile.write("-".ljust((longestLine+5)*3+3,"-")+"\n")
