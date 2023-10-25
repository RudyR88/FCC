fname = input('Enter File: ')
if len(fname) < 1 : fname = 'clown.txt'
openF = open(fname)

dic = dict()
for line in openF:
    line = line.rstrip()
    words = line.split()
    # populate dic
    for w in words:
        # idiom: retirve/create/update counter
        dic[w] = dic.get(w, 0) + 1

tmp = list()
for k,v in dic.items():
    newTuple = (v,k)
    tmp.append(newTuple)
    tmp = sorted(tmp, reverse=True)

for v,k in tmp[:5]:
    print(k, v)