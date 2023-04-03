import { createRouter, createWebHistory } from 'vue-router'

// Importando os arquivos para onde serão direcionados as rotas definidas
const Home = () => import('../views/Home/index.vue')
const Feedbacks = () => import('../views/Feedbacks/index.vue')
const Credencials = () => import('../views/Credencials/index.vue')

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // o objetivo dessa propriedade é indicar que essas rotas requerem autenticação
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credencials',
    name: 'Credencials',
    component: Credencials,
    meta: {
      hasAuth: true
    }
  },
  // Essa é uma rota de direcionamento que define um comportamento padrão para todos os caminhos de URL que não correspondem
  // a nenhuma rota definida anteriormente
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
