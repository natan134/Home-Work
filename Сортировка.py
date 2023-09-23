# Home-Work
import random
import time
#Пузырьком
array = [random.randint(0, 999999) for _ in range(50000000)]
start_time = time.time()
for i in range(len(array)):
    for j in range(len(array)-i-1):
        if array[j] > array[j+1]:
            array[j], array[j+1] = array[j+1], array[j]
end_time = time.time()
execution_time = end_time - start_time
print("Время выполнения сортировки пузырьком:", execution_time, "секунд")

# Шейкерная сортировка
array2 = [random.randint(0, 999999) for _ in range(50000000)]
start_time1 = time.time()

def shaker_sort(array2):
    left = 0
    right = len(array2) - 1
    while left <= right:
for t in range(left, right):
            if array2[t] > array2[t+1]:
                array2[t], array[t+1] = array2[t+1], array2[t]
        
        right -= 1

        for t in range(right, left, -1):
            if array2[t-1] > array2[t]:
                array2[t-1], array2[t] = array2[t], array2[t-1]
        
        left += 1

shaker_sort(array2)

end_time1 = time.time()
execution_time1 = end_time1 - start_time1

print("Время выполнения шейкерной сортировки:", execution_time1, "секунд")

# Быстрая сортировка

array3 = [random.randint(0, 999999) for _ in range(50000000)]

start_time2 = time.time()

def quick_sort(array3):
    if len(array3) <= 1:
        return array3
    else:
        pivot = array3[0]
        lesser = [element for element in array3[1:] if element <= pivot]
        greater = [element for element in array3[1:] if element > pivot]
        return quick_sort(lesser) + [pivot] + quick_sort(greater)

array3 = quick_sort(array3)

end_time2 = time.time()
execution_time2 = end_time2 - start_time2

print("Время выполнения быстрой сортировки:", execution_time2, "секунд")
