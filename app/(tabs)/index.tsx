import React, { useCallback, useEffect, useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import b4a from 'b4a';
import { addPongListener, ping, pingAsync } from '@/modules/buffer-example';

export default function HomeScreen() {
  const [sync, setSync] = useState('');
  const [async, setAsync] = useState('');

  useEffect(() => {
    const subscription = addPongListener(({ value }) => setAsync(() => typeof value === 'string' ? value : b4a.toString(value)));
    return () => subscription.remove()
  }, []);

  const onPressSync = useCallback(() => setSync(() => {
    const pong = ping();
    return typeof pong === 'string' ? pong : b4a.toString(pong);
  }), []);

  return (
    <SafeAreaView style={{ flex: 1, gap: 8, backgroundColor: '#AAA' }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Button title='Ping' onPress={onPressSync}/>
        <Text>{sync}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Button title='Ping Async' onPress={() => pingAsync()}/>
        <Text>{async}</Text>
      </View>
    </SafeAreaView>
  );
}
