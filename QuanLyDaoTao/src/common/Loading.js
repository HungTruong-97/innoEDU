import React from "react";
import {
    View,
    Text,
    ActivityIndicator,
    Dimensions,
    StyleSheet
} from "react-native";
import { connect } from "react-redux";
import CONST from "./Const";
const { width, height } = Dimensions.get("window");

class Loading extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.loadingState);
    }

    render() {
        if (this.props.loadingState == CONST.STATE_LOADING_RUNNING) {
            return (
                <View style={{ width: width, height: height, position: 'absolute', backgroundColor: "'rgba(50, 50, 50, 0.5)'", alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                    <View style={{width: width / 1.5,
                                    height: height / 6.5,
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center"}}>
                        <ActivityIndicator size="large" color="#1985CF" />
                        <Text
                            style={{
                                textAlign: "center",
                                fontFamily: "Roboto-Bold",
                                color: "black"
                            }}
                        >
                            Xin chờ trong giây lát...
                        </Text>
                    </View>
                </View>
            );
        }
        return null;
    }
}

function mapStateToProps(state) {
    return {
        loadingState: state.reducerLoading.loadingState
    };
}
export default connect(mapStateToProps)(Loading);