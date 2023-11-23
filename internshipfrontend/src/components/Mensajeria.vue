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
import axios from 'axios'; // Asegúrate de haber instalado axios
import AppNavbar from '../components/AppNavbar.vue';

const API_BASE_URL = 'http://localhost:8080/api/v1/mensaje'; // URL de tu API

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
    this.loadMessages(); // Cargar mensajes al iniciar
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
    async sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.addMessage(this.newMessage, 'user'); // Añade el mensaje a la UI

        try {
          // Enviar el mensaje a la API
          await axios.post(`${API_BASE_URL}/new`, {
            messageContent: this.newMessage,
            sendDate: new Date().toISOString().split('T')[0], // Fecha actual en formato YYYY-MM-DD
            userIdSender: 1, // Ajusta según tu lógica
            userIdReceiver: 2 // Ajusta según tu lógica
          });
          this.newMessage = ''; // Limpiar el input
          this.loadMessages(); // Recargar mensajes
        } catch (error) {
          console.error('Error al enviar el mensaje', error);
        }
      }
    },
    addMessage(content, sender) {
      this.messages.push({ content, sender });
    },
    botResponse(userMessage) {
      // Respuesta simple basada en palabras clave
      let response = '';

      if (/hola|saludos|buenas/i.test(userMessage)) {
        response = '¡Hola! Es un placer saludarte. ¿Qué información necesitas?';
      } else if (/ayuda|soporte/i.test(userMessage)) {
        response = 'Claro, dime en qué puedo asistirte.';
      } else if (/gracias/i.test(userMessage)) {
        response = '¡De nada! Siempre estoy aquí para ayudarte.';
      } else {
        response = 'Lo siento, no entendí tu pregunta. ¿Puedes intentar formularla de otra manera?';
      }

      setTimeout(() => this.addMessage(response, 'bot'), 1000);
    }
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
    background: #ffffff;
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
  