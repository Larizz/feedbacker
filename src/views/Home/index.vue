<template>
  <CustomHeader @login="handleLogin" @create-account="handleAccountCreate" />
  <Contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker &copy; 2023</p>
  </div>
</template>

<script setup>
import CustomHeader from './CustomHeader.vue'
import Contact from './Contact.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// chamando o método getItem() do objeto localStorage(forma de armazenamento de dados do navegador que permite
// o armazenamento de dados localmente no pc do user por tempo indeterminado
// O token funciona quando é feito o login e funciona como um cookies, caso haja um token, o user é direcionado
// ao router feedbacks
onMounted(() => {
  const token = window.localStorage.getItem('token')
  if (token) {
    router.push({ name: 'Feedbacks' })
  }
})

function handleLogin() {}

function handleAccountCreate() {}

// return {
// handleLogin,
// handleAccountCreate
// }
</script>

<style scoped></style>
