import datetime
year=(int(input('Введите год рожденияя ')))
mounth=(int(input('Введите месяц рожденияя ')))
day=(int(input('Введите день рожденияя ')))
x=  str(datetime.datetime.now() - datetime.datetime(year,mounth,day))
print(x[0:9])