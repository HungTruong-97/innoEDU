import React from 'react';
import {
    View, Text, TextInput, TouchableOpacity, Image, Dimensions,
    StyleSheet, Animated, AsyncStorage, BackHandler,Alert
} from 'react-native';
import CheckBox from 'react-native-check-box';
import { connect } from "react-redux";
import CONST from '../../common/Const';
import Loading from '../../common/Loading';
const { width, height } = Dimensions.get('window');

class Login extends React.Component {

    constructor(props) {
        super(props);
        // this.subscribeBackHandler = this.props.navigation.addListener('focus', () => {
        //     BackHandler.addEventListener(
        //         "hardwareBackPress",
        //         this.onBackButtonPressAndroid
        //     );
        // });
        this.state = {
            txtUserName: "",
            txtPassWord: "",
            isChecked: false,
            moveLogo: new Animated.Value(0.2 * height),
            widthLogo: new Animated.Value(width / 2),
            heightLogo: new Animated.Value(height / 2),
            moveBtLogin: new Animated.Value(0.75 * height),
            opacityBtLogin: new Animated.Value(1),
            sizeTitle: new Animated.Value(0.1 * width),
            moveLoginForm: new Animated.Value(0.7 * height),
            opacityLoginForm: new Animated.Value(0),

        };
        //console.disableYellowBox = true;
    }
    async componentDidMount() {
        // this.unSubscribeBackHandler = this.props.navigation.addListener('blur', () => {
        //     BackHandler.removeEventListener(
        //         "hardwareBackPress",
        //         this.onBackButtonPressAndroid
        //     );
        // });
        let userName, passWord;
        let isRemember = await AsyncStorage.getItem("isRemember");
        if (isRemember == "1") {
            userName = await AsyncStorage.getItem("userName");
            passWord = await AsyncStorage.getItem("passWord");
            this.setState({
                txtUserName: userName,
                txtPassWord: passWord,
                isChecked: true
            });
        }
        // this.backHandler = BackHandler.addEventListener(
        //     "hardwareBackPress",
        //     this.onBackButtonPressAndroid
        // );
    }
    onBackButtonPressAndroid = () => {
        Alert.alert(
            "Thoát",
            "Bạn muốn thoát khỏi ứng dụng?",
            [
                { text: "Quay lại", style: "Quay lại" },
                { text: "Thoát", onPress: () => BackHandler.exitApp() }
            ],
            { cancelable: false }
        );
        return true;
    };
    componentWillUnmount() {
        // this.subscribeBackHandler && this.subscribeBackHandler.remove();
        // this.unSubscribeBackHandler && this.unSubscribeBackHandler.remove();
    }
    showFormLogin = () => {
        const animMoveLogo = Animated.timing(
            this.state.moveLogo,
            {
                toValue: 0.1 * height,
                duration: 1000
            }
        );
        const animWidthLogo = Animated.timing(
            this.state.widthLogo,
            {
                toValue: width / 3,
                duration: 1000
            }
        );
        const animHeightLogo = Animated.timing(
            this.state.heightLogo,
            {
                toValue: height / 4,
                duration: 1000
            }
        );
        const animSizeTitle = Animated.timing(
            this.state.sizeTitle,
            {
                toValue: 0.07 * width,
                duration: 1000
            }
        );
        const animMoveBTLogin = Animated.timing(
            this.state.moveBtLogin,
            {
                toValue: height,
                duration: 1000
            }
        );
        const animOpacityBTLogin = Animated.timing(
            this.state.opacityBtLogin,
            {
                toValue: 0,
                duration: 1000
            }
        );
        const animMoveLoginForm = Animated.timing(
            this.state.moveLoginForm,
            {
                toValue: 0.44 * height,
                duration: 1000
            }
        );
        const animOpacityLoginForm = Animated.timing(
            this.state.opacityLoginForm,
            {
                toValue: 1,
                duration: 1000
            }
        );
        Animated.parallel([animMoveLogo,
            animWidthLogo,
            animHeightLogo,
            animSizeTitle,
            animMoveBTLogin,
            animOpacityBTLogin,
            animMoveLoginForm,
            animOpacityLoginForm
        ]).start();
    }
    clickLogin = () => {
        
        this.props.dispatch({
            type: CONST.ACTION_LOGIN_REQUEST,
            userName: this.state.txtUserName,
            passWord: this.state.txtPassWord
        });
        this.props.dispatch({
            type: CONST.ACTION_LOADING_START
        });
        //this.props.navigation.navigate("Screen_BottomTab")
    }
    loginSuccess = async () => {
        if (this.state.isChecked == true) {
            await AsyncStorage.setItem("isRemember", "1");
            await AsyncStorage.setItem("userName", this.state.txtUserName);
            await AsyncStorage.setItem("passWord", this.state.txtPassWord);
        }
        this.props.dispatch({
            type: CONST.ACTION_LOADING_STOP
        });
        this.props.navigation.navigate("Screen_BottomTab");
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center' }}>
                <Animated.View style={{ marginTop: this.state.moveLogo, alignItems: 'center' }}>
                    <Animated.Image
                        source={require('../../assets/img/icon-app.png')}
                        resizeMode='contain'
                        style={{ width: this.state.widthLogo, height: this.state.heightLogo }}
                    />
                    <Animated.Text style={{ fontFamily: 'Roboto-Bold', fontSize: this.state.sizeTitle, marginTop: 0.01 * height }}>
                        Quản Lý Đào Tạo
                    </Animated.Text>
                </Animated.View>
                <Animated.View style={{ width: width, height: height, alignItems: 'center', position: 'absolute', top: this.state.moveBtLogin, zIndex: 2, opacity: this.state.opacityBtLogin }}>
                    <TouchableOpacity style={{ width: 0.89 * width, height: 0.07 * height, backgroundColor: '#3076F1', justifyContent: 'center', alignItems: 'center', borderRadius: 0.066 * width, marginTop: 0.05 * height }}
                        onPress={() => this.showFormLogin()}
                    >
                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 0.04 * width, color: 'white' }}>
                            Đăng nhập
                            </Text>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={{ position: 'absolute', top: this.state.moveLoginForm, zIndex: 1, opacity: this.state.opacityLoginForm }}>
                    <View style={{ width: 0.89 * width, height: 0.07 * height, borderColor: '#e9e9e9', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 0.066 * width }}>
                        <Image style={{ width: 0.06 * height, height: 0.06 * height }}
                            resizeMode='contain'
                            source={require('../../assets/img/icon_taikhoan.png')}
                        />
                        <TextInput style={{ width: 0.89 * width - 0.05 * height, height: 0.07 * height, fontSize: 0.04 * width }}
                            onChangeText={(txtUserName) => this.setState({ txtUserName })}
                            underlineColorAndroid='#FFFFFF'
                            placeholder='Tài khoản'
                            caretHidden={true}
                            defaultValue={this.state.txtUserName}
                        />
                    </View>

                    <View style={{ width: 0.89 * width, height: 0.07 * height, borderColor: '#e9e9e9', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 0.066 * width, marginTop: 0.03 * height }}>
                        <Image style={{ width: 0.06 * height, height: 0.06 * height }}
                            resizeMode='contain'
                            source={require('../../assets/img/icon_matkhau.png')}
                        />
                        <TextInput style={{ width: 0.89 * width - 0.05 * height, height: 0.07 * height, fontSize: 0.04 * width }}
                            onChangeText={(txtPassWord) => this.setState({ txtPassWord })}
                            underlineColorAndroid='#FFFFFF'
                            placeholder='Mật khẩu'
                            caretHidden={true}
                            secureTextEntry={true}
                            defaultValue={this.state.txtPassWord}
                        />
                    </View>
                    <CheckBox style={{ marginTop: 0.02 * height }}
                        onClick={() => {
                            this.setState({
                                isChecked: !this.state.isChecked
                            })
                        }}
                        isChecked={this.state.isChecked}
                        rightText={"Nhớ mật khẩu"}
                        rightTextStyle={{ textDecorationLine: 'underline' }}
                    />
                    <TouchableOpacity style={{ width: 0.89 * width, height: 0.07 * height, backgroundColor: '#3076F1', justifyContent: 'center', alignItems: 'center', borderRadius: 0.066 * width, marginTop: 0.05 * height }}
                        onPress={() => this.clickLogin()}
                    >
                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 0.04 * width, color: 'white' }}>
                            Đăng nhập
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
                <Loading />
            </View>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.loginState == CONST.STATE_LOGIN_SUCCESS && this.props.loginState != prevProps.loginState) {
            this.loginSuccess();
        }
    }
}

function mapStateToProps(state) {
    return {
        loginState: state.reducerLogin.loginState
    };
}
export default connect(mapStateToProps)(Login);