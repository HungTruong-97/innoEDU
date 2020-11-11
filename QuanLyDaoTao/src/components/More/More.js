import React,{Component} from 'react';
import {
    SafeAreaView,View,Text,Dimensions
} from 'react-native';

const {width,height}=Dimensions.get("window");

export default class More extends Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <SafeAreaView>
                <Text>More</Text>
            </SafeAreaView>
        );
    }
}