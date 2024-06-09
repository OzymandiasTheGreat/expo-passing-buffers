import * as React from 'react';

import { BufferExampleViewProps } from './BufferExample.types';

export default function BufferExampleView(props: BufferExampleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
