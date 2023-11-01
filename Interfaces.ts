interface IPerson {
    name: string;
    age: number;
}

interface IWorker extends IPerson {
    position: string;
    salary: number;
}


class WorkerImpl implements IWorker {
    age: number;
    name: string;
    position: string;
    salary: number;

    constructor(age: number, name: string, position: string, salary: number) {
        this.age = age;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }


    getSalary(): number {
        return this.salary;
    }

    setSalary(value: number) {
        this.salary = value;
    }
}

const worker = new WorkerImpl(23, "A", "A+", 1_000_000);
console.log(`Old salary ${worker.getSalary()}`);
worker.setSalary(1_000_001);
console.log(`New salary ${worker.getSalary()}`);