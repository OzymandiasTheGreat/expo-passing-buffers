import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { BufferExampleViewProps } from './BufferExample.types';

const NativeView: React.ComponentType<BufferExampleViewProps> =
  requireNativeViewManager('BufferExample');

export default function BufferExampleView(props: BufferExampleViewProps) {
  return <NativeView {...props} />;
}
