<template>
  <div class="max-w-sm w-full overflow-hidden shadow-lg" @click="$emit('click', $event)">
    <slot />
  </div>
</template>
