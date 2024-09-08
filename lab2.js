// 27. Tạo một hàm nhận một mảng số và trả về một mảng mới với các phần tử duy nhất
document.write("<h3>27. Tạo một hàm nhận một mảng số và trả về một mảng mới với các phần tử duy nhất:</h3>");
function getDistinctElements(arr) {
    return [...new Set(arr)];
}
let distinctArray = getDistinctElements([1, 2, 2, 3, 4, 4, 5]);
document.write(`Các phần tử duy nhất: [${distinctArray.join(", ")}]<br>`);

// 28. Tính tổng của 100 số nguyên tố đầu tiên và trả về chúng trong một mảng
document.write("<h3>28. Tính tổng của 100 số nguyên tố đầu tiên và trả về chúng trong một mảng:</h3>");
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
function sumOfFirst100Primes() {
    let primes = [];
    let num = 2;
    while (primes.length < 100) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    const sum = primes.reduce((acc, curr) => acc + curr, 0);
    return { sum, primes };
}
let { sum, primes } = sumOfFirst100Primes();
document.write(`Tổng của 100 số nguyên tố đầu tiên: ${sum}<br>Số nguyên tố: [${primes.join(", ")}]<br>`);

// 29. In khoảng cách giữa các số nguyên tố đầu tiên
document.write("<h3>29. In khoảng cách giữa các số nguyên tố đầu tiên:</h3>");
function primeDistances() {
    let primes = [];
    let num = 2;
    while (primes.length < 100) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    let distances = [];
    for (let i = 1; i < primes.length; i++) {
        distances.push(primes[i] - primes[i - 1]);
    }
    return distances;
}
let distances = primeDistances();
document.write(`Khoảng cách giữa các số nguyên tố: [${distances.join(", ")}]<br>`);

// 30. Tạo một hàm cộng hai số dương có kích thước không giới hạn. Các số được nhận dưới dạng chuỗi và kết quả cũng được trả về dưới dạng chuỗi
document.write("<h3>30. Cộng hai số dương có kích thước không giới hạn:</h3>");
function addLargeNumbers(num1, num2) {
    let carry = 0;
    let result = '';
    num1 = num1.split('').reverse();
    num2 = num2.split('').reverse();
    
    const maxLength = Math.max(num1.length, num2.length);
    
    for (let i = 0; i < maxLength; i++) {
        let digit1 = parseInt(num1[i] || '0');
        let digit2 = parseInt(num2[i] || '0');
        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    
    if (carry) result = carry + result;
    
    return result;
}
let largeSum = addLargeNumbers("123456789123456789", "987654321987654321");
document.write(`Tổng của hai số lớn: ${largeSum}<br>`);

// 31. Tạo một hàm trả về số lượng từ trong một đoạn văn
document.write("<h3>31. Đếm số lượng từ trong một đoạn văn:</h3>");
function countWords(text) {
    return text.trim().split(/\s+/).length;
}
let wordCount = countWords("Đây là một đoạn văn mẫu với bảy từ.");
document.write(`Số lượng từ: ${wordCount}<br>`);

// 32. Tạo một hàm viết hoa chữ cái đầu tiên của mỗi từ trong đoạn văn
document.write("<h3>32. Viết hoa chữ cái đầu tiên của mỗi từ trong đoạn văn:</h3>");
function capitalizeWords(text) {
    return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
let capitalizedText = capitalizeWords("xin chào thế giới đây là javascript");
document.write(`Đoạn văn viết hoa: ${capitalizedText}<br>`);

// 33. Tính tổng các số trong chuỗi phân cách bằng dấu phẩy
document.write("<h3>33. Tính tổng các số trong chuỗi phân cách bằng dấu phẩy:</h3>");
function sumCommaDelimitedString(str) {
    return str.split(',').map(Number).reduce((acc, curr) => acc + curr, 0);
}
let commaSum = sumCommaDelimitedString("1,2,3,4,5");
document.write(`Tổng của chuỗi phân cách bằng dấu phẩy: ${commaSum}<br>`);

// 34. Tạo một hàm trả về một mảng với các từ trong đoạn văn
document.write("<h3>34. Tạo một hàm trả về một mảng với các từ trong đoạn văn:</h3>");
function extractWords(text) {
    return text.split(/\s+/);
}
let wordsArray = extractWords("Đây là một đoạn văn mẫu khác.");
document.write(`Các từ được tách: [${wordsArray.join(", ")}]<br>`);

// 35. Tạo một hàm chuyển đổi chuỗi CSV thành mảng hai chiều
document.write("<h3>35. Chuyển đổi chuỗi CSV thành mảng hai chiều:</h3>");
function csvToArray(csv) {
    return csv.split('\n').map(row => row.split(','));
}
let csvArray = csvToArray("a,b,c\n1,2,3\n4,5,6");
document.write(`Chuỗi CSV thành mảng: [<br>${csvArray.map(row => `[${row.join(", ")}]`).join("<br>")}]<br>`);

// 36. Tạo một hàm chuyển đổi chuỗi thành mảng các ký tự
document.write("<h3>36. Chuyển đổi chuỗi thành mảng các ký tự:</h3>");
function stringToArray(str) {
    return Array.from(str);
}
let charArray = stringToArray("hello");
document.write(`Chuỗi thành mảng ký tự: [${charArray.join(", ")}]<br>`);

// 37. Tạo một hàm chuyển đổi chuỗi thành mảng chứa mã ASCII của từng ký tự
document.write("<h3>37. Chuyển đổi chuỗi thành mảng chứa mã ASCII của từng ký tự:</h3>");
function stringToAsciiArray(str) {
    return Array.from(str).map(char => char.charCodeAt(0));
}
let asciiArray = stringToAsciiArray("hello");
document.write(`Chuỗi thành mảng mã ASCII: [${asciiArray.join(", ")}]<br>`);

// 38. Tạo một hàm chuyển đổi một mảng chứa mã ASCII thành chuỗi
document.write("<h3>38. Tạo một hàm chuyển đổi một mảng chứa mã ASCII thành chuỗi:</h3>");
function asciiArrayToString(asciiArray) {
    return asciiArray.map(code => String.fromCharCode(code)).join('');
}
let asciiArray2 = [72, 101, 108, 108, 111];
let stringFromAscii = asciiArrayToString(asciiArray2);
document.write(`Chuỗi từ mảng mã ASCII: ${stringFromAscii}<br>`);

// 39. Cài đặt mã hóa Caesar
document.write("<h3>39. Cài đặt mã hóa Caesar:</h3>");
function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const offset = char.toUpperCase() === char ? 65 : 97;
            return String.fromCharCode(((code - offset + shift) % 26 + 26) % 26 + offset);
        }
        return char;
    }).join('');
}
let encodedText = caesarCipher("Hello World", 3);
document.write(`Chuỗi sau khi mã hóa Caesar: ${encodedText}<br>`);

// 40. Cài đặt thuật toán sắp xếp bong bóng (Bubble Sort) cho một mảng số
document.write("<h3>40. Cài đặt thuật toán sắp xếp bong bóng (Bubble Sort):</h3>");
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
let sortedArray = bubbleSort([64, 34, 25, 12, 22, 11, 90]);
document.write(`Mảng sau khi sắp xếp bong bóng: [${sortedArray.join(", ")}]<br>`);

// 41. Tạo một hàm tính khoảng cách giữa hai điểm được định nghĩa bởi tọa độ x, y
document.write("<h3>41. Tính khoảng cách giữa hai điểm được định nghĩa bởi tọa độ x, y:</h3>");
function distanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
let distance = distanceBetweenPoints(0, 0, 3, 4);
document.write(`Khoảng cách giữa hai điểm: ${distance}<br>`);

// 42. Tạo một hàm kiểm tra xem hai hình tròn được định nghĩa bởi tọa độ tâm và bán kính có giao nhau không
document.write("<h3>42. Kiểm tra xem hai hình tròn có giao nhau không:</h3>");
function circlesIntersect(x1, y1, r1, x2, y2, r2) {
    let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance <= (r1 + r2);
}
let intersect = circlesIntersect(0, 0, 5, 7, 7, 5);
document.write(`Hai hình tròn có giao nhau không: ${intersect}<br>`);

// 43. Tạo một hàm nhận một mảng hai chiều và một số, và trả về mảng một chiều chứa cột được chỉ định bởi số đó
document.write("<h3>43. Tạo một hàm trả về mảng chứa cột được chỉ định từ mảng hai chiều:</h3>");
function extractColumn(matrix, colIndex) {
    return matrix.map(row => row[colIndex]);
}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let columnArray = extractColumn(matrix, 1);
document.write(`Cột được chỉ định: [${columnArray.join(", ")}]<br>`);

// 44. Tạo một hàm chuyển đổi chuỗi chứa số nhị phân thành số
document.write("<h3>44. Chuyển đổi chuỗi chứa số nhị phân thành số:</h3>");
function binaryStringToNumber(binaryStr) {
    return parseInt(binaryStr, 2);
}
let binaryNumber = binaryStringToNumber("1101");
document.write(`Số từ chuỗi nhị phân: ${binaryNumber}<br>`);

// 45. Tạo một hàm tính tổng tất cả các số trong một mảng không đều (có thể chứa số hoặc mảng số ở nhiều cấp độ khác nhau)
document.write("<h3>45. Tính tổng tất cả các số trong mảng không đều:</h3>");
function sumJaggedArray(arr) {
    return arr.reduce((sum, item) => {
        if (Array.isArray(item)) {
            return sum + sumJaggedArray(item);
        }
        return sum + item;
    }, 0);
}
let jaggedArray = [1, [2, [3, 4], 5], 6];
let totalSum = sumJaggedArray(jaggedArray);
document.write(`Tổng của mảng không đều: ${totalSum}<br>`);

// 46. Tìm số lớn nhất trong một mảng không đều của các số hoặc mảng số
document.write("<h3>46. Tìm số lớn nhất trong mảng không đều:</h3>");
function findMaxInJaggedArray(arr) {
    return arr.reduce((max, item) => {
        if (Array.isArray(item)) {
            return Math.max(max, findMaxInJaggedArray(item));
        }
        return Math.max(max, item);
    }, -Infinity);
}
let maxNumber = findMaxInJaggedArray(jaggedArray);
document.write(`Số lớn nhất trong mảng không đều: ${maxNumber}<br>`);

// 47. Sao chép sâu một mảng không đều với các số hoặc mảng khác vào một mảng mới
document.write("<h3>47. Sao chép sâu một mảng không đều:</h3>");
function deepCopyJaggedArray(arr) {
    return arr.map(item => {
        if (Array.isArray(item)) {
            return deepCopyJaggedArray(item);
        }
        return item;
    });
}
let copiedArray = deepCopyJaggedArray(jaggedArray);
document.write(`Mảng sao chép sâu: [${JSON.stringify(copiedArray)}]<br>`);

// 48. Tạo một hàm trả về từ dài nhất trong một chuỗi
document.write("<h3>48. Tạo một hàm trả về từ dài nhất trong một chuỗi:</h3>");
function longestWord(str) {
    return str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
}
let longest = longestWord("Tìm từ dài nhất trong đoạn văn này");
document.write(`Từ dài nhất: ${longest}<br>`);

// 49. Xáo trộn một mảng các chuỗi
document.write("<h3>49. Xáo trộn một mảng các chuỗi:</h3>");
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
let shuffledArray = shuffleArray(["apple", "banana", "cherry", "date"]);
document.write(`Mảng sau khi xáo trộn: [${shuffledArray.join(", ")}]<br>`);

// 50. Tạo một hàm nhận n làm đối số và trả về một mảng gồm n số ngẫu nhiên từ 1 đến n. Các số phải là duy nhất trong mảng.
document.write("<h3>50. Tạo mảng số ngẫu nhiên duy nhất từ 1 đến n:</h3>");
function uniqueRandomNumbers(n) {
    let numbers = Array.from({ length: n }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
}
let randomNumbers = uniqueRandomNumbers(10);
document.write(`Mảng số ngẫu nhiên duy nhất: [${randomNumbers.join(", ")}]<br>`);

// 51. Tìm tần suất của các chữ cái trong một chuỗi. Trả về kết quả dưới dạng mảng các mảng. Mỗi mảng con có 2 phần tử: chữ cái và số lần xuất hiện.
document.write("<h3>51. Tìm tần suất của các chữ cái trong một chuỗi:</h3>");
function letterFrequency(str) {
    let frequency = {};
    for (let char of str) {
        if (char.match(/[a-zA-Z]/)) {
            char = char.toLowerCase();
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }
    return Object.entries(frequency);
}
let frequencyArray = letterFrequency("Hello World");
document.write(`Tần suất các chữ cái: [${frequencyArray.map(([letter, count]) => `[${letter}, ${count}]`).join(", ")}]<br>`);

// 52. Tính toán Fibonacci(500) với độ chính xác cao (tất cả các chữ số)
document.write("<h3>52. Tính toán Fibonacci(500) với độ chính xác cao:</h3>");
function fibonacci(n) {
    let a = BigInt(0);
    let b = BigInt(1);
    for (let i = 0; i < n; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return a.toString();
}
let fib500 = fibonacci(500);
document.write(`Fibonacci(500): ${fib500}<br>`);

// 53. Tính toán 70! với độ chính xác cao (tất cả các chữ số)
document.write("<h3>53. Tính toán 70! với độ chính xác cao:</h3>");
function factorial(n) {
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    return result.toString();
}
let factorial70 = factorial(70);
document.write(`70!: ${factorial70}<br>`);

