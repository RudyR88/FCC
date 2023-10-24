theFile = open('mbox-short.txt')

for line in theFile:
    line = line.rstrip()
    words = line.split()
    if words[0] != 'From':
        continue
    print(words[2])