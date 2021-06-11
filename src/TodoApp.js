import { LitElement, html, css } from 'lit-element';
export class TodoApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        min-height: 360px;
        max-width: 960px;
        margin: 50px auto;
        text-align: center;
        padding: 15px;
        background-color: #fff;
        border-radius: 8px;
      }

      main {
        flex-grow: 1;
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <main>
        <todo-input></todo-input>
        <todo-tasks-list></todo-tasks-list>
      </main>

      <p class="app-footer">
        Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/byJavimo"
          >byJavimo</a
        >.
      </p>
    `;
  }
}
