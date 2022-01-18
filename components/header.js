const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

<link rel="stylesheet" href="styles.css" />

<div class="nav-wrapper">
          <div class="left">
            <div class="nav-link-wrapper">
              <a href="./">Home</a>
            </div>
            <div class="nav-link-wrapper">
              <a href="about.html">About</a>
            </div>
          </div>
  
          <div class="right">
            <div class="brand">
              <div>Sophie Pindrys</div>
            </div>
          </div>
        </div> 

`




class Header extends HTMLElement {
    constructor() {
        super(); 
    }

    connectedCallback() {
       const shadowRoot = this.attachShadow({mode: 'closed'})
       shadowRoot.appendChild(headerTemplate.content);
       
        
        
    }
}

customElements.define('header-component', Header);
