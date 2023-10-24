entHours = input('Enter Hours: ')
entRate = input('Enter Rate: ')
try: 
    fHours = float(entHours)
    fRate = float(entRate)
except:
    print("Error, please enter numeric input")
    quit()
    
if fHours > 40:
    # Overtime
    reg = fRate * fHours
    otp =  (fHours - 40.0) * (fRate * 0.5)
    pay = reg + otp
else:
    # Regular
    pay = fRate * fHours

print("Pay:", pay)