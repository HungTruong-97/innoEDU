import React from 'react';
import {
    View , Text ,StyleSheet, Dimensions,TouchableOpacity
} from 'react-native';
import TopBarSearch from '../../common/TopBarSearch';
import ForWeek from './ForWeek';
import ForSeason from './ForSeason';
import {connect} from 'react-redux';
import CONST from "../../common/Const"
const {width,height}=Dimensions.get('window');
export default class Schedule extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            btChoosed:"theotuan"
        }
    }
    
    goToScreenListStudent=(token,mlhp)=>
    {
        console.log(token+"----"+mlhp);
        this.props.navigation.navigate('Screen_ListStudent',{token:token,mlhp:mlhp});
    }
    goToScreenSurvey=()=>
    {   
        this.props.navigation.navigate('Screen_Survey');
    }
    goToScreenNotificationMessage = () => {
        this.props.navigation.navigate('Screen_NotificationMessage');
    }
    goToScreenMessage=()=>
    {   
        this.props.navigation.navigate('Screen_Message');
    }
    renderStylebt = (name) => {
        if (this.state.btChoosed == name)
            return { width: 0.43 * width, height: 0.08 * height, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#3076F1', borderBottomWidth: 2 };
        else
            return { width: 0.43 * width, height: 0.08 * height, justifyContent: 'center', alignItems: 'center' };
    }
    renderStyletxt = (name) => {
        if (this.state.btChoosed == name)
            return { fontFamily: 'Roboto-Bold', fontSize: 0.05 * width };
        else
            return { fontFamily: 'Roboto-Regular', fontSize: 0.05 * width };
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#f0f1f6'}}>
                <TopBarSearch color='#000000' screen="schedule" marginTop={0.02*height} goToMessage={this.goToScreenMessage} goToNotificationMessage={this.goToScreenNotificationMessage} />
                <View style={{ width: width, height: 0.08 * height, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <TouchableOpacity style={this.renderStylebt("theotuan")}
                        onPress={() => this.setState({ btChoosed: "theotuan", data: this.state.data1 })}
                        activeOpacity={1}
                    >
                        <Text style={this.renderStyletxt("theotuan")}>
                            Theo tháng
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.renderStylebt("caky")}
                        onPress={() => this.setState({ btChoosed: "caky", data: this.state.data2 })}
                        activeOpacity={1}
                    >
                        <Text style={this.renderStyletxt("caky")}>
                            Cả kỳ
                        </Text>
                    </TouchableOpacity>
                </View>
                {this.state.btChoosed=="theotuan"?<ForWeek/>
                    :<ForSeason goToListStudent={this.goToScreenListStudent} 
                                goToSurvey={this.goToScreenSurvey}
                    />}
            </View>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        // if(this.props.changeScreenState==CONST.STATE_CHANGE_SCREEN_TRYING)
        //     {
        //         this.setState({btChoosed:"theotuan"});
        //     }
    }
}

// function mapStateToProps(state)
// {
//     return {
//         changeScreenState:state.reducerChangeScreen.changeScreenState
//     };
// }
// export default connect(mapStateToProps)(Schedule);