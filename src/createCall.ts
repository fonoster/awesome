import { Client, Calls } from "@fonoster/sdk";
import { envs } from "./envs";

const { accessKeyId, fromNumber, toNumber, appRef } = envs;

const client = new Client({ accessKeyId });

async function createCall(): Promise<void> {
  const calls = new Calls(client);
  const breakReasons = ["ANSWER", "NOANSWER", "BUSY", "FAILED", "CANCEL"];

  try {
    const { ref, statusStream } = await calls.createCall({
      from: fromNumber,
      to: toNumber,
      appRef: appRef,
      timeout: 30
    });

    console.log(`Call created with reference: ${ref}`);

    // Monitor call status
    for await (const s of statusStream) {
      console.log(`Call status: ${s.status}`);
      if (breakReasons.includes(s.status)) {
        break;
      }
    }

    process.exit(0);
  } catch (err) {
    console.error("Error making call:", err);
  }
}

client
  .loginWithApiKey(envs.apiKey, envs.apiSecret)
  .then(() => createCall())
  .catch(console.error);
