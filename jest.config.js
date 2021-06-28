module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@queries(.*)$": "<rootDir>/queries$1",
    "^@hooks(.*)$": "<rootDir>/hooks$1",
    "^@context(.*)$": "<rootDir>/context$1",
    "^@utils(.*)$": "<rootDir>/utils$1",
    "^@styles(.*)$": "<rootDir>/styles$1",
  },
  modulePathIgnorePatterns: ["<rootDir>/.next/"]
};