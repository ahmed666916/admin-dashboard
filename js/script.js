    
    icon1 = "../images/star.svg";
    icon2 = "../images/eye.svg";
    icon3 = "../images/share.svg";
    // Data for the cards
    const cardData = [
        { heading: "Super Cool Project 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icons: [icon1, icon2, icon3] },
        { heading: "Super Cool Project 2", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icons: [icon1, icon2, icon3] },
        { heading: "Super Cool Project 3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icons: [icon1, icon2, icon3] },
        { heading: "Super Cool Project 4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icons: [icon1, icon2, icon3] },
        { heading: "Super Cool Project 5", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icons: [icon1, icon2, icon3] },
        { heading: "Super Cool Project 6", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icons: [icon1, icon2, icon3] }
    ];
    
    // Function to create a card element
    function createCard(heading, text, icons) {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const headingElement = document.createElement('h2');
        headingElement.textContent = heading;
        card.appendChild(headingElement);
        
        const textElement = document.createElement('p');
        textElement.textContent = text;
        card.appendChild(textElement);
        
        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add('button-group');
        icons.forEach(icon => {
        const button = document.createElement('button');
        const img = document.createElement('img');
        img.src = icon;
        img.alt = "Icon";
        button.appendChild(img);
        buttonGroup.appendChild(button);
        });
        card.appendChild(buttonGroup);
        
        return card;
    }
    
    // Function to add cards to the container
    function addCardsToContainer(container, data) {
        data.forEach(item => {
        const card = createCard(item.heading, item.text, item.icons);
        container.appendChild(card);
        });
    }
    
    // Get the container element
    const cardContainer = document.getElementById('card-container');

    
    
    // Add cards to the container
    addCardsToContainer(cardContainer, cardData);
    