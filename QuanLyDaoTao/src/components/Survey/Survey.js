import React,{Component} from 'react';
import {
    SafeAreaView,View,Text,Dimensions
} from 'react-native';
import HeaderTitle from '../../common/HeaderTitle';
import {scaleSizeScreen} from '../../common/scaleSizeScreen';

const {width,height}=Dimensions.get("window");

export default class Survey extends Component{
    constructor(props)
    {
        super(props);
    }
    goBackScreen = () => {
        this.props.navigation.goBack();
    }
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{ flex: 1 ,backgroundColor: '#FFFFFF',alignItems:'center'}}>
                    <HeaderTitle title="Danh sách sinh viên" goBackScreen={this.goBackScreen} />
                    <Text style={{width:scaleSizeScreen(259,width),fontFamily:"Roboto-Bold",fontSize:0.04*width,textAlign:'center',
                                marginTop:scaleSizeScreen(38,height,1)}}>
                        Kết quả khảo sát đánh giá giảng dạy Học kỳ 2, 2018 - 2019
                    </Text>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.037 * width, 
                            color: 'rgba(0, 0, 0, 0.5)',textAlign:'center',marginTop: scaleSizeScreen(14,height,1)}}>
                        Thời gian: 15/4 - 15/5
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}