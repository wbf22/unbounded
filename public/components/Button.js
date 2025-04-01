

/*
    Usage:


    <script type="module" src="Button.js"></script>

    <custom-button text="Click Me"></custom-button>

    <script>
        const button = document.querySelector('custom-button');
        setTimeout(() => {
            button.text = "Updated Text";
        }, 2000);
    </script>
*/
class CustomButton extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow DOM to the component
        this.attachShadow({ mode: 'open' });

        // Create the template
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .button {
                    background-color: rgb(255, 130, 34);
                    color: #fdfeff;
                    width: 50%;
                    height: 10%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer; /* Optional for better UX */
                }
            </style>
            <div class="button">
                <b id="button-text"></b>
            </div>
        `;

        // Append the template to the shadow DOM
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Reference to the text element
        this.textElement = this.shadowRoot.getElementById('button-text');
    }

    // Define observed attributes
    static get observedAttributes() {
        return ['text'];
    }

    // Update the button text when the attribute changes
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'text') {
            this.textElement.textContent = newValue;
        }
    }

    // Set the text attribute
    set text(value) {
        this.setAttribute('text', value);
    }

    // Get the text attribute
    get text() {
        return this.getAttribute('text');
    }
}

// Define the custom element
customElements.define('custom-button', CustomButton);