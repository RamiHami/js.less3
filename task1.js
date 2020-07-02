doit:
    for (let i = 3; i <= 100; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue doit;
        }

        console.log( i );
    }

    