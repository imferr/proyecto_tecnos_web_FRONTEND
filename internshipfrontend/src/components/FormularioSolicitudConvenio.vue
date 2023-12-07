<template>
  <div>
    <AppNavbar />
    <div class="container2">
      <h2>Formulario de solicitud de convenio</h2>
    </div>
    <div class="container">
      <div class="form-box">
        <div class="input-group">
          <label for="convenio">Convenio:</label>
          <select id="convenio" placeholder="[seleccione una opcion]">
            <option value="opcion1">Convenio en Canada</option>
            <option value="opcion2">Convenio en Argentina</option>
            <option value="opcion3">Convenio en España</option>
          </select>
        </div>

        <div class="input-group">
          <label for="cedula">Cédula Identidad:</label>
          <input id="cedula" type="text" placeholder="" />
          <input
            id="nombre"
            type="text"
            placeholder="Nombre completo del estudiante"
          />
        </div>

        <h3>Documentación requerida</h3>

        <div class="input-group">
          <label for="carta">Carta de motivación:</label>
          <input
            id="carta"
            type="file"
            @change="handleFileUpload($event, 'carta')"
          />>

          <label for="pasaporte">Pasaporte/Visa:</label>
          <input
            id="pasaporte"
            type="file"
            @change="handleFileUpload($event, 'pasaporte')"
          />>
        </div>

        <div class="input-group">
          <label for="seguro">Seguro médico:</label>
          <input
            id="seguro"
            type="file"
            @change="handleFileUpload($event, 'seguro')"
          />>
        </div>

        <button class="submit-button" @click.prevent="submitForm">
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from "../components/AppNavbar.vue";
import FormularioSolicitudConvenioAPI from "../services/FormularioSolicitudConvenioAPI.js";
import axios from "axios";
import Swal from 'sweetalert2'

const API_BASE_URL =
  "http://localhost:8080/api/v1/formulario-solicitud/register";
export default {
  components: {
    AppNavbar,
  },
  mixins: [FormularioSolicitudConvenioAPI],

  data() {
    return {
      convenio: "",
      cedula: "",
      nombre: "",
      carta: "",
      pasaporte: "",
      seguro: "",
      studentId: 2,
      requestStatus: false,
      uploadedUrls: [],

      documentos: {
        carta: {
          nombre: "",
          tipo: "Carta de Motivación",
          url: "",
        },
        pasaporte: {
          nombre: "",
          tipo: "Pasaporte",
          url: "",
        },
        seguro: {
          nombre: "",
          tipo: "Seguro Médico",
          url: "",
        },
      },
    };
  },
  methods: {
    logDocumentos() {
    console.log(this.documentos);
    },
    async handleFileUpload(event, fileVariable) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      let formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://localhost:8080/api/v1/media/upload', formData);
        const url = response.data.url; // Extrae la URL del archivo cargado de la respuesta
        console.log('URL del archivo cargado:', url);


        // Forma segura de usar hasOwnProperty
        if (Object.prototype.hasOwnProperty.call(this.documentos, fileVariable)) {
          this.documentos[fileVariable].url = url;
          this.documentos[fileVariable].nombre = file.name;
        }
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
      }
    }
  },

  joinDocumentNames() {
    return Object.values(this.documentos)
      .map(doc => doc.nombre) // Extrae el nombre de cada documento
      .filter(nombre => nombre !== '') // Filtra los nombres no vacíos
      .join(', '); // Une los nombres con una coma y un espacio
  },

    getCurrentDateString() {
      const today = new Date();
      return today.toISOString().split("T")[0];
    },

    async submitForm() {
      let formularioId = 0;
      try {
      const attachedDocuments = this.joinDocumentNames(); 

      const formData = {
        requestDate: this.getCurrentDateString(),
        requestStatus: this.requestStatus,
        attachedDocument: attachedDocuments,
        studentId: this.studentId,
      };
    
      console.log("Formulario de solicitud de convenio:", formData);
      const response = await axios.post(API_BASE_URL, formData);

      if (response.data && response.data.formularioSolicitudId) {
        formularioId = response.data.formularioSolicitudId; // Guarda el ID aquí
        console.log("ID del formulario creado:", formularioId);
      } else {
        // Manejar el caso en que la respuesta no tiene el ID
        console.error("El formulario fue creado pero no se recibió un ID válido.");
      }

    
      for (const key in this.documentos) {
        if (Object.prototype.hasOwnProperty.call(this.documentos, key)) {
            const documento = this.documentos[key];

            const documentData = {
                tipoDocumento: documento.tipo,
                nombreDocumento: documento.nombre,
                URLDocumento: documento.url,
                formularioSolicitudID: formularioId,
              };

              try {
                await axios.post('http://localhost:8080/api/v1/documento-electronico/register', documentData);
                console.log("Documento enviado con éxito: ", documentData);
              } catch (error) {
                console.error("Error al enviar el documento: ", documentData, error);
              }
            }
  }


        Swal.fire({
          icon: "success",
          title: "Formulario enviado",
          text: "El formulario y los documentos se han enviado con éxito.",
        });


        console.log("Formulario y documentos enviados con éxito");
      } catch (error) {
        console.error(
          "Error al realizar el formulario y registrar documentos",
          error
        );

        Swal.fire({
          icon: "error",
          title: "Error al enviar el formulario",
          text: "Hubo un error al enviar el formulario y registrar documentos. Por favor, inténtalo de nuevo.",
        });
      }
    },
  },
};
</script>

<style scoped>
body {
  background-image: url("@/assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.container2 {
  padding-top: 100px;
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 10vh;
  padding-left: 50px;
  border-radius: 40px;
}

.container {
  font-family: "Arial", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 101vh;
  background-color: #f2f2f29f;
  border-radius: 40px;
}

h1 {
  color: #333;
  margin-bottom: 1em;
}
h2 {
  color: #333;
  text-align: center;
  margin-top: 30px;
  margin-left: 350px;
}

.form-box {
  font-weight: lighter;
  width: 100%;
  max-width: 800px;
  padding: 25px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  height: 62vh;
}

.input-group {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
}

label {
  flex: 1;
  margin-right: 10px;
}

input,
select {
  flex: 2;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
}

.submit-button {
  width: 20%;
  padding: 8px;
  margin-top: 20px;
  background-color: #4c64b4;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-left: 600px;
}
.input-group input:not(:last-child) {
  margin-right: 15px;
}
</style>
