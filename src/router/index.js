import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriaView from '../views/CategoriaView.vue'
import AutorView from '../views/AutorView.vue'
import LivrosView from '../views/LivrosView.vue'
import EditorView from '../views/EditorView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Categoria',
      name: 'Categorias',
      component: CategoriaView
     
    },
    {
      path: '/autor',
      name: 'Autores',
      component: AutorView
    },
    {
      patch: '/livros',
      name: 'Livros',
      component: LivrosView
    },
    {
      path: '/editoras',
      name: 'Editoras',
      component: EditorView
    },
  ]
})

export default router
