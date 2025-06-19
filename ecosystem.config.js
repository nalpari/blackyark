module.exports = {
  apps: [
    {
      name: "blackyark-app",
      script: "node_modules/next/dist/bin/next",
      // instances: 2,
      // exec_mode: "cluster",
      instances: 1,
      exec_mode: "fork",
    },
  ],
};
