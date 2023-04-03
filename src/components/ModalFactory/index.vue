<template>
  <Teleport to="body">
    <div
      v-if="state.isActive"
      class="fixed top-0 left-0 w-full z-50 flex items-center justify-center bg-black bg-opaciy-50"
      @click="handleModalToogle({ status: false })"
    >
      <div class="fixed mx-10">
        <div class="flex flex-col overflow-hidden bg-white rounded-lg">
          <div class="flex flex-col px-12 py-10 bg-white">
            <component :is="state.component" />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { reactive } from 'vue'

const DEFAULT_WIDTH = 'w-3/4 lg:w-1/3'

const state = reactive({
  isActive: false,
  component: {},
  width: DEFAULT_WIDTH
})

function handleModalToogle({ status }) {}
</script>

<style scoped></style>
