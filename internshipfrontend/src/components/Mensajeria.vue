<template>
    <div>
      <AppNavbar/>
      <div class="espacio">
      </div>
      <div class="chat-container">
        <div class="messages">
          <div v-for="(message, index) in messages" :key="index" :class="{'message': true, 'bot': message.sender === 'bot', 'user': message.sender === 'user'}">
            {{ message.content }}
          </div>
        </div>
        <div class="input-container">
          <input v-model="newMessage" type="text" placeholder="Escribe un mensaje" @keyup.enter="sendMessage"/>
          <button @click="sendMessage">Enviar</button>
        </div>
      </div>
    </div>
  </template>

<script>
//import AppNavbar from '../components/AppNavbar.vue';
//import MensajeriaAPI from '../services/MensajeriaAPI.js';
import axios from 'axios'; 
import AppNavbar from '../components/AppNavbar.vue';

const API_BASE_URL = 'http://localhost:8080/api/v1/mensaje';
export default {
  name: 'MensajeriaChat',
  components: {
    AppNavbar
  },
  data() {
    return {
      newMessage: '',
      messages: []
    };
  },
  mounted() {
    this.loadMessages(); 
  },
  methods: {
    async loadMessages() {
      try {
        const response = await axios.get(API_BASE_URL);
        this.messages = response.data.messages.map(msg => ({ content: msg.messageContent, sender: 'bot' })); // Ajusta esto según tu lógica
      } catch (error) {
        console.error('Error al cargar los mensajes', error);
      }
    },
    addMessage(content, sender) {
      this.messages.push({ content, sender });
    },
    async sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.addMessage(this.newMessage, 'user'); // Agrega el mensaje del usuario al chat
        this.botResponse(this.newMessage); // Llama a botResponse para generar una respuesta del bot

        try {
          // Enviar el mensaje a la API
          await axios.post(`${API_BASE_URL}/new`, {
            messageContent: this.newMessage,
            sendDate: new Date().toISOString().split('T')[0], 
            userIdSender: 1, 
            userIdReceiver: 2 
          });
          this.newMessage = ''; // Limpia el campo de nuevo mensaje
          this.loadMessages(); // Recarga los mensajes
        } catch (error) {
          console.error('Error al enviar el mensaje', error);
        }
      }
    },

    botResponse(userMessage) {
    let response = '';

    if (/Hola|Saludos|Buenas/i.test(userMessage)) {
      response = '¡Hola! Es un placer saludarte. ¿Qué información necesitas?';
    } else if (/Ayuda|Soporte/i.test(userMessage)) {
      response = 'Claro, dime en qué puedo asistirte.';
    } else if (/Gracias/i.test(userMessage)) {
      response = '¡De nada! Siempre estoy aquí para ayudarte.';
    } else {
      response = 'Lo siento, no entendí tu pregunta. ¿Puedes intentar formularla de otra manera?';
    }

    // Añadir la respuesta del bot al chat
    setTimeout(() => {
      this.addMessage(response, 'bot');

      // Enviar la respuesta del bot a la API para guardarla en la base de datos
      this.sendBotMessageToAPI(response);
    }, 1000);
  },

  async sendBotMessageToAPI(messageContent) {
    try {
      await axios.post(`${API_BASE_URL}/new`, {
        messageContent: messageContent,
        sendDate: new Date().toISOString().split('T')[0],
        userIdSender: 2, // El ID del bot, asumiendo que el bot tiene un ID de usuario asignado
        userIdReceiver: 1 // El ID del usuario, esto puede variar según la lógica de tu aplicación
      });
    } catch (error) {
      console.error('Error al enviar el mensaje del bot', error);
    }
  },
  }
};
</script>

  
  <style scoped>
   .espacio{
    margin-top: 3%;
  
  }
  .chat-container {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto;
    height: 500px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    
  }
  
  .messages {
    font-family: 'Arial', sans-serif;
    background-color: #eff2f5bb;
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto;
    flex-direction: column;
    gap: 20px; 
    align-items: flex-start;
  
  }
  
  .message {
    margin-bottom: 12px;
    padding: 10px;
    border-radius: 25px;
    display: block;
    max-width: 100%;
    background: #f9f9f9;
  }
  
  .bot {
  background: white;; /* Un gris más oscuro para ver si se aplica */
  color: black; /* Asegúrate de que el color del texto sea visible */
}
  .user {
    background: #4c64b4;
    color: white;
    align-self: flex-end;
    margin-top: 12px; 
  }
  
  .input-container {
    font-family: 'Arial', sans-serif;
    background-color: #eff2f5bb;

    display: flex;
    padding: 10px;
  
  }
  
  input[type="text"] {
    flex-grow: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background: #4c64b4;
    color: white;
    cursor: pointer;
  }
  
  button:focus,
  input[type="text"]:focus {
    outline: none;
  }
  
  </style>
  