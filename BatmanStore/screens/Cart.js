import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import CartHeader from '../components/Cart/CartHeader'
import { Divider } from 'react-native-elements'
import CartOrders from '../components/Cart/CartOrders'

export default function Cart({ navigation }) {
    return (
        <SafeAreaView style={styles.root}>
            <View style={{ marginBottom: 20 }}>
                <CartHeader navigation={navigation} />
            </View>
            <Divider width={1} orientation="vertical" />
            <CartOrders items={0} navigation={navigation} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    root: {
        paddingTop: Platform.OS === "android" ? 35 : 0,
        backgroundColor: "#fff",
        flex: 1,
        padding: 10,
    },
});