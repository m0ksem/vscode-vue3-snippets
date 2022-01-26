import { Snippets } from "../../types/vscode";

export default {
  "Style SCSS": {
    prefix: 'style-scss',
    body: `
<style lang="scss">
  $1
</style>
`,
},


  "Style SCSS scoped": {
    prefix: 'style-scss-scoped',
    body: `
<style lang="scss" scoped>
  $1
</style>
`,
},


"Style CSS": {
  prefix: 'style-css-scoped',
  body: `
<style>
$1
</style>
`,
},

"Style CSS scoped": {
  prefix: 'style-css-scoped',
  body: `
<style scoped>
$1
</style>
`,
},


} as Snippets
