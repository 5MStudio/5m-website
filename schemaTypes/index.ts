// schemaTypes/index.ts
import project from './project'
import homepage from './homepage'
import about from './about' // <-- import your about schema

export const schemaTypes = [
  project,
  homepage,
  about, // <-- add it here
]