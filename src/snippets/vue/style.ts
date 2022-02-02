import { Snippets } from "../../types/vscode";
import { createTag } from "../../utils/builders/create-tag";

const createStyle = (attrs?: string) => createTag('style', attrs)

export default {
"Style SCSS": {
  prefix: 'style-scss',
  body: createStyle('lang="scss"'),
},

"Style SCSS scoped": {
  prefix: 'style-scss-scoped',
  body: createStyle('lang="scss" scoped'),
},

"Style CSS": {
  prefix: 'style-css',
  body: createStyle(),
},

"Style CSS scoped": {
  prefix: 'style-css-scoped',
  body: createStyle('scoped')
},
} as Snippets
