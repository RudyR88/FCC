num = 0
total = 0.0

while True:
    sval = input('Enter a number: ')
    if sval.lower() == 'done':
        break
    try:
        fval = float(sval)
    except:
        print('Invalid input')
        continue
    print(fval)
    num += 1
    total += fval

print(total, num, total/num)