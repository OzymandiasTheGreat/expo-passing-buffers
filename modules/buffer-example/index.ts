import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to BufferExample.web.ts
// and on native platforms to BufferExample.ts
import BufferExampleModule from './src/BufferExampleModule';
import BufferExampleView from './src/BufferExampleView';
import { ChangeEventPayload, BufferExampleViewProps } from './src/BufferExample.types';

// Get the native constant value.
export const PI = BufferExampleModule.PI;

export function hello(): string {
  return BufferExampleModule.hello();
}

export async function setValueAsync(value: string) {
  return await BufferExampleModule.setValueAsync(value);
}

const emitter = new EventEmitter(BufferExampleModule ?? NativeModulesProxy.BufferExample);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { BufferExampleView, BufferExampleViewProps, ChangeEventPayload };
