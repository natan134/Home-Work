from math import pow
r = int(input('Введите растояние до Цели (в км) - '))
m = int(input('Введите массу Цели (в тоннах) - '))
G = 6.67430* pow(10,-11)
M = 5.972*pow(10,24)
attraction = (G * M * m) / (r ** 2)
print("Притяжение от Земли до Цели:", attraction, 'H')
