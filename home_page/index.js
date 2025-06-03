class MyComponent extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })

    shadow.innerHTML = `
      <style>
        p {
          color: blue;
        }
      </style>
      <p>Hello from MyComponent!</p>
      <button>Click me</button>
    `

    shadow.querySelector('button').addEventListener('click', () => {
      alert('Button clicked!')
    })
  }
}

customElements.define('my-component', MyComponent)
