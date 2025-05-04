// Task 1

// function propsCount(currentObject) {
//     return Object.keys(currentObject).length;
// }

// let mentor = { 
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development" 
// };

// console.log(propsCount(mentor));


// Task 2

// function showProps(obj) {
//     let props = Object.keys(obj);
//     let values = Object.values(obj);
//     console.log("Properties:", props);
//     console.log("Values:", values);
// }

// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     color: "black",
//     engine: "1.8L"
// };

// showProps(car);

// Task 3

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     showFullName() {
//         return `${this.surname} ${this.name}`;
//     }
// }

// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }

//     showFullName(midleName) {
//         return `${this.surname} ${this.name} ${midleName}`;
//     }

//     showCourse() {
//         const currentYear = new Date().getFullYear();
//         const course = currentYear - this.year;
//         return course >= 1 && course <= 6 ? course : "Graduated or invalid year";
//     }
// }

// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());


// Task 4

// class Worker {
//     #experience = 1.2;

//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }

//     showSalary() {
//         let salary = this.dayRate * this.workingDays;
//         console.log(`${this.fullName} salary: ${salary}`);
//         return salary;
//     }

//     showSalaryWithExperience() {
//         let salary = this.dayRate * this.workingDays * this.#experience;
//         console.log(`${this.fullName} salary with experience: ${salary}`);
//         return salary;
//     }

//     get showExp() {
//         return this.#experience;
//     }

//     set setExp(value) {
//         this.#experience = value;
//     }
// }

// // Створення екземплярів
// let worker1 = new Worker("John Johnson", 20, 23);
// let worker2 = new Worker("Tom Tomson", 48, 22);
// let worker3 = new Worker("Andy Ander", 29, 23);

// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// worker2.showSalary();
// worker2.setExp = 1.5;
// worker2.showSalaryWithExperience();

// worker3.showSalary();
// worker3.setExp = 1.5;
// worker3.showSalaryWithExperience();

// let workers = [worker1, worker2, worker3];
// workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());

// console.log("Sorted salary:");
// workers.forEach(worker => {
//     console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
// });

// Task 5

class GeometricFigure {
    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }

    getArea() {
        return this.side * this.side;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

function handleFigures(figures) {
    return figures.reduce((total, figure) => {
        if (figure instanceof GeometricFigure) {
            const area = figure.getArea();
            console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
            return total + area;
        }
        return total;
    }, 0);
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log("Total area:", handleFigures(figures));
