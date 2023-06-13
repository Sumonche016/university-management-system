import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function main() {
  await mongoose.connect(config.database_url as string);

  app.listen(config.port, () => {
    console.log(`[server]: Server is running at ${config.port}`);
  });

  try {
  } catch (error) {
    console.log("fail to start", error);
  }
}

main();
