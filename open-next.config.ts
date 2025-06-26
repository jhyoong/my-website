/** @type {import('@opennextjs/cloudflare').OpenNextConfig} */
module.exports = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
    },
  },
  buildCommand: "npm run build",
  // Disable incremental cache
  disableIncrementalCache: true,
};