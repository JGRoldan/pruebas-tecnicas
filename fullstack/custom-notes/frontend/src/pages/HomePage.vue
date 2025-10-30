<template>
  <div class="max-w-2xl mx-auto p-6 bg-gray-100">
    <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">
      📝 Mis Notas
    </h1>

    <!-- FILTROS DE ETIQUETAS -->
    <div class="flex flex-wrap gap-3 mb-6 justify-center">
      <button
        v-for="tag in store.allTags"
        :key="tag"
        @click="store.filterByTag(tag)"
        class="px-3 py-1.5 text-sm rounded-full border transition-all duration-200"
        :class="store.activeTag === tag
          ? 'bg-blue-500 text-white border-blue-500 shadow-sm'
          : 'border-gray-300 text-gray-700 hover:bg-gray-100'"
      >
        #{{ tag }}
      </button>

      <button
        v-if="store.activeTag"
        @click="store.clearFilter"
        class="px-3 py-1.5 text-sm text-red-500 hover:text-red-600 font-medium"
      >
        ❌ Limpiar filtro
      </button>
    </div>

    <!-- LISTA DE NOTAS -->
     <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
       <NoteCard
         v-for="note in store.filteredNotes"
         :key="note.id"
         :note="note"
         @delete="store.removeNote"
       />
     </div>

    <!-- BOTÓN NUEVA NOTA -->
    <router-link
      to="/add"
      class="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-lg mt-6 shadow-sm transition-colors duration-200"
    >
      ➕ Nueva Nota
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useNotesStore } from "../store/notesStore";
import NoteCard from "../components/NoteCard.vue";

const store = useNotesStore();
onMounted(store.loadNotes);
</script>
