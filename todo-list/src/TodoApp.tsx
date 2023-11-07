import React, {Component} from 'react';

type State = {
    tasks: { text: string; completed: boolean }[];
    filter: 'all' | 'completed' | 'uncompleted';
}

class TodoApp extends Component<{}, State> {
    componentDidMount() {
        console.log('Компонент був доданий на сторінку');
    }

    componentDidUpdate(currentState: State) {
        if (currentState.tasks !== this.state.tasks) {
            console.log('Список завдань змінився');
        }
        if (currentState.filter !== this.state.filter) {
            console.log('Обраний фільтр змінився');
        }
    }

    constructor(props: {}) {
        super(props);

        this.state = {
            tasks: [],
            filter: 'all',
        };


    }

    render() {
        const {tasks, filter} = this.state;

        const filteredTasks =
            filter === 'all'
                ? tasks
                : filter === 'completed'
                    ? tasks.filter((task) => task.completed)
                    : tasks.filter((task) => !task.completed);

        return (
            <div>
                <h1>React App</h1>
                <input className='task-input' type='text'/>
                <button onClick={this.addTask}>Додати</button>
                <div>
                    <button onClick={() => this.changeFilterOption('all')}>Всі</button>
                    <button onClick={() => this.changeFilterOption('completed')}>Виконані</button>
                    <button onClick={() => this.changeFilterOption('uncompleted')}>Не виконані</button>
                </div>
                <ul>
                    {filteredTasks.map((task, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => this.toggleTask(index)}
                            />
                            {task.text}
                            <button onClick={() => this.deleteTask(index)}>Видалити</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    addTask = () => {
        const taskInput = document.querySelector('.task-input') as HTMLInputElement;
        const taskText = taskInput.value;
        console.log(this.state.tasks);
        if (taskText) {
            const task = {text: taskText, completed: false};
            this.setState((currentState) => ({
                tasks: [...currentState.tasks, task],
            }));
            taskInput.value = '';
        }
    }

    deleteTask = (index: number) => {
        const {tasks} = this.state;
        tasks.splice(index, 1);
        this.setState({tasks});
    }

    toggleTask = (index: number) => {
        const {tasks} = this.state;
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;

        this.setState({tasks: updatedTasks});
    }

    changeFilterOption = (filterOption: 'all' | 'completed' | 'uncompleted') => {
        this.setState({filter: filterOption});
    }
}

export default TodoApp;