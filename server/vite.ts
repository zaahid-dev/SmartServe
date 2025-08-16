import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { type Server } from "http";

export function log(message: string, source = "express") {
  const time = new Date().toLocaleTimeString("en-US", { hour12: true });
  console.log(`${time} [${source}] ${message}`);
}

/**
 * Setup Vite dev server in middleware mode (only for development)
 */
export async function setupVite(app: Express, server: Server) {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  try {
    const { createServer: createViteServer, createLogger } = await import("vite");
    
    const viteLogger = createLogger();
    const vite = await createViteServer({
      configFile: false,
      server: {
        middlewareMode: true,
        hmr: { server },
      },
      appType: "custom",
      customLogger: viteLogger,
    });

    app.use(vite.middlewares);

    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;
      try {
        const clientTemplate = path.resolve(process.cwd(), "client", "index.html");
        let template = await fs.promises.readFile(clientTemplate, "utf-8");
        const page = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(page);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } catch (error) {
    log("Vite dev server not available in production");
  }
}

/**
 * Serve static built frontend in production
 */
export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist/client");

  if (!fs.existsSync(distPath)) {
    throw new Error(`Build directory not found: ${distPath}`);
  }

  app.use(express.static(distPath));
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}