import React from 'react';
import {
    Image, View, StyleSheet, Text, Dimensions, ScrollView, TouchableOpacity
} from 'react-native';
import CONST from '../../common/Const';
import {connect} from "react-redux";
const { width, height } = Dimensions.get('window');

export default class ItemScrollView extends React.Component {
    constructor(props) {
        super(props);
    }


    editNameClass = (name) => {
        let i = name.lastIndexOf('-');
        return name.slice(0, i - 1);
    }
    checkSchedule = (index) => {

        if (this.props.schedule != null && this.props.schedule.dsMonHoc != null) {
            for (let i = 0; i < this.props.schedule.dsMonHoc.length; i++) {
                if (index == this.props.schedule.dsMonHoc[i].TietBatDau) {
                    return (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.033 * width ,textAlign:'center'}}>
                                Kíp {(index+1)/2}</Text>
                            <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 0.04 * width ,textAlign:'center'}}>
                                {this.props.schedule.dsMonHoc[i].TenPhongHoc}</Text>
                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.033 * width ,textAlign:'center'}}
                                ellipsizeMode='tail' 
                                numberOfLines={1}
                            >
                                {this.editNameClass(this.props.schedule.dsMonHoc[i].TenLopHocPhan)}</Text>
                        </View>
                    );
                }
            }
            return (<Text>___</Text>);
        }
        return (<Text>___</Text>);
    }
    renderItem = (startIndex) => {
        let arr = [];
        for (let i = startIndex; i < (startIndex + 3); i++) {
            arr.push(
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {this.checkSchedule(i * 2 + 1)}
                </View>
            );
        }
        return arr;
    }
    goToScheduleScreen=()=>{
        let dateString=this.props.schedule.dateString.slice(6,10)
        +"-"+this.props.schedule.dateString.slice(3,5)
        +"-"+this.props.schedule.dateString.slice(0,2)
        // this.props.dispatch({
        //     type:CONST.ACTION_GOTO_SCREEN_SCHEDULE,
        //     date:{
        //         dateString:dateString,
        //         timestamp:this.props.schedule.timestamp
        //     }
        // });
        //console.log(this.props.changeScreenState);
    }
    render() {
        return (
            <View style={{}}>
                <Text style={{ fontSize: 0.05 * width, color: '#FFFFFF', marginLeft: 0.1 * width, marginTop: 0.01 * height, fontFamily: 'Roboto-Bold', marginBottom: 0.01 * height }}>
                    {this.props.schedule != null
                        ? (this.props.schedule.day + "-" + this.props.schedule.dateString)
                        : null}
                </Text>
                <TouchableOpacity style={{ backgroundColor: '#FFFFFF',marginLeft: 0.045 * width, width: 0.87 * width, height: 0.31 * height, borderRadius: 20, justifyContent: 'center', marginRight: this.props.marginRight }}
                    activeOpacity={1}
                    onPress={() => this.goToScheduleScreen()}
                >
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        {this.renderItem(0)}
                    </View>
                    <View style={{ flex: 1, borderTopColor: '#E5E5E5', borderTopWidth: 2, flexDirection: 'row' }}>
                        {this.renderItem(3)}
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}
// function mapStateToProps(state) {
//     return {
//         changeScreenState:state.reducerChangeScreen.changeScreenState
//     };
// }
// export default connect(mapStateToProps)(ItemScrollView);