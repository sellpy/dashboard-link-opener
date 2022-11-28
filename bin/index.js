#! /usr/bin/env node
const { main } = require('../lib/link-opener')

const [_, __, className, field, constraint, compareTo] = process.argv
const BASE_URL = 'https://dashboard.sellpy.net/apps/Sellpy%20Prod%20-%20Read%20Only/browser'

main(BASE_URL, className, field, constraint, compareTo)
