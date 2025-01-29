const { AzureOpenAI } = require('openai');
const config = require('../config/config');
const {OpenAIService} = require('./openaiServiceBase');

class AzureOpenAIService extends OpenAIService {
  constructor() {
    super();
    this.client = null;
    this.tokenizer = null;
  }

  initialize() {
    if (!this.client && config.azure_openai.apiKey) {
      
      this.client = new AzureOpenAI({
        endpoint: config.azure_openai.endpoint,
        apiKey: config.azure_openai.apiKey,
        deployment: config.azure_openai.deploymentName,
        apiVersion: "2024-10-21"
      });
    }
  }
}

module.exports = new AzureOpenAIService();