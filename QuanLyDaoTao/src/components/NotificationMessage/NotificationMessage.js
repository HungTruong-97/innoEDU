import React from 'react';
import {
    View, TouchableOpacity, FlatList, Image, Text, Dimensions
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/Feather';
import HeaderTitle from '../../common/HeaderTitle';
const { width, height } = Dimensions.get('window');

export default class NotificationMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    key: "1",
                    department: "Phòng giáo vụ",
                    time: "29/07/20",
                    title: "Lưu ý sinh viên khi thực hiện đăng ký thời khóa biểu",
                    content: "Phòng giáo vụ đã đặt thời gian đăng ký TKB cho mỗi Khóa/Ngành là 3 ngày, sau ngày đăng ký đầu tiên PGV sẽ rà soát tình hình thực hiện đăng ký của sinh viên và sẽ thực hiện điều chỉnh TKB một số nhóm Học phần nếu cần thiết"
                },
                {
                    key: "2",
                    department: "Phòng giáo vụ",
                    time: "28/07/20",
                    title: "Phòng giáo vụ thông báo v/v thay đổi học phần của chuyên ngành PTUDĐPT",
                    content: "Theo đề nghị của Khoa chuyên môn, trong học kỳ 1 năm học 2020 - 2021, sinh viên chuyên ngành Phát triển ứng dụng đa phương tiện - ngành Công nghệ đa phương tiện - Khóa 2017 sẽ học học phần"
                },
                {
                    key: "3",
                    department: "Phòng giáo vụ",
                    time: "28/07/20",
                    title: "Thông báo về việc đăng ký môn học học kỳ 1 năm học 2020- 2021",
                    content: "Hệ thống mở cho sinh viên đăng ký môn học học kỳ 1 năm học 2020- 2021 từ 12h trưa ngày 28/07/2020 theo kế hoạch gửi kèm. Các sinh viên còn nợ học phí đề nghị hoàn thành trước ngày 25/08/2020 "
                },
                {
                    key: "4",
                    department: "Phòng giáo vụ",
                    time: "29/07/20",
                    title: "Đăng ký xét tốt nghiệp đợt tháng 08/2020 cho sinh viên hệ chính quy các khóa đủ điều kiện tốt nghiệp",
                    content: "Từ ngày 31/3 - 15/4, cán bộ các lớp từ khóa D15-D18 nộp lại về phòng Giáo vụ trong tuần này để phòng giáo vụ tổng hợp"
                },
                {
                    key: "5",
                    department: "Phòng giáo vụ",
                    time: "26/06/20",
                    title: "Đăng ký thời khóa biểu kỳ phụ 2019-2020",
                    content: "Phòng Giáo vụ thông báo về việc mở các Lớp học và đăng ký Thời khóa biểu học kỳ phụ, năm học 2019-2020. Cụ thể:"
                },
                {
                    key: "6",
                    department: "Phòng giáo vụ",
                    time: "18/06/20",
                    title: "Thông báo đăng ký học phần thực tập tốt nghiệp",
                    content: "Phòng Giáo vụ  thông báo tới Sinh viên các ngành khối Kỹ thuật Đại học khóa 2016 (Công nghệ thông tin, An toàn thông tin, Điện tử truyền thông, Kỹ thuật Điện-Điện tử, Công nghệ đa phương tiện)"
                }
            ]
        };
    }

    goBackScreen = () => {
        this.props.navigation.goBack();
    }
    onDeleteItem=(index)=>
    {
        let data=this.state.data;
        data.splice(index,1);
        this.setState(data);
    }
    renderItem=(item,index)=>{
        return(
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 0.92 * width, 
                                minHeight: 0.19 * height, borderBottomColor: 'solid rgba(0, 0, 0, 0.3)', 
                                borderBottomWidth: 1,backgroundColor:'#FFFFFF' ,
                                paddingBottom: index==5?0.1*height:0}}
                                onPress={() => this.props.navigation.navigate('Screen_NotificationDetail',{title:item.key})}
                                activeOpacity={1}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 0.037 * width }}>
                                    <Image
                                        style={{ width: 0.13 * width, height: 0.13 * width, resizeMode: 'contain' }}
                                        source={require("../../assets/img/logo_mini.png")}
                                    />
                                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginLeft: 0.04 * width }}>
                                        <View>
                                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.033 * width }}>
                                                {item.department}
                                            </Text>
                                            <Text ellipsizeMode='tail' numberOfLines={1}
                                                style={{ width: 0.54 * width, fontFamily: "Roboto-Bold", fontSize: 0.038 * width }}>
                                                {item.title}
                                            </Text>
                                        </View>
                                        <Text style={{ fontFamily: "Roboto-Regular", fontSize: 0.033 * width, marginLeft: 0.06 * width }}>
                                            {item.time}
                                        </Text>
                                    </View>
                                </View>
                                <Text style={{ width: 0.7 * width, fontFamily: 'Roboto-Regular', fontSize: 0.037 * width, paddingLeft: 0.08 * width, marginBottom: 0.037 * width }}
                                    numberOfLines={2}
                                    ellipsizeMode='tail'
                                >
                                    {item.content}
                                </Text>
                            </TouchableOpacity>
        );
    }
    renderHiddenItem=(item,index)=>{
        return(
            <View style={{alignItems: 'flex-end',
                        backgroundColor: '#FFFFFF',
                        flex: 1,
                        paddingLeft: 15}}
                >
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    bottom: 0,
                    justifyContent: 'center',
                    position: 'absolute',
                    top: 0,
                    width: 0.2*width,
                    backgroundColor: 'red',
                    right: 0,
                }}
                onPress={()=>this.onDeleteItem(index)}
            >
                <Icon name="trash-2" color='#FFFFFF' size={0.1 * width} />
            </TouchableOpacity>
        </View>
        );
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center'  }}>
                <HeaderTitle title="Thông báo" goBackScreen={this.goBackScreen}/>
                    
                    <SwipeListView
                        data={this.state.data}
                        extraData={this.state}
                        renderItem={({ item, index }) => this.renderItem(item, index)}
                        renderHiddenItem={({ item, index }) => this.renderHiddenItem(item, index)}
                        disableRightSwipe={true}
                        rightOpenValue={-0.2*width}
                        previewOpenValue={-0.1*width}
                        previewOpenDelay={2000}
                    />
            </View>
        );
    }
}