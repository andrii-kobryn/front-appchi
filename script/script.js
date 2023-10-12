function createStudent(name, age, points) {
    return {
        name: name,
        age: age,
        points: points
    }
}

const student = createStudent("A", 16, [1,2,3])

function printData(student) {
    console.log(`Тип поля name: ${typeof student.name}`)
    console.log(`Тип поля age: ${typeof student.age}`)
    console.log(`Тип поля points: ${typeof student.points}`)

    console.log(`name: ${student.name}`)
    console.log(`age: ${student.age}`)
    console.log(`points: ${student.points}`)
}

function calculateAverageGrade(student) {
    if(student.points.length < 3){
        console.log("Не менше 3 оцінок")
    }
    let sum = 0;
    for (let i = 0; i < student.points.length; i++) {
        sum += student.points[i];
    }
    console.log(`Середній бал студента: ${sum/student.points.length}`)
}

printData(student)
calculateAverageGrade(student)