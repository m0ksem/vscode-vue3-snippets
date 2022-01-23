import { Snippets } from "../../types/vscode";

export default {
  "Export composition hook": {
    "prefix": "export-const-use",
    "body": `
export const use$1 = () => {
  $2
}
`
  }
} as Snippets