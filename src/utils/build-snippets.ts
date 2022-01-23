import { Snippet, Snippets, VSCodeSnippet } from "../types/vscode";

const buildBody = (body: string): string[] => {
  const arr = body.split('\n')

  while (arr[0] === '' && arr.length > 0) { arr.shift() }
  while (arr[arr.length - 1] === '' && arr.length > 0) { arr.pop() }

  return arr
}

const buildSnippet = (snippet: Snippet): VSCodeSnippet => {
  return {
    ...snippet,
    body: buildBody(snippet.body)
  }
}

export const buildSnippets = (snippets: Snippets): Record<string, VSCodeSnippet> => {
  return Object.keys(snippets)
   .reduce((copy, snippetName) => {
     copy[snippetName] = buildSnippet(snippets[snippetName])

     return copy
   }, {} as Record<string, VSCodeSnippet>)
}