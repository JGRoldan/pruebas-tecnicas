<template>
  <div
    class="bg-white rounded-2xl shadow-lg p-5 transition-transform hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="flex justify-between items-start mb-3">
      <h2 class="text-xl font-semibold text-gray-800 break-words">{{ note.title }}</h2>
      <button
        @click="$emit('delete', note.id)"
        class="text-red-500 hover:text-red-600 transition-colors text-sm"
        title="Eliminar nota"
      >
        🗑️
      </button>
    </div>

    <p class="text-gray-700 mb-4 whitespace-pre-line">{{ note.content }}</p>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in note.tags"
        :key="tag"
        class="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
      >
        #{{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Note } from "../api/notesApi";

defineProps<{ note: Note }>();
defineEmits(["delete"]);
</script>
