const userMessages = [];

const userMessageForm = document.querySelector('form');
const userMessagesList = document.querySelector('ul');

function renderMessages() {
    let messageItems = '';
    for (const message of userMessages) {
        messageItems = `
      ${messageItems}
      <li class="message-item">
        <div class="message-image">
          <img src="${message.image}"">
        </div>
        <p>${message.text}</p>
      </li>
    `;
    }

    userMessagesList.innerHTML = messageItems;
}

function formSubmitHandler(event) {
    event.preventDefault();
    const messageImageInput = document.querySelector('input');
    const imageUrl = messageImageInput.value;


    userMessages.push({
        image: imageUrl,
    });

    messageImageInput.value = '';

    renderMessages();
}

userMessageForm.addEventListener('submit', formSubmitHandler);