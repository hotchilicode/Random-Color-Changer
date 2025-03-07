const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

        const sum = numbers.reduce((total, number) => total + number, 0);
        const average = sum / numbers.length;

        console.log(`average: ${average}`);


        function changeColor(){
            var color = ['red', 'green', 'blue', 'yellow', 'black', 'white', 'gray', 'orange', 'pink', 'violet', 'brown'];

            var randomColor = color[Math.floor(Math.random() * color.length)];

            document.body.style.backgroundColor = randomColor;

            }