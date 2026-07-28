import { handleVideoGet } from "@/sse/handlers/videoGeneration.js";

export async function OPTIONS(request) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
  };
  const reqHeaders = request?.headers?.get("Access-Control-Request-Headers");
  if (reqHeaders) headers["Access-Control-Allow-Headers"] = reqHeaders;
  return new Response(null, { headers });
}

/** GET /v1/videos/{request_id} - poll async video job status (xAI Grok Imagine) */
export async function GET(request, { params }) {
  const { id } = await params;
  return await handleVideoGet(request, id);
}
