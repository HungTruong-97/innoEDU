import React from 'react';
import {
    View, Text, StyleSheet, Image, Dimensions,
    TouchableOpacity, FlatList, Platform,BackHandler,Alert
} from 'react-native';
import TopBarSearch from '../../common/TopBarSearch';
import ItemScrollView from './ItemScrollView';
import IteamNotice from './ItemNotice';
import { connect } from 'react-redux';
import CONST from "../../common/Const";
import {scaleSizeScreen} from '../../common/scaleSizeScreen';
//import Loading from "../../common/Loading";
//import { firebaseApp } from '../../../firebase.config';
//import 'firebase/firestore';
const { width, height } = Dimensions.get("window");
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        // this.subscribeBackHandler = this.props.navigation.addListener('focus', () => {
        //     BackHandler.addEventListener(
        //         "hardwareBackPress",
        //         this.onBackButtonPressAndroid
        //     );
        // });
        this.state = {
            goToMessage: 1,
            listSchedule: [null, null, null, null, null],
        };
        this.index = 0;
        //this.db=firebase.firestore(firebaseApp);
    }
    componentDidMount() {
        // this.props.dispatch({
        //     type: CONST.ACTION_GET_SCHEDULE_REQUEST,
        //     token: this.props.token,
        //     semester:this.props.currentSemester.MaHocKy
        // });
        // this.props.dispatch({
        //     type: CONST.ACTION_LOADING_START,
        // });
        // this.unSubscribeBackHandler = this.props.navigation.addListener('blur', () => {
        //     BackHandler.removeEventListener(
        //         "hardwareBackPress",
        //         this.onBackButtonPressAndroid
        //     );
        // });
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
    
    // setSchedule = () => {
    //     let today = 1473037200;
    //     let listSchedule = [];
    //     let day = 86400;
    //     for (let i = 0; i < 5; i++) {
    //         let date = new Date((today + day * i) * 1000);
    //         let dateString = date.getFullYear()
    //             + "-" + (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1))
    //             + "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
    //         let data = {
    //             day: "" + (date.getDay() == 0 ? "Chủ nhật"
    //                 : ("Thứ " + (date.getDay() + 1))),
    //             dateString: (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
    //                 + "/" + (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1))
    //                 + "/" + date.getFullYear(),
    //             timestamp: (today + day * i) * 1000,
    //             dsMonHoc: null
    //         };
    //         for (let j = 0; j < this.props.schedule.length; j++) {
    //             if (dateString == this.props.schedule[j].NgayHoc.slice(0, 10)) {
    //                 data.dsMonHoc = this.props.schedule[j].dsMonHoc;
    //                 break;
    //             }
    //         }
    //         listSchedule.push(data);
    //     }
    //     //console.log(listSchedule[1]);
    //     this.setState({ listSchedule });
    // }

    goToScreenMessage = () => {
        this.props.navigation.navigate('Screen_Message');
    }

    goToScreenNotificationMessage = () => {
        this.props.navigation.navigate('Screen_NotificationMessage');
    }

    goToNotificationDetail = (title) => {
        this.props.navigation.navigate('Screen_NotificationDetail',{title:title});
    }

    renderItemSchedule = () => {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(
                <ItemScrollView key={"" + i}
                    marginRight={i == 4 ? 0.045 * width : 0}
                    schedule={this.state.listSchedule[i]}
                />
            );
        }
        return arr;
    }
    isLegitIndex(index, length) {
        if (index < 0 || index >= length) return false;
        return true;
    }
    pagination = (velocity, x) => {
        let nextIndex;
        if (Platform.OS == "ios")
            nextIndex = velocity > 0 ? this.index + 1 : this.index - 1;
        else {
            if (velocity < 0) {
                nextIndex = (x > (0.915 * width * this.index + 0.915 * width / 3)) ? this.index + 1 : this.index;
            }
            else {
                nextIndex = (x < (0.915 * width * this.index + 0.915 * width / 2)) ? this.index - 1 : this.index;
            }
        }
        //nextIndex = velocity < 0 ? this.index + 1 : this.index - 1;

        if (this.isLegitIndex(nextIndex, this.state.listSchedule.length)) {
            this.index = nextIndex;
        }
        this.flatlist.scrollToIndex({ index: this.index, animated: true });
    }
    getItemLayout = (data, index) => ({
        length: 0.915 * width,
        offset: 0.915 * width * index,
        index
    })
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f0f1f6' }}>
                <Image style={{
                    resizeMode: "stretch",
                    width: width,
                    position: 'absolute'
                }}
                    source={require('../../assets/img/eclipse_home.png')}
                />
                <TopBarSearch color='#FFFFFF'
                    screen="home"
                    marginTop={scaleSizeScreen(10,height,1)}
                    goToMessage={this.goToScreenMessage}
                    goToNotificationMessage={this.goToScreenNotificationMessage}
                />

                <View>
                    <FlatList
                        ref={ref => (this.flatlist = ref)}
                        data={this.state.listSchedule}
                        extraData={this.state.listSchedule.slice(0, 1)}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index + ""}
                        onScrollEndDrag={e => {
                            //console.log(e.nativeEvent);
                            this.pagination(
                                e.nativeEvent.velocity.x,
                                e.nativeEvent.contentOffset.x
                            );
                        }}
                        getItemLayout={this.getItemLayout}
                        renderItem={({ item, index }) =>
                            <ItemScrollView
                                marginRight={index == 4 ? 0.045 * width : 0}
                                schedule={item}
                            />
                        }
                    />
                </View>

                <View style={{ width: width, height: 0.35 * height, marginTop: 0.02 * height, backgroundColor: 'rgba(255, 255, 255, 1)', alignItems: 'center' }}>
                    <View style={{ width: 0.91 * width, flexDirection: 'row', marginTop: 0.01 * height, justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 0.05 * width }}>
                            Thông báo mới nhất
                        </Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Screen_Notification')
                            }
                            disabled
                        >
                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 0.033 * width, color: '#3076F1' }}>
                                
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: 0.91 * width, marginTop: 0.02 * height, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <IteamNotice txt="Thông báo tuyển sinh đại học 2020" detailScreen={this.goToNotificationDetail} />
                        <IteamNotice txt="Thông báo Đề án tuyển sinh đại học 2020" detailScreen={this.goToNotificationDetail} />
                    </View>
                    <View style={{ width: 0.91 * width, marginTop: 0.01 * height, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <IteamNotice txt="Thông báo tuyển sinh đại học 2020" detailScreen={this.goToNotificationDetail} />
                        <IteamNotice txt="Thông báo Đề án tuyển sinh đại học 2020" detailScreen={this.goToNotificationDetail} />
                    </View>
                </View>
                {/* <Loading /> */}
            </View>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        // if (this.props.scheduleState != prevProps.scheduleState
        //     && this.props.scheduleState == CONST.STATE_GET_SCHEDULE_SUCCESS) {
        //     this.setSchedule();
        // }
        // if (this.props.changeScreenState == CONST.STATE_CHANGE_SCREEN_TRYING &&
        //     this.props.changeScreenState != prevProps.changeScreenState) {
        //     this.props.navigation.jumpTo('Screen_Schedule');
        // }
    }
}


// function mapStateToProps(state) {
//     return {
//         token: state.reducerLogin.token,
//         schedule: state.reducerSchedule.schedule,
//         scheduleState: state.reducerSchedule.scheduleState,
//         changeScreenState: state.reducerChangeScreen.changeScreenState,
//         currentSemester:state.reducerLogin.currentSemester
//     };
// }
// export default connect(mapStateToProps)(Home);

var css = StyleSheet.create({

});