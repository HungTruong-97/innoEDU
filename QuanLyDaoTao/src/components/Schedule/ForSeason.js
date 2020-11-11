import React, { version } from 'react';
import {
    View, TouchableOpacity, Text, Dimensions, FlatList, Image, ImageBackground
} from 'react-native';
import Modal from "react-native-modal";
import {connect} from "react-redux"
import CONST from "../../common/Const"
const { width, height } = Dimensions.get('window');

export default class ForSeason extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    MaHocPhan: 'MUL1392',
                    TenHocPhan: 'Truyền thông : Lý thuyết và ứng dụng',
                    SoTinChi: 2,
                    tenGV: 'V.T.Thành',
                    soDT: '0999999999'
                },
                {
                    MaHocPhan: 'MUL1428',
                    TenHocPhan: 'Lập trình kỹ xảo hình ảnh',
                    SoTinChi: 2,
                    tenGV: 'N.D.Dũng',
                    soDT: '0999999999'
                },
                {
                    MaHocPhan: 'MUL1430',
                    TenHocPhan: 'Khai phá dữ liệu đa phương tiện',
                    SoTinChi: 3,
                    tenGV: 'H.H.Hạnh',
                    soDT: '0999999999'
                },
                {
                    MaHocPhan: 'MUL1482',
                    TenHocPhan: 'Thực hành chuyên sâu',
                    SoTinChi: 4,
                    tenGV: 'P.V.M.Tú',
                    soDT: '0999999999'
                },
                {
                    MaHocPhan: 'MUL1483',
                    TenHocPhan: 'Lập trình game nâng cao',
                    SoTinChi: 3,
                    tenGV: 'P.V.M.Tú',
                    soDT: '0999999999'
                }
            ],
            isShowModal: false,
            dataModal: ""
        };
    }
    componentDidMount()
    {
        // if(this.props.getRegisteredState!=CONST.STATE_GET_LIST_REGISTERED_SUCCESS)
        //     {
        //         //let subjectRegistered= await this.fetchListRegistered();
        //         this.props.dispatch({
        //             type:CONST.ACTION_GET_LIST_REGISTERED_REQUEST,
        //             token: this.props.token,
        //             semester: this.props.currentSemester.MaHocKy
        //         });
        //     }
    }
    onClickListStudent=(mlhp)=>{
        this.setState({isShowModal:false});
        this.props.goToListStudent(this.props.token,mlhp);
    }
    goToScreenSurvey=()=>
    {   
        this.setState({isShowModal:false});
        this.props.goToSurvey();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f0f1f6', alignItems: 'center' }}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => item.MaLopHocPhan}
                    extraData={this.props.listRegistered}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity
                            style={{ width: 0.91 * width, minHeight: 0.14 * height, 
                            backgroundColor: '#FFFFFF', shadowColor: 'rgba(0, 0, 0, 0.1)', 
                            borderRadius: 20, marginTop: 0.028 * height,
                            marginBottom:this.state.data.length==index?0.04*height:0}}
                            onPress={() => { this.setState({ dataModal: item, isShowModal: true }) }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 0.05 * width, marginLeft: 0.08 * width }}>
                                <View style={{ width: 0.11 * width, height: 0.11 * width, borderRadius: width, backgroundColor: '#D3E3F2', alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        style={{ width: 0.043 * width, height: 0.043 * width, resizeMode: 'contain' }}
                                        source={require('../../assets/img/e-learning.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 0.042 * width }}>
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.037 * width, width: 0.6 * width }}>
                                        {item.TenHocPhan}
                                    </Text>
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.037 * width, color: 'rgba(0, 0, 0, 0.5)' }}>
                                        {item.MaHocPhan}
                                    </Text>
                                </View>
                            </View>
                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.032 * width, color: 'rgba(0, 0, 0, 0.5)', marginTop: 0.024 * width, marginLeft: 0.7 * width }}>
                                {item.SoTinChi} tín chỉ
                            </Text>
                        </TouchableOpacity>
                    }
                />
                <Modal isVisible={this.state.isShowModal}>
                    <TouchableOpacity style={{ width: width, height: height, position: 'absolute' }}
                        activeOpacity={1}
                        onPress={() => this.setState({ isShowModal: false })}
                    >
                        <View style={{ width: 0.91 * width, height: 0.57 * height, backgroundColor: '#FFFFFF', marginTop: 0.23 * height, alignItems: 'center', borderRadius: 20 }}>
                            <Text style={{ width: 0.7 * width, textAlign: 'center', fontFamily: 'Roboto-Bold', fontSize: 0.05 * width, marginTop: 0.036 * width }}>
                                {this.state.dataModal.TenHocPhan}
                            </Text>
                            <View style={{ width: 0.91 * width, marginTop: 0.05 * height }}>
                                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.037 * width, marginLeft: 0.05 * width }}>
                                    Số tín chỉ:  <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 0.037 * width }}>
                                        {this.state.dataModal.SoTinChi}
                                    </Text>
                                </Text>
                                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.037 * width, marginLeft: 0.05 * width, marginTop: 0.022 * height }}>
                                    Mã môn học:  <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 0.037 * width }}>
                                        {this.state.dataModal.MaHocPhan}
                                    </Text>
                                </Text>
                                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.037 * width, marginLeft: 0.05 * width, marginTop: 0.022 * height }}>
                                    Thời gian:  <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 0.037 * width }}>
                                        {this.state.dataModal.GiangVien}
                                    </Text>
                                </Text>
                                <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.037 * width, marginLeft: 0.05 * width, marginTop: 0.022 * height }}>
                                    Mã lớp học phần:  <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 0.037 * width }}>
                                        {this.state.dataModal.MaLopHocPhan}
                                    </Text>
                                </Text>
                            </View>
                            <TouchableOpacity style={{ width: 0.53 * width, height: 0.06 * height, marginTop: 0.04 * height}}
                                onPress={()=>this.onClickListStudent(this.state.dataModal.MaLopHocPhan)}
                            >
                                <ImageBackground
                                    style={{ width: 0.53 * width, height: 0.06 * height, justifyContent: 'center', alignItems: 'center' }}
                                    source={require('../../assets/img/button1.png')}
                                    resizeMode='contain'
                                >
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.039 * width, color: '#FFFFFF' }}>
                                        Danh sách sinh viên
                                    </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 0.53 * width, height: 0.06 * height, marginTop: 0.01 * height}}
                                onPress={()=>this.onClickListStudent(this.state.dataModal.MaLopHocPhan)}
                            >
                                <ImageBackground
                                    style={{ width: 0.53 * width, height: 0.06 * height, justifyContent: 'center', alignItems: 'center' }}
                                    source={require('../../assets/img/button1.png')}
                                    resizeMode='contain'
                                >
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.039 * width, color: '#FFFFFF' }}>
                                        Thống kê giờ dạy
                                    </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 0.53 * width, height: 0.06 * height, marginTop: 0.01 * height}}
                                onPress={()=>this.goToScreenSurvey()}
                            >
                                <ImageBackground
                                    style={{ width: 0.53 * width, height: 0.06 * height, justifyContent: 'center', alignItems: 'center' }}
                                    source={require('../../assets/img/button1.png')}
                                    resizeMode='contain'
                                >
                                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.039 * width, color: '#FFFFFF' }}>
                                        Khảo sát
                                    </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                </Modal>
            </View>
        );
    }
}

// function mapStateToProps(state)
// {
//     return{
//         getRegisteredState:state.reducerListRegistered.getRegisteredState,
//         listRegistered:state.reducerListRegistered.listRegistered,
//         token: state.reducerLogin.token,
//         currentSemester: state.reducerLogin.currentSemester
//     };
// }

// export default connect(mapStateToProps)(ForSeason);