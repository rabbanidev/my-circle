import path from "path";
import { register } from "tsconfig-paths";

// Register your alias from tsconfig
register({
  baseUrl: path.resolve(__dirname),
  paths: {
    "@/*": ["*"],
  },
});

// Start your actual server
require("./server");
