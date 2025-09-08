import { app } from "electron";
import path from "path";
import { isDev } from "./util.js";

export function getPathPreload() {
  return path.join(
    app.getAppPath(),
    isDev() ? "." : "..",
    "/dist-electron/preload.cjs"
  );
}
