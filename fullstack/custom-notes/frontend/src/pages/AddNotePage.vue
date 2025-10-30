<template>
  <div class="max-w-2xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">➕ Nueva Nota</h1>

    <form @submit.prevent="addNote">
      <input
        v-model="title"
        placeholder="Título..."
        class="border p-2 w-full mb-2 rounded"
      />
      <textarea
        v-model="content"
        placeholder="Contenido..."
        class="border p-2 w-full mb-2 rounded"
      ></textarea>
      <input
        v-model="tagsInput"
        placeholder="Etiquetas (separadas por coma)"
        class="border p-2 w-full mb-2 rounded"
      />
      <button class="bg-blue-500 text-white px-4 py-2 rounded">
        Guardar
      </button>
    </form>

    <router-link to="/" class="block mt-4 text-blue-500">⬅ Volver</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useNotesStore } from "../store/notesStore";

const router = useRouter();
const store = useNotesStore();

const title = ref("");
const content = ref("");
const tagsInput = ref("");

const addNote = async () => {
  const tags = tagsInput.value
    .split(",")
    .map(t => t.trim())
    .filter(Boolean);

  await store.createNote(title.value, content.value, tags);

  title.value = content.value = tagsInput.value = "";
  router.push("/");
};
</script>
