//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

doit:
    for (let i = 3; i <= 100; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue doit;
        }

        console.log( i );
    }

    
