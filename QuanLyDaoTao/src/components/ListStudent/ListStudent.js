import React from 'react';
import {
    View, TouchableOpacity, Text, Dimensions, FlatList, Image,Alert
} from 'react-native';
import HeaderTitle from '../../common/HeaderTitle';
import CONST from '../../common/Const';
import {md5} from '../../common/Function'
import {getTimeServer} from '../../common/API'
//import Loading from "../../common/Loading";
import {connect} from 'react-redux'
const { width, height } = Dimensions.get('window');

export default class ListStudent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            data:[
                
            ],
            listKey :  [
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'M', 'L', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'X', 'Y', 'Z', 'W'
            ],
        };
        
    }
    async componentDidMount()
    {
        // let data =await this.fetchGetListStudent(this.props.route.params.token,this.props.route.params.mlhp);
        // this.props.dispatch({
        //     type: CONST.ACTION_LOADING_STOP,
        // });
        // if(data!=false)
        // {
        //     //console.log(data);
        //     this.handingData(data);
        // }
        // else
        //     Alert.alert("Không kết nối được server");
    }
    goBackScreen = () => {
        this.props.navigation.goBack();
    }


    fetchGetListStudent= async(token,mlhp)=>{
        this.props.dispatch({
            type: CONST.ACTION_LOADING_START,
        });
        const time = await getTimeServer();
        if (time == false) return false;

        const signature = md5(CONST.ApplicationID + "" +
            CONST.SecretKey + "" +
            time + "" + token
        );
        return new Promise((resolve,reject)=>{
            fetch(`${CONST.URL}student-services/danh-sach-sinh-vien-lop-hoc-phan?malophocphan=${mlhp}`, {
                method: 'GET',
                headers:{
                    "Content-Type":"application/json",
                    "ums-application":CONST.ApplicationID,
                    "ums-time":time,
                    "ums-token":token,
                    "ums-signature":signature,
                }
            }).then((response) => response.json()
            ).then((response) => {
                if (response.Code == 1) {
                    resolve(response.Data);
                }
                else {
                    resolve(false);
                }
            }).catch((error) => {
                console.error(error);
                resolve(false);
            });
        });
    }

    change_text=(text)=> {
        var str = text;
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        str = str.replace(/đ/g,"d");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
        str = str.replace(/ + /g," ");
        str = str.trim(); 
        return str;
    }

    handingData=(data)=>
    {

        data.sort((a,b)=>{
            // let index1=a.name.lastIndexOf(' ');
            // let index2=b.name.lastIndexOf(' ');
            if(this.change_text(a.Ten)<this.change_text(b.Ten)) 
                return -1;
            if(this.change_text(a.Ten)>this.change_text(b.Ten))
                return 1;
            return 0;
        });
        console.log(data);
        this.setState({data});
    }
    renderAvatar=(name)=>{

    }
    render(){
        return(
            <View style={{ flex: 1 ,backgroundColor: '#FFFFFF'}}>
                <HeaderTitle title="Danh sách sinh viên" goBackScreen={this.goBackScreen} />
                <View style={{justifyContent:'flex-start'}}>
                <View style={{alignItems: 'center',position:'absolute',right:10,top:0.03*height}}>
                    {
                        this.state.listKey.map( k =>  <View style={{ flex : 1}}>
                                            <Text style={{ fontSize : 0.03*width, fontFamily:'Roboto-Bold' }}>{ k }</Text>
                                        </View>)
                    }
                </View>
                    <FlatList
                        data={this.state.data}
                        renderItem={({item,index})=>
                            <View style={{flexDirection:'row',alignItems:'center',marginTop:0.06*height,marginBottom:0.024*height}}>
                                <Image
                                    style={{ width: 0.128 * width, height: 0.128 * width, borderRadius: width, resizeMode: 'cover',marginLeft:0.1*width}}
                                    source={require('../../assets/img/avatar_default.jpg')}
                                />
                                <Text style={{fontFamily:"Roboto-Bold",fontSize:0.042*width,marginLeft:0.042*width}}>
                                    {item.HoDem} {item.Ten}{'\n'}
                                    <Text style={{fontFamily:"Roboto-Bold",fontSize:0.037*width,color:'rgba(0, 0, 0, 0.5)'}}>
                                        {item.MaSinhVien}
                                    </Text>
                                </Text>
                            </View>
                        }
                    />
                </View>
                {/* <Loading /> */}
            </View>
        );
    }
}

// export default connect()(ListStudent);