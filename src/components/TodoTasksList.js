import { LitElement, html, css } from 'lit-element';
import Fontawesome from 'lit-fontawesome';

export class TodoTasksList extends LitElement {
  static get properties() {
    return {
      tasksList: { type: Array },
    };
  }

  static get styles() {
    return [ 
        Fontawesome,
        css`
        ul {
            list-style-type: none;
            padding: 0;
            max-height: 300px;
            overflow: auto;
            text-align: left;
            width: 500px;
        }

        .task {
            padding: 10px 8px;
            margin: 10px 0; 
            overflow-wrap: break-word;
            display: flex;
            justify-content: space-between;
        }

        .task .close-btn {
            margin-top: 5px;
            cursor:pointer;
            color:#AC7340;
        }
    `
     ];
   
  }

  constructor() {
    super();
    this.tasksList = [
        {
            id: 1,
            title: 'Tarea 1',
            status: 'completed'
        }
    ];
  }

  taskCoponent = (task) => {
    return html `
        <li class="task"> ${task.title} <i class="close-btn fas fa-times-circle"></i></li>
    `
  }

  render() {
    return html`
        <ul>
            ${this.tasksList.map((element) => this.taskCoponent(element))}
        </ul>
    `;
  }
}
