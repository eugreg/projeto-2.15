<script>
  import { v4 as uuidv4 } from "uuid";
  export default {
    data() {
      return {
        autores: [{}],
        novo_autor: "",
      };
    },
    methods: {
      salvar() {
        if (this.novo_autor !== "") {
          const novo_id = uuidv4();
          this.autores.push({
            id: novo_id,
            autor: this.novo_autor,
          });
          this.novo_autor = "";
        }
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
            </tr>
          </thead>
          <tbody>
            <tr v-for="autor in autores" :key="autor.id">
              <td>{{ autor.id }}</td>
              <td>{{ autor.autor }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<style>
.title{
  display: flex;
  justify-content: center;
  padding: 0;
}
.form-input {
  margin-top: 0px;
  display: flex;
  justify-content: center;
}
.form-input input {
  width: 60%;
  height: 40px;
  border: 1px solid rgb(147, 147, 147);
  border-radius: 10px;
  padding: 0 10%;
}
form-input button {
  margin-left: 10px;
  width: 10%;
  height: 40px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 10px;
  background-color: rgb(227, 170, 0);
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
}
.list-autores{
  display: flex;
  justify-content: center;
}
.list-autores table{
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}
table tr td {
  border: 1px solid rgb(211, 211, 211);
  padding: 10px;
}

</style>
