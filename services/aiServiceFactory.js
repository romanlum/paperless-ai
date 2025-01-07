const config = require('../config/config');
const openaiService = require('./openaiService');
const ollamaService = require('./ollamaService');
const customService = require('./customService');
const azureOpenaiService = require('./azureOpenaiService');

class AIServiceFactory {
  static getService() {
    switch (config.aiProvider) {
      case 'ollama':
        return ollamaService;
      case 'azureOpenai':
        return azureOpenaiService;
      default:
        return openaiService;
      case 'custom':
        return customService;
    }
  }
}

module.exports = AIServiceFactory;