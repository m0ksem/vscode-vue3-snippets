import { Snippets } from "../../types/vscode";
import { createTag } from "../../utils/builders/create-tag";

const createTemplate = (attrs?: string) => createTag('template', attrs)

export default {
"Template": {
  prefix: 'template',
  body: createTemplate(),
},
} as Snippets
