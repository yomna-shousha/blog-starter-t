export default {
  async queue(batch: MessageBatch, env: Env): Promise<void> {
    for (const message of batch.messages) {
      const event = message.body;

      console.log('Build Event:', event.type);
      console.log('Worker:', event.source.workerName);
      console.log('Build UUID:', event.payload.buildUuid);
      console.log('Status:', event.payload.status);

      message.ack();
    }
  },
  
  // Your existing fetch handler (if you have one)
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // your existing code
    return new Response('Hello');
  }
};
