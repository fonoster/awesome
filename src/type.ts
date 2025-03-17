type AppConfig = {
  testCases?: unknown;
  intelligence: {
    config: {
      languageModel: {
        apiKey?: string;
      };
    };
  };
}

export type { AppConfig };