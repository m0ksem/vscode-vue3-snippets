import { Snippets } from "../../types/vscode";

export default {
  "Script setup": 
  {
    prefix: 'script-setup',
    body: `
<script setup>
$1
</script>
`,
},


  "Script setup ts": {
    prefix: 'script-setup-ts',
    body: `
<script setup lang="ts">
  $1
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
  },


  "Script property decorator TS": {
    prefix: 'script-property-decorator-ts',
    body: `
<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  
  @Component({
    name: $1,
  })
  export default class $1 extends Vue {
    $2
  }
</script>
`,
  }
} as Snippets
