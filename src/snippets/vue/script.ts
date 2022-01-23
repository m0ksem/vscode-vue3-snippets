import { Snippets } from "../../types/vscode";

export default {
  "Script setup": {
    prefix: 'script-setup',
    body: `
<script setup>
  $1"
</script>
`,
  },
  "Script setup ts": {
    prefix: 'script-setup-ts',
    body: `
<script setup lang="ts">
  $1"
</script>
`,
  },
  "Script composition API": {
    prefix: 'script-composition-api',
    body: `
<script>
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    $1
  })
</script>
`,
  },
  "Script composition API TS": {
    prefix: 'script-composition-api-ts',
    body: `
<script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    $1
  })
</script>
`,
  }
} as Snippets
