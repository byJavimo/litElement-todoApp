import { LitElement, html, css } from 'lit-element';

export class TodoInput extends LitElement {
  static get properties() {
    return {
      task: { type: Object },
    };
  }

  static get styles() {
    return css`
        :host {
            display: flex;
        }

        form {
          margin: 20px auto;
        }

        input {
            padding: 15px;
            margin: 20px auto;
            justify-content: space-between;
        }

    `;
  } 

  constructor() {
    super();
    this.task = {};
  }

  //Private methods

  _createTask(task) {
    console.log('Task created =>', task);
  }

  // Private component only used in this inner component
  _createTaskButton = () => {
    return html`
        <style>
            button {
                padding: 15px;
                border: 1px  solid #AC7340;
                margin: 20px 15px;
                background-color:#fff;
                color: #AC7340;
                font-weight:600;
                cursor:pointer;
            }
        </style>
        <button> Add task </button>
    `
  }

  render() {
    return html`
      <form>
        <input id="todoInput" type="text" autocomplete="off">
          <span>
              ${this._createTaskButton()}
          </span>
      </form>

    `;
  }
}
