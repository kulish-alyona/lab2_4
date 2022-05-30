const wrapper = document.createElement('div');
wrapper.classList.add("wrapper");

const header = document.createElement('header');

const menu = document.createElement('ul');
const menuEl = document.createElement('li');
menuEl.innerHTML = "Anonymous chat";
menu.appendChild(menuEl);
header.appendChild(menu);


const main = document.createElement('main');

const title = document.createElement('h2');
title.innerHTML = "Chat";

const containerChat = document.createElement('div');
containerChat.classList.add('container-chat');
const messages = document.createElement('ul');
messages.setAttribute('id','messages');

containerChat.appendChild(messages);

const form = document.createElement('form');
messages.setAttribute('action', "");

const input = document.createElement('input');
input.setAttribute('placeholder', "Your message");
input.setAttribute('required', "true");
input.setAttribute('id','m');
input.setAttribute('autocomplete','off');
input.classList.add('input-message');

const btnSend = document.createElement('button');
btnSend.innerHTML = "Send";
btnSend.classList.add('btn-send');

form.appendChild(input);
form.appendChild(btnSend);

main.appendChild(title);
main.appendChild(containerChat);
main.appendChild(form);

const footer = document.createElement('footer');
footer.innerHTML = "Created by @Alyona";

wrapper.appendChild(header);
wrapper.appendChild(main);
wrapper.appendChild(footer);

document.body.appendChild(wrapper);