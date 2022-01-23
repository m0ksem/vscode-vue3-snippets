export type Snippet = {
  prefix: string,
  body: string,
  description?: string
}

type SnippetName = string

export type Snippets = Record<SnippetName, Snippet>

export type VSCodeSnippet = {
  prefix: string,
  body: string[],
  description?: string
}