import { TodoApp } from './TodoApp.js';
import { TodoInput} from './components/TodoInput.js';
import {TodoTasksList} from './components/TodoTasksList.js';

customElements.define('todo-tasks-list', TodoTasksList);
customElements.define('todo-input', TodoInput);
customElements.define('todo-app', TodoApp);
