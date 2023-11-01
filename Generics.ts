class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | null {
        if (this.items.length === 0) {
            return null;
        }
        // @ts-ignore
        return this.items.shift();
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue("2");
queue.enqueue(3);

console.log(queue);
console.log(queue.dequeue());
console.log(queue);