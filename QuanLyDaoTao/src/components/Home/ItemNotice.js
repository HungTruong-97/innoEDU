import React from 'react';
import {
    View,Image,Text, Dimensions,TouchableOpacity
} from 'react-native';
import {scaleSizeScreen} from '../../common/scaleSizeScreen';
const {width,height}=Dimensions.get('window');

export default class ItemNotice extends React.Component{

    goToDetailScreen=()=>
    {
        this.props.detailScreen(this.props.txt);
    }

    render()
    {
        return(
            <TouchableOpacity style={{width:0.43*width}}
                onPress={()=>this.goToDetailScreen()}
            >
                <Image
                    style={{width:scaleSizeScreen(164,width),height:scaleSizeScreen(84,height,1),resizeMode:'stretch',
                            borderRadius:8}}
                    source={require("../../assets/img/ptit.jpg")}
                />
                <Text style={{fontFamily:'Roboto-Regular',fontSize:0.04*width}}>
                    {this.props.txt}
                </Text>
            </TouchableOpacity>
        );
    }
}