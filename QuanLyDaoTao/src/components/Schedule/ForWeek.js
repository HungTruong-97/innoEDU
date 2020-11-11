import React, { version } from 'react';
import {
    View, TouchableOpacity, Text, Dimensions, ImageBackground, ScrollView
} from 'react-native';
import Modal from "react-native-modal";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Icon from 'react-native-vector-icons/Feather';
import CONST from '../../common/Const';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');

LocaleConfig.locales["fr"] = {
    monthNames: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12"
    ],
    monthNamesShort: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12"
    ],
    dayNames: [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy"
    ],
    dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
};
const time = [
    { name: "1", start: "7h", end: "7h50" },
    { name: "2", start: "8h", end: "8h50" },
    { name: "3", start: "9h", end: "9h50" },
    { name: "4", start: "10h", end: "10h50" },
    { name: "5", start: "12h", end: "12h50" },
    { name: "6", start: "13h", end: "13h50" },
    { name: "7", start: "14h", end: "14h50" },
    { name: "8", start: "15h", end: "15h50" },
    { name: "9", start: "16h", end: "16h50" },
    { name: "10", start: "17h", end: "17h50" },
    { name: "11", start: "18h", end: "18h50" },
    { name: "12", start: "19h", end: "19h50" },
];
LocaleConfig.defaultLocale = 'fr';
var listDateBackUp;
export default class ForWeek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listDate: {},
            dateShow: null,
            isShowModal: false,
            dateChoosed: "",
            today: "",
            current: '2016-09-05',
        };
    }
    componentDidMount() {
        let listDate = [];
        // for (let i = 0; i < this.props.schedule.length; i++) {
        //     //console.log(this.props.schedule[i].NgayHoc);
        //     listDate.push(this.props.schedule[i].NgayHoc.slice(0, 10));
        // }
        listDateBackUp = listDate;
        let listDateObj = {};
        listDate.forEach((day) => {
            if(day=="2016-09-05")
            {
                listDateObj[day] = {
                    marked: true,
                    dotColor: 'blue',
                    selected: true,
                    selectedColor: 'blue'
                }
            }
            else
            {
                listDateObj[day] = {
                    marked: true,
                    dotColor: 'blue'
                }
            }
            
        });
        let date = new Date(1473037200*1000);
        let today = {
            timestamp: date.getTime(),
            dateShow: (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())
                + "/" + (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1))
                + "/" + date.getFullYear(),
            dateString:date.getFullYear()
                        + "-" + (date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1))
                        +"-"+(date.getDate() < 10 ? "0" + date.getDate() : date.getDate())

        };
        this.setState({ listDate: listDateObj, today })
    }

    onClickDate = (date) => {
        let listDate = listDateBackUp;
        let listDateObj={};
        let data = null;
        // for (let i = 0; i < this.props.schedule.length; i++) {
        //     if (this.props.schedule[i].NgayHoc.slice(0, 10) == date.dateString) {
        //         data = this.props.schedule[i];
        //         break;
        //     }
        // }
        let dateChoosed = new Date(date.timestamp);
        let str = "" + (dateChoosed.getDay() == 0 ? "Chủ nhật-"
            : ("Thứ " + (dateChoosed.getDay() + 1) + "-"))
            + (dateChoosed.getDate() < 10 ? "0" + dateChoosed.getDate() : dateChoosed.getDate())
            + "/" + (dateChoosed.getMonth() < 9 ? "0" + (dateChoosed.getMonth() + 1) : (dateChoosed.getMonth() + 1))
            + "/" + dateChoosed.getFullYear();
        if (listDate.filter((date) => { return date == date.dateString; }).length == 0) {
            listDate.push(date.dateString);
        }
        
        listDate.forEach((day) => {
            if (day == date.dateString) {
                listDateObj[day] = {
                    marked: true,
                    dotColor: 'blue',
                    selected: true,
                    selectedColor: 'blue'
                }
            }
            else{
                listDateObj[day] = {
                    marked: true,
                    dotColor: 'blue'
                }
            }

        });
        this.setState({ dateShow: data, isShowModal: true, dateChoosed: str,listDate:listDateObj});

    }

    renderTimeStudy = (start, end) => {
        let timeStart, timeEnd;
        for (let i = 0; i < time.length; i++) {
            if (time[i].name == start)
                timeStart = time[i].start;
            else if (time[i].name == end)
                timeEnd = time[i].end;
        }
        return timeStart + "-" + timeEnd;
    }
    editNameClass = (name) => {
        let i = name.lastIndexOf('-');
        return name.slice(0, i - 1);
    }
    renderItemScroll = () => {
        if (this.state.dateShow == null) return null;
        let arr = [];
        for (let i = 0; i < this.state.dateShow.dsMonHoc.length; i++) {
            arr.push(
                <View style={{ paddingTop: 0.03 * width, paddingBottom: 0.03 * width, width: 0.9 * width, flexDirection: 'row', borderColor: 'rgba(0, 0, 0, 0.2)', borderTopWidth: 1 }}
                    key={this.state.dateShow.dsMonHoc[i].ID}
                >
                    <Icon name="clock" color='red' size={0.05 * width}
                        style={{ marginLeft: 0.03 * width, marginRight: 0.03 * width }}
                    />
                    <View>
                        <Text style={{ fontFamily: "Roboto-Regular", color: 'red', fontSize: 0.038 * width }}>
                            Thời gian học: {this.renderTimeStudy(this.state.dateShow.dsMonHoc[i].TietBatDau, this.state.dateShow.dsMonHoc[i].TietBatDau+this.state.dateShow.dsMonHoc[i].SoTiet)}
                        </Text>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 0.042 * width, marginTop: 0.02 * width, width: 0.7 * width }}>
                            Tiết {this.state.dateShow.dsMonHoc[i].TietBatDau}
                            -{this.state.dateShow.dsMonHoc[i].TietBatDau+this.state.dateShow.dsMonHoc[i].SoTiet}:{'\r'}
                            {this.editNameClass(this.state.dateShow.dsMonHoc[i].TenLopHocPhan)}
                        </Text>
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 0.038 * width, width: 0.7 * width }}>
                            Phòng :{'\r'}
                            {this.state.dateShow.dsMonHoc[i].TenPhongHoc}
                        </Text>
                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 0.038 * width, width: 0.7 * width }}>
                            Giảng viên :{'\r'}
                            {this.state.dateShow.dsMonHoc[i].GiangVien}
                        </Text>
                    </View>
                </View>
            );
        }
        return arr;
    }
    renderModal = () => {
        return (
            <Modal isVisible={this.state.isShowModal}>
                <View style={{ maxHeight: 0.9 * height, width: 0.9 * width, minHeight: 0.4 * height, backgroundColor: "white", borderRadius: 10 }}>
                    <View style={{ width: 0.9 * width, height: 0.08 * height, borderColor: 'rgba(0, 0, 0, 0.2)', borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 0.04 * width, marginLeft: 0.025 * width, color: '#3076F1' }}>
                            {this.state.dateChoosed}
                        </Text>
                        <TouchableOpacity style={{ alignItems:'center',
                        justifyContent:'center',height:0.08*height,width:0.13*width }}
                            onPress={() => this.setState({ isShowModal: false })}
                        >
                            <Icon name="x" color='black' size={0.044 * width} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        {this.renderItemScroll()}
                    </ScrollView>
                </View>
            </Modal>
        );
    }

    onPressToDay = () => {
        this.setState({ current: this.state.today.dateString.clone });
        this.onClickDate(this.state.today);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text style={{ fontFamily: "Roboto-Regular", fontSize: 0.05 * width, textAlign: 'center', marginTop: 15 }}>
                    Học kỳ 1 2020 {/* Học kỳ {this.props.currentSemester.HocKy} {this.props.currentSemester.NamHoc} */}
                </Text>
                <Calendar
                    style={{ borderTopWidth: 1, paddingTop: 15, borderBottomWidth: 1, borderColor: "#eee" }}
                    current={'2016-09-05'}
                    hideExtraDays
                    firstDay={1}
                    onDayPress={(day) => this.onClickDate(day)}
                    markedDates={
                        this.state.listDate
                    }
                />
                <TouchableOpacity style={{ width: 0.53 * width, height: 0.06 * height, marginTop: 0.05 * height, marginLeft: 0.235 * width }}
                    onPress={() => this.onPressToDay()}
                >
                    <ImageBackground
                        style={{ width: 0.53 * width, height: 0.06 * height, justifyContent: 'center', alignItems: 'center' }}
                        source={require('../../assets/img/button1.png')}
                        resizeMode='contain'
                    >
                        <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.039 * width, color: '#FFFFFF' }}>
                            Hôm nay{'\r'}
                            ({this.state.today.dateShow != null ? this.state.today.dateShow.slice(0, 5) : null})
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
                {this.renderModal()}
            </View>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        // if(this.props.changeScreenState==CONST.STATE_CHANGE_SCREEN_TRYING)
        //     {
        //         this.props.dispatch({
        //             type:CONST.ACTION_CHANGE_SCREEN_RESPONSE_SUCCESS
        //         });
        //         this.onClickDate(this.props.date);
        //     }
    }
}

// function mapStateToProps(state) {
//     return {
//         currentSemester:state.reducerLogin.currentSemester,
//         schedule: state.reducerSchedule.schedule,
//         changeScreenState:state.reducerChangeScreen.changeScreenState,
//         date:state.reducerChangeScreen.date
//     };
// }
// export default connect(mapStateToProps)(ForWeek);