#!/usr/bin/env node

const fs = require('fs').promises
const path = require('path')
// Replace the ESM import with CommonJS require
const packageJson = require('./package.json')
const OLD_VERSION = packageJson.version

async function updateVersion() {
  // Check if version argument is provided
  const newVersion = process.argv[2]
  if (!newVersion) {
    console.error('Please provide a version number as argument')
    console.error('Usage: node bump-version.js VERSION')
    process.exit(1)
  }

  // Function to update file if it exists
  async function updateFile(filename, searchPattern, replacement) {
    try {
      const filePath = path.join(process.cwd(), filename)
      const fileContent = await fs.readFile(filePath, 'utf8')

      // Create the replacement pattern based on the file type
      const updatedContent = fileContent.replace(searchPattern(OLD_VERSION), replacement(newVersion))

      await fs.writeFile(filePath, updatedContent)
      console.log(`Updated ${filename} version to ${newVersion}`)
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`Warning: ${filename} not found`)
      } else {
        console.error(`Error updating ${filename}:`, error.message)
      }
    }
  }

  await updateFile(
    'package.json',
    oldVer => `"version": "${oldVer}"`,
    newVer => `"version": "${newVer}"`
  )

  await updateFile(
    'src-tauri/tauri.conf.json',
    oldVer => `"version": "${oldVer}"`,
    newVer => `"version": "${newVer}"`
  )

  await updateFile(
    'src-tauri/Cargo.toml',
    oldVer => `version = "${oldVer}"`,
    newVer => `version = "${newVer}"`
  )
}

updateVersion().catch(console.error)
