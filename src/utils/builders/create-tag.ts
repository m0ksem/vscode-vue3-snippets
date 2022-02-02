export const createTag = (tag: string, attrs?: string) => `
<${tag}${attrs ? ` ${attrs}` : ''}>
  $1
</${tag}>
`