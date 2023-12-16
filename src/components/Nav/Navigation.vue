<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <nav class="nav">
        <ul class="nav-list">
          <li class="nav-list__item">
            <RouterLink to="/" class="nav-list__anchor">
              Home
            </RouterLink>
          </li>
          <li class="nav-list__item">
            <RouterLink to="/about" class="nav-list__anchor">
              About
            </RouterLink>
          </li>
        </ul>
        
        
      </nav>
</template>

<style lang="scss" scoped>
.nav {
  width: 100%;
  font-size: 12px;
  @media (min-width: 1024px) { 
      text-align: left;
      padding: 1rem 0;
  }
  &-list {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    
    &__item {
      display: inline-block;
    }
    &__anchor {
      display: inline-block;
      padding: 0 1rem 0 0;
      border-left: 1px solid var(--color-border);
      &:first-of-type {
        border: 0;
      }
    }
  }
}

.nav .router-link-exact-active {
  color: var(--color-text);
  &:hover {
    background-color: transparent;
  }

}
</style>