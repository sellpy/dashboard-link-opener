#! /usr/bin/env node
const openUrl = require('open')

const group = process.argv[2]

const ids = {
    all: 2046313,
    lambda: 5207751,
    etl: 3191783,
    hero: 3505693,
    'hero-prod': 2105383,
    pack: 17826192,
    photo: 4734971,
    prediction: 5342491,
    print: 3163604,
    warehouse: 2423133
}

if (group === '?') {
    console.log('Possible values: ', Object.keys(ids))
    process.exit()
}

const qOffset = ids[group] ? 1 : 0
const id = ids[ids[group] ? group : 'all']
const q = process.argv[2 + qOffset]

openUrl(`https://my.papertrailapp.com/groups/${id}/events${q ? `?q=${encodeURIComponent(q)}` : ''}`)