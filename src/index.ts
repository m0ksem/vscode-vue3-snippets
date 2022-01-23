
import langs from "./snippets";
import { buildSnippets } from './utils/build-snippets'
import { writeToDist } from './utils/write-to-dist'

Object.keys(langs).forEach((lang) => {
  const snippetsJson = JSON.stringify(buildSnippets(langs[lang]), undefined, 2)

  writeToDist(`../dist/${lang}.json`, snippetsJson)
})

const all = Object
  .values(langs)
  .reduce((acc, lang) => ({ ...acc, ...lang }), {})

const allSnippetsJson = JSON.stringify(
  buildSnippets(all),
  undefined,
  2
)

writeToDist(`../dist/all.json`, allSnippetsJson)
