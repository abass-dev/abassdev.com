const fs = require('fs')

const now = new Date()
const data = {
  lastUpdate: now.toISOString(),
}

fs.writeFileSync('./build-info.json', JSON.stringify(data))
