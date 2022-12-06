#! /usr/bin/env node
const openUrl = require('open')

const repo = process.argv[2]
const section = process.argv[3]

if (repo === '?') {
    console.log('Commands:')
    console.log('repo [repo-key] [repo-section?]')
    console.log('example, go to parsoku commits:')
    console.log('repo parsoku commits')
    console.log('example, go to sellpy pull requests:')
    console.log('repo sellpy pulls')
    process.exit()
}

openUrl(`https://github.com/sellpy/${repo}${section ? `/${section}` : ''}`)