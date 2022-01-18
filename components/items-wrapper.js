 

 

class itemsWrapper extends HTMLElement {
  
    constructor() {
        super(); 
    }


    


    connectedCallback() {
        
        const itemsWrapperTemplate = document.createElement('template');

itemsWrapperTemplate.innerHTML = 
`
<link rel="stylesheet" href="styles.css" />
<div class="portfolio-item-wrapper">
            <div
              class="portfolio-img-background"
              style="background-image: url(images/fake/photo.jpg)"
            ></div>
            <div>
              <div class="img-text-wrapper">
                <div class="logo-wrapper">
                  <img src= ${this.getAttribute("source")} alt="" />
                </div>
                <div class="subtitle">
                  <p>
                  ${this.getAttribute("words")}
                  </p>
                </div>
              </div>
            </div>
          </div>

`

        const shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.appendChild(itemsWrapperTemplate.content);
        
    
        
    }
    
}

customElements.define('portfolio-items-wrapper', itemsWrapper);


