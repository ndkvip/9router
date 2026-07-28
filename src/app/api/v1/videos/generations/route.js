import { handleVideoCreate } from "@/sse/handlers/videoGeneration.js";

export async function OPTIONS(request) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
  const reqHeaders = request?.headers?.get("Access-Control-Request-Headers");
  if (reqHeaders) headers["Access-Control-Allow-Headers"] = reqHeaders;
  return new Response(null, { headers });
}

/** POST /v1/videos/generations - async video generation (xAI Grok Imagine) */
export async function POST(request) {
  return await handleVideoCreate(request, "generations");
}
