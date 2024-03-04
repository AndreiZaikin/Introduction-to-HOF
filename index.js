let arr;

console.log('Задание 1: Использование forEach для вывода элементов массив');
arr = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];
arr.forEach((name) => console.log(`Привет, ${name}`));

console.log('\nЗадание2: Использование map для преобразования массива');
arr = [1, 2, 3, 4, 5];
processedArr = arr.map((num) => num * 10);
console.log(processedArr);

console.log('\nЗадание 3: Использование filter для фильтрации массива');
arr = [5, 12, 8, 130, 44];
processedArr = arr.filter((num) => num > 10);
console.log(processedArr);

console.log('\nЗадание 4: Комбинирование map и filter для обработки данных');
const getDescription = ({name, age}) => {
    let strYear;
    div10 = age % 10;
    div100 = age % 100;
    if (div10 === 0 && (div10 > 4 || div10 < 10) && (div100 > 10 || div100 <15)) {
        strYear = 'лет';
    } else if (div10 === 1) {
        strYear = 'год';
    } else {
        strYear = 'года';
    };
    return `${name} (${age} ${strYear})`;    
};
arr = [{name: 'Иван', age: 23}, {name: 'Мария', age: 18}, {name: 'Алексей', age: 32}, {name: 'Ольга', age: 24}, {name: 'Сергей', age: 17}, {name: 'Анна', age: 21}];
processedArr = arr.filter((user) => user.age > 18).map((user) => getDescription(user));
console.log(processedArr);

console.log('\nЗадание 5: Использование reduce для агрегации данных');
arr = [{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}];
total = arr.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
console.log(`Общая стоимость продаж: ${total}`);
