#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "oneforma",
  boardId: "oneforma-official",
  domain: "oneforma.com",
  npmName: "zc-oneforma-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
