import React from 'react';
import {
    View,Text, Dimensions,TouchableOpacity,TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const {width,height}=Dimensions.get('window');

export default class TopBarSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            txtSearch:"",
        };
        console.log(width+"  "+height);
    }
    renderBorder=()=>{
        if(this.props.screen=="home")
            return {width:width,alignItems:'center',marginTop:this.props.marginTop};
        else
            return {width:width,alignItems:'center',marginTop:this.props.marginTop,borderBottomColor:'rgba(0, 0, 0, 0.2)',borderBottomWidth:2};
    }

    goToMessage=()=>{
        
        this.props.goToMessage();
    }

    goToNotificationMessage=()=>{
        this.props.goToNotificationMessage();
    }

    render(){
        return(
            <View style={this.renderBorder()}>
                <View style={{width:0.9*width,flexDirection:'row',alignItems:'center'}}>
                    <TouchableOpacity>
                        <Icon name="search" color={this.props.color} size={30}/>
                    </TouchableOpacity>
                    <TextInput
                        style={{color:this.props.color,width:0.6*width,fontSize:0.04*width,marginLeft:0.015*width}}
                        returnKeyType="done"
                        onChangeText={txtSearch=>this.setState({txtSearch})}
                        placeholder="Tìm kiếm..."
                        defaultValue={this.state.txtSearch}
                        placeholderTextColor={this.props.color}
                        scrollEnabled={false}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        onPress={()=>this.goToNotificationMessage()}
                    >
                        <Icon style={{marginLeft:0.015*width}} name="bell" color={this.props.color} size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>this.goToMessage()}
                    >
                        <Icon style={{marginLeft:0.04*width}} name="message-circle" color={this.props.color} size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}