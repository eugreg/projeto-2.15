<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      autores: [
        {
          livro_id: "",
          autor_id: "",
        },
        {
          livro_id: "",
          autor_id: "",
        },
        {
          livro_id: "",
          autor_id: "",
        },
        {
          livro_id: "",
          autor_id: "",
        },
      ],
      novo_autor: "",
      novo_livro: "esse",
    };
  },
  methods: {
    salvar() {
      const novo_id = uuidv4();
      this.autores.push({
        id: novo_id,
        autor_id: this.novo_autor,
        livro_id: this.novo_livro,
      });
    },
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Grereciamento de Autores</h2>
      </div>
      <div class="form-input">
        <input type="text" v-model="novo_autor" />
        <button @click="salvar">Save</button>
      </div>
      <div class="list-autores">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Autor</th>
              <th>Livro</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="autores in autores" :key="!autores_id">
              <td>{{ autores.id }}</td>
              <td>{{ livros_id }}</td>
              <td>??</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
  <p>sahygduasytfdsa</p>
</template>
