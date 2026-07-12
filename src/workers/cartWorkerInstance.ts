const cartWorker = new Worker(
  new URL("./cart.worker.ts", import.meta.url),
  {
    type: "module",
  }
);

export default cartWorker;