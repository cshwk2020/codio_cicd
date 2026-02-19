const buz = {}
buz.fog = 'stack'

const logger = console

Object.keys(buz).forEach(key => { 
  logger.info(key)
})