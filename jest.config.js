module.exports = {
  setupFilesAfterEnv: ['<rootDir>tests/setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
}
