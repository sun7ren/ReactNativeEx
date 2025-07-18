import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { listener2 } from './listener';

const Task12 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const unsubscribe = listener2(() => {
            setCount(c => c + 1);
        });

        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, []);

    return (
        <View>
            <Text>Listener called: {count} times</Text>
        </View>
    );
};

export default Task12;

const styles = StyleSheet.create({});
