"use strict"

//task1
{
    let getSum = (a,b,c) => {
        return (a - b) / c;
    }

    console.log(getSum(15,5,2));
    console.log("\n");
}

//task2
{
    let getPow = (a) => {
        return (`${a} в квадрате = ${Math.pow(a,2)}, ${a} в кубе = ${Math.pow(a,3)}`);
    }

    console.log(getPow(3));
    console.log("\n");
}

//task3
{
    let min = function(a,b) {
        console.log(`Numbers: ${a}, ${b} `)
        return  a < b ? a : b ;
    }

    let max = function(a,b) {
        console.log(`Numbers: ${a}, ${b} `);
        return a > b ? a : b;
    }

    console.log(min(1,6));
    console.log(max(7,4));

    console.log("\n");
}

//task4
{
    // let ques;
    // let arr = [];

    // function getArray(sizeArray){
    //     for(let i = 0; i < sizeArray; i++){
    //         ques = prompt("Введите элемент массива");
    //         arr[i] = ques;
    //     }

    //     return arr;
    // }

    // function showArray(){
    //     let show = getArray(prompt("Введите длину массива"));
    //     console.log(show);
    // }

    // showArray();

    // console.log("\n");
}


//task5
{
    const isEven = (a) => {
        return a % 2 === 0 ? true : false;
    }

    console.log(isEven(3));

    console.log("\n");

//task6 

    let newArr = []; 

    const showArr = function(array){
       newArr = array.filter(item => isEven(item))

       return newArr
    }

    console.log(showArr([1,2,3,4,5,6,7,12,199,298]));
    
    console.log("\n");
}

//task7 
{
   let drawTriangle = function(size, symbol) {
        for(let i = 0; i <= size; i++){
            for(let j = 0; j < i; j++){
                if(symbol === undefined) document.write(i);
                else document.write(symbol)
            }
            document.write("<br>")
        }
   }

   drawTriangle(9)
}

//task8
{   
    // function showTriangle(size){
    //     let sym = "*";
    //     let line = [];
    //     let countSpace = size - 1;

    //     for(let i = 1; i <= size; i++){
    //         let space = " ".repeat(countSpace);

    //         countSpace--;

    //         line.push(space + sym + space);

    //         sym+="**"   
    //     }

    //     for(let i = 0; i < line.length; i++){
    //         console.log(line[i])
    //     }

    //     console.log("\n");
    // }
    
    // function showReverseTriangle(size){
    //     let sym = "*";
    //     let line = [];
    //     let countSpace = size - 1;

    //     for(let i = 1; i <= size; i++){
    //         let space = " ".repeat(countSpace);

    //         countSpace--;

    //         line.push(space + sym + space);

    //         sym+="**"   
    //     }

    //     line.reverse();

    //     for(let i = 0; i < line.length; i++){
    //         console.log(line[i])
    //     }
    // }

    // showTriangle(prompt("Введите количество рядов треугольника"));

    // showReverseTriangle(prompt("Введите количество рядов перевернутого треугольника"));

    // console.log("\n");
}


//task9
{
    function getFibArr(num){
        let arr = [];

        for (let i = 0; i< num; i++) {
            if (i === 0 || i === 1) arr[i] = 1;
            else arr[i] = arr[i-1] + arr[i-2]

            if(arr[i] > 1000){
                arr.pop();
                break;
            }
        }
        return `Числа Фибоначи: ${arr}`
    }

    console.log(getFibArr(1000))
    console.log("\n");
}

//task10
{
    let recursion = function(num){
        
        console.log(num)

        let arr = String(num).split('').map(Number);
        let sum = arr.reduce((a,b) => a + b)

        if(sum > 9){
            sum = recursion(sum)
            return sum;
        }else {
            return `Сумма элементов: ${sum}`
        }
    }

    console.log(recursion(88))
    console.log("\n");
}

//task11
{
    let showElemOfArray = function(arr, i = 0) {
        if(i === arr.length) return;
        else{
            console.log(arr[i])
            showElemOfArray(arr, i + 1)
        }
    }
    
    showElemOfArray([1,2,3,4,5])
}


//task12
{
    
}

//task13 не всегда работает не корректно
{
    let rus = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    let RUS = rus.toUpperCase();
    let rusArray = rus.split('');
    let RUSArray = RUS.split('');
    let EmailArray = [];
    let arrayBeforeSobaka = [];
    let domenArray = [];
    let arrayInside = [];
    let forbiddenSymbolsInEmail = `'^$*+?!~-,`;

    let checkEmail = function(){

        let question = prompt("Введите адрес электронной почты")
        EmailArray = question.split('');

        for(let i = 0; i < EmailArray.length; i++){
            for(let j = 0; j < rus.length; j++){
                if(EmailArray[i] === rusArray[j] || EmailArray[i] === RUSArray[j]){

                    alert("Введите почту правильно");
                    EmailArray = [];
                    checkEmail();
                    
                }
            }
            
            for(let j = 0; j < forbiddenSymbolsInEmail.length; j++){
                if(EmailArray[i] === forbiddenSymbolsInEmail[j]){

                    alert("Введите почту правильно");
                    EmailArray = [];
                    checkEmail();

                }
            }
        }

        let sobakaInd = EmailArray.indexOf('@');
        arrayBeforeSobaka = EmailArray.slice(0, sobakaInd)
        if(sobakaInd === -1){
            
            alert("Почта не содержит '@'")
            checkEmail();

        } else if(arrayBeforeSobaka.length < 2){

            alert("Имя эл. почты (до знака @) должно быть длиной более 2 символов")
            checkEmail();
            
        } else{
            let dot = EmailArray.indexOf('.');

            arrayInside = EmailArray.slice(sobakaInd+1, dot)

            domenArray = EmailArray.slice(dot+1)
            
            if(dot === -1){

                alert("Почта введена не правильно")
                checkEmail();

            } else if(domenArray.length < 2 || domenArray.length > 11){

                alert("Введите правильный домен верхнего уровня (by, com, ...)")

                checkEmail();

            }else if(sobakaInd > dot){

                alert("Почта введена не правильно")
                checkEmail();

            }else if(arrayInside.length < 2 || arrayInside.length > 11){

                alert("Почта введена не правильно")
                checkEmail();

            }else{

                alert("Ваша почта отправлена на обработку")

                question = EmailArray.join('');

                console.log(question)

            }
        }

    }

    checkEmail();
}