import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to BufferExample.web.ts
// and on native platforms to BufferExample.ts
import BufferExampleModule from './src/BufferExampleModule';
import { PongEventPayload } from './src/BufferExample.types';

export function ping(): Uint8Array {
  return BufferExampleModule.ping();
}

export async function pingAsync() {
  return await BufferExampleModule.pingAsync();
}

const emitter = new EventEmitter(BufferExampleModule ?? NativeModulesProxy.BufferExample);

export function addPongListener(listener: (event: PongEventPayload) => void): Subscription {
  return emitter.addListener<PongEventPayload>('pong', listener);
}

export { PongEventPayload };
