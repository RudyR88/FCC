entHours = input('Enter Hours: ')
entRate = input('Enter Rate: ')
fHours = float(entHours)
fRate = float(entRate)
if fHours > 40:
    # Overtime
    reg = fRate * fHours
    otp =  (fHours - 40.0) * (fRate * 0.5)
    pay = reg + otp
else:
    # Regular
    pay = fRate * fHours

print("Pay:", pay)