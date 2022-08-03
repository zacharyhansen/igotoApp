import type { NextApiRequest, NextApiResponse } from "next";

// See next.config.js - /terms-of-service is rewritten to /api/terms-of-service
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>
) {
  res.setHeader("content-type", "text/html");
  res.end(`TODO: Generate privacy policy html from https://app.termly.io/`);
}
