async function startServer() {
  const app = express2();
  const server = createServer(app);

  app.use(express2.json({ limit: "50mb" }));
  app.use(express2.urlencoded({ limit: "50mb", extended: true }));

  app.get("/healthz", (_req, res) => {
    res.status(200).json({ ok: true, service: "lead-scoring-pipeline" });
  });

  registerOAuthRoutes(app);

  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = parseInt(process.env.PORT || "3000", 10);

  server.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch(console.error);
