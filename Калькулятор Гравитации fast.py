r = ((int(input('Введите растояние до Цели (в метрах) - '))))
m = (int(input('Введите массу Цели (в кг) - ')))
print("Притяжение от Земли до Цели:", ((((6.67430* (10**-11))) * (5.972*(10**24)) * m )/ (r ** 2)), 'H')