import 'react-native-get-random-values';
import React from 'react';
import {
    View
} from 'react-native';
import HeaderTitle from '../../common/HeaderTitle';
import { WebView } from 'react-native-webview';

export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    goBackScreen = () => {
        this.props.navigation.goBack();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF'}}>
                <HeaderTitle title="Tin nhắn" goBackScreen={this.goBackScreen}/>
                <WebView
                    ref={ref=>this.webView=ref}
                    source={{ uri: 'https://www.facebook.com/HocvienPTIT/' }} />
            </View>
        );
    }
}
