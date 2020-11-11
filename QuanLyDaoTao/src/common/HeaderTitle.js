import React from 'react';
import {
    View,Text,TouchableOpacity, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const {width,height}=Dimensions.get('window');

export default class HeaderTitle extends React.Component{

    goScreenBack=()=>{
        this.props.goBackScreen();
    }

    render(){
        return(
            <View style={{width:width,height:0.088*height,alignItems:'center',flexDirection:'row',borderBottomColor:'rgba(0, 0, 0, 0.1)',borderBottomWidth:this.props.title==""?0:1}}>
                <TouchableOpacity style={{marginLeft:0.056*width,alignItems:'center',justifyContent:'center',height:0.088*height,width:0.08*width}}
                    onPress={()=>this.goScreenBack()}
                    >
                    <Icon name="arrow-left" color={this.props.title==""?"white":"black"} size={this.props.title==""?0.08*width:0.05*width}/>
                </TouchableOpacity>
                <Text style={{marginLeft:0.026*width,fontFamily:"Roboto-Bold",fontSize:0.04*width}}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}