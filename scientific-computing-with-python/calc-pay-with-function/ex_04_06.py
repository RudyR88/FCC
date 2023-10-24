def computepay(hours, rate):
    if fHours > 40:
        # Overtime
        reg = fRate * fHours
        otp =  (fHours - 40.0) * (fRate * 0.5)
        return reg + otp
    else:
        # Regular
        return fRate * fHours


entHours = input('Enter Hours: ')
entRate = input('Enter Rate: ')

try: 
    fHours = float(entHours)
    fRate = float(entRate)
except:
    print("Error, please enter numeric input")
    quit()

pay = computepay(fHours, fRate)

print("Pay:", pay)