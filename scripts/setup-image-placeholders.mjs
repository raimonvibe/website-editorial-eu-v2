#!/usr/bin/env node
/**
 * Seeds public/images/{brand,editorial,nav,projects,scripture,nigeria,models}
 * with placeholder WebP files using the exact filenames from IMAGE-BRIEF-FOR-DESIGNER.md.
 *
 * Run: node scripts/setup-image-placeholders.mjs
 * Re-run anytime — overwrites placeholders (safe before final assets arrive).
 */

import { execSync } from 'node:child_process'
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const images = join(root, 'public', 'images')

const dirs = ['brand', 'editorial', 'nav', 'projects', 'scripture', 'nigeria', 'models']
for (const dir of dirs) {
  mkdirSync(join(images, dir), { recursive: true })
}

function src(name) {
  return join(images, name)
}

function toWebp(source, destRelative) {
  const input = src(source)
  const output = join(images, destRelative)
  if (!existsSync(input)) {
    console.warn(`⚠ skip (missing): ${source} → ${destRelative}`)
    return false
  }
  mkdirSync(dirname(output), { recursive: true })
  const ext = source.split('.').pop()?.toLowerCase()
  if (ext === 'webp') {
    copyFileSync(input, output)
  } else {
    execSync(`cwebp -q 85 "${input}" -o "${output}"`, { stdio: 'pipe' })
  }
  console.log(`✓ ${destRelative}`)
  return true
}

function copyPng(source, destRelative) {
  const input = src(source)
  const output = join(images, destRelative)
  if (!existsSync(input)) {
    console.warn(`⚠ skip (missing): ${source} → ${destRelative}`)
    return false
  }
  mkdirSync(dirname(output), { recursive: true })
  copyFileSync(input, output)
  console.log(`✓ ${destRelative}`)
  return true
}

console.log('\n🏷️  Brand')
if (!toWebp('cover.webp', 'brand/og-cover.webp')) {
  toWebp('editorial/hero-workspace.webp', 'brand/og-cover.webp')
}
if (!copyPng('icon.png', 'brand/favicon-512.png')) {
  const favicon = join(root, 'public', 'favicon.ico')
  if (existsSync(favicon)) {
    execSync(`convert "${favicon}" -resize 512x512 "${join(images, 'brand/favicon-512.png')}"`, {
      stdio: 'pipe',
    })
    console.log('✓ brand/favicon-512.png (from favicon.ico)')
  }
}

console.log('\n🏠 Editorial + splash')
toWebp('pic12.jpg', 'editorial/hero-workspace.webp')
toWebp('pic13.jpg', 'editorial/hero-accent-flower.webp')
toWebp('pic19.jpg', 'editorial/hero-accent-object.webp')
toWebp('pic14.jpg', 'editorial/about-portrait.webp')
toWebp('pic24.jpg', 'editorial/services-medium.webp')
toWebp('pic23.jpg', 'editorial/services-youtube.webp')
toWebp('website.jpg', 'editorial/services-websites.webp')
toWebp('pic21.jpg', 'editorial/contact-ideas.webp')
toWebp('pic17.jpg', 'editorial/clients-collabs.webp')
toWebp('pic18.jpg', 'editorial/clients-techbullion.webp')
toWebp('pic22.jpg', 'editorial/opportunities-journey.webp')

console.log('\n🧭 Nav cards')
toWebp('pic13.jpg', 'nav/about.webp')
toWebp('pic15.jpg', 'nav/certificates.webp')
toWebp('pic16.jpg', 'nav/clients.webp')
toWebp('pic17.jpg', 'nav/opportunities.webp')
toWebp('pic19.jpg', 'nav/projects.webp')
toWebp('pic20.jpg', 'nav/models.webp')

console.log('\n💼 Projects')
toWebp('change-my.png', 'projects/change-my.webp')
toWebp('skills.png', 'projects/skills-hub.webp')
toWebp('jewish-bible.webp', 'projects/tanach.webp')
toWebp('physics-calc.png', 'projects/physics-calc.webp')
toWebp('flashcards.png', 'projects/flashcards.webp')
toWebp('retro.png', 'projects/retro-monitor.webp')
toWebp('animal_guesses.webp', 'projects/animal-guesses.webp')
toWebp('music_guesses.webp', 'projects/music-guesses.webp')
toWebp('emf.png', 'projects/emf-simulator.webp')
toWebp('tetris.png', 'projects/tetris.webp')
toWebp('periodic-table.png', 'projects/periodic-table.webp')
toWebp('leafs-background.webp', 'projects/unsmoke.webp')
toWebp('rootwork.webp', 'projects/rootwork.webp')
toWebp('google.png', 'projects/google-login-edu.webp')

console.log('\n📖 Scripture')
toWebp('projects/tanach.webp', 'scripture/tanach.webp')
toWebp('holy-bible.webp', 'scripture/holy-bible.webp')
toWebp('childrens-bible.webp', 'scripture/childrens-bible.webp')
toWebp('book-of-mormon.webp', 'scripture/book-of-mormon.webp')
toWebp('apocrypha.webp', 'scripture/apocrypha.webp')
toWebp('lost-scriptures.webp', 'scripture/lost-scriptures.webp')
toWebp('prayer.webp', 'scripture/prayer-intentions.webp')

console.log('\n🇳🇬 Nigeria')
toWebp('nigerian-tech.png', 'nigeria/nigerian-tech.webp')
toWebp('connection-solution.png', 'nigeria/connection-solution.webp')
toWebp('payment-guide.png', 'nigeria/payment-guide.webp')
toWebp('frontend-jobs.png', 'nigeria/frontend-jobs.webp')
toWebp('coding-ai.png', 'nigeria/coding-ai.webp')
toWebp('react-app.png', 'nigeria/react-app.webp')
toWebp('google-login.png', 'nigeria/google-login.webp')
toWebp('form-education.png', 'nigeria/form-education.webp')
toWebp('health-navigator.png', 'nigeria/health-navigator.webp')

console.log('\n🧊 3D models')
toWebp('cults.png', 'models/earrings-hero.webp')
toWebp('monkeys.webp', 'models/monkey-coaster.webp')
toWebp('deer.webp', 'models/deer-ornament.webp')
toWebp('cat-v6-final.webp', 'models/cat-earrings-v6.webp')
toWebp('unicorn.webp', 'models/unicorn-keychain.webp')
toWebp('roses.webp', 'models/roses-earrings.webp')
toWebp('butterfly.webp', 'models/butterfly-earrings.webp')
toWebp('alien.webp', 'models/alien-keychain.webp')
toWebp('owl-bowl.webp', 'models/owl-bowl.webp')
toWebp('buddha.webp', 'models/buddha-coaster.webp')
toWebp('male.webp', 'models/male-torso.webp')
toWebp('horse.webp', 'models/horse-keychain.webp')
toWebp('Cat-v3-final.webp', 'models/cat-earrings-v3.webp')

console.log('\n✅ Placeholder setup complete — drop final assets over these filenames.\n')
