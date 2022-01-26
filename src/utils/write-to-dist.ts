import { writeFileSync, existsSync, mkdirSync, rmSync } from 'fs'
import { resolve } from 'path'

export const writeToDist = (filePath: string, data: string) => {
  const callerPath = require.main?.path || '.'
  const absolutePath = resolve(callerPath, filePath)
  const dirPath = absolutePath.substring(0, absolutePath.lastIndexOf("/"))

  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true })
  }

  if (existsSync(absolutePath)) {
    rmSync(absolutePath)
  }

  writeFileSync(absolutePath, data, { flag: 'wx' })
}