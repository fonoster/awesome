import { Client, Applications } from "@fonoster/sdk";
import { readFileSync } from "fs";
import { load } from "js-yaml";
import { envs } from "./envs";
import { AppConfig } from "./type";

const { appRef, apiKey, apiSecret, accessKeyId } = envs;

const client = new Client({ accessKeyId });

const appConfigFromFile = load(
  readFileSync("./appConfig.yaml", "utf8")
) as AppConfig;

delete appConfigFromFile.testCases;
delete appConfigFromFile.intelligence.config.languageModel.apiKey;

const appConfig = {
  ref: appRef,
  ...appConfigFromFile
};

client
  .loginWithApiKey(apiKey, apiSecret)
  .then(async () =>
    new Applications(client).updateApplication(appConfig as unknown as { ref: string} )
  )
  .catch(console.error);
