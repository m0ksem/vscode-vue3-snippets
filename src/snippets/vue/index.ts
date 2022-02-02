import { Snippets } from "../../types/vscode";
import script from "./script";
import style from "./style"
import template from "./template";

const generateTagPrefix = (snippets: Snippets) => {
  return Object.keys(snippets).reduce((copy, key) => {
    copy[key + ' tag'] = {
      ...copy[key],
      prefix: `<${copy[key].prefix}>`
    }

    return copy
  }, { ...snippets })
}

export default {
  ...generateTagPrefix(script),
  ...generateTagPrefix(style),
  ...generateTagPrefix(template),
}