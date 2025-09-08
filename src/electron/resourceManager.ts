import osUtils from "os-utils";
import fs from "fs";

const POLLING_INTERVAL = 500;

export function pollResources() {
  setInterval(async () => {
    const cpuUsage = await getGPUUsage();
    const ramUsage = getRAMUsage();
    console.log(`CPU usage: ${cpuUsage} and RAM usage: ${ramUsage}`);
  }, POLLING_INTERVAL);
}

function getGPUUsage() {
  return new Promise((resolve) => {
    osUtils.cpuUsage(resolve);
  });
}

function getRAMUsage() {
  return 1 - osUtils.freememPercentage();
}

function getStorageData() {
  const stats = fs.statfsSync(process.platform === "win32" ? "C://" : "/");
  const total = stats.bsize * stats.blocks;
  const free = stats.bsize * stats.bfree;

  return {
    total: Math.floor(total / 1_000_000),
    usage: 1 - free / total,
  };
}
