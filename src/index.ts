export default {
  async queue(batch: MessageBatch, env: Env): Promise<void> {
    for (const message of batch.messages) {
      const event = message.body;

      console.log('Build Event:', event.type);
      console.log('Worker:', event.source.workerName);
      console.log('Build UUID:', event.payload.buildUuid);
      console.log('Status:', event.payload.status);

      // Do something with the event
      // Examples:
      // - Send Slack notification
      // - Update a database
      // - Trigger another workflow
      // - Log to analytics

      message.ack(); // Acknowledge the message
    }
  },
  
  // If you have a fetch handler for HTTP requests, add it here too:
  // async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  //   return new Response('Hello World!');
  // }
};
