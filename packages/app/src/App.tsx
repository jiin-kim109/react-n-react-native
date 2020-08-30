import { registerRootComponent } from 'expo';
import { Provider } from 'mobx-react';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import firebase from './src/firebase/firebase';

import firebase from '../../common/src/firebase/firebase';
import RootStore from '../../common/src/store/RootStore';

interface State {}

interface Props {}

class App extends Component<Props, State> {
    private rootStore: RootStore;
    private firebase: any;

    constructor(props: Props) {
        super(props);
        this.rootStore = new RootStore();
        this.firebase = firebase;
    }

    render() {
        return (
            <>
                <Provider rootStore={this.rootStore}>
                    <View style={styles.container}>
                        <Text>Hi Inklings!!!</Text>
                        <StatusBar style="auto" />
                    </View>
                </Provider>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default registerRootComponent(App);
