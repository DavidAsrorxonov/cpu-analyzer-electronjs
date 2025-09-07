import osUtils from "os-utils";

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
