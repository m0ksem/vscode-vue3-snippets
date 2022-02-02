import { Snippets } from "../../types/vscode";

export default {
  "V-For directive": {
    prefix: 'v-for',
    body: 'v-for="$1 in $2" :key="$1"'
  },

  "V-if directive": {
    prefix: 'v-if',
    body: 'v-if="$1"'
  },

  "v-else-if": {
    prefix: 'v-else-if',
    body: 'v-else-if="$1"'
  },

  'v-else': {
    prefix: 'v-else',
    body: 'v-else'
  },

  'v-show': {
    prefix: 'v-show',
    body: 'v-show="$1"'
  },

  'v-model directive': {
    prefix: 'v-model',
    body: 'v-model="$1"'
  },
} as Snippets
