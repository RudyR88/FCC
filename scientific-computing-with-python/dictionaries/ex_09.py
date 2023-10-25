fname = input('Enter File: ')
if len(fname) < 1 : fname= 'clown.txt'
openF = open(fname)

dic = dict()
for line in openF:
    line = line.rstrip()
    words = line.split()
    # populate dic
    for w in words:
        # idiom: retirve/create/update counter
        dic[w] = dic.get(w, 0) + 1
# find the most common word
largest = -1
theWord = None
for k,v in dic.items():
    if (v > largest):
        largest = v
        theWord = k # capture/remember the key
print(theWord, largest)