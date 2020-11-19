import React, { Component } from 'react';
import {
    SafeAreaView, View, Text, Dimensions, StyleSheet, processColor
} from 'react-native';
import HeaderTitle from '../../common/HeaderTitle';
import { scaleSizeScreen } from '../../common/scaleSizeScreen';
import { LineChart, RadarChart } from 'react-native-charts-wrapper';
const { width, height } = Dimensions.get("window");

export default class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                    dataSets: [{
                        values: [{ value: 100 }, { value: 110 }, { value: 105 }, { value: 115 }, { value: 110 }],
                        label: 'DS 1',
                        config: {
                            color: processColor('#FF8C9D'),

                            drawFilled: true,
                            fillColor: processColor('#FF8C9D'),
                            fillAlpha: 100,
                            lineWidth: 2
                        }
                    }, {
                        values: [{ value: 115 }, { value: 100 }, { value: 105 }, { value: 110 }, { value: 120 }],
                        label: 'DS 2',
                        config: {
                            color: processColor('#C0FF8C'),

                            drawFilled: true,
                            fillColor: processColor('#C0FF8C'),
                            fillAlpha: 150,
                            lineWidth: 1.5
                        }
                    }, {
                        values: [{ value: 105 }, { value: 115 }, { value: 121 }, { value: 110 }, { value: 105 }],
                        label: 'DS 3',
                        config: {
                            color: processColor('#8CEAFF'),

                            drawFilled: true,
                            fillColor: processColor('#8CEAFF')
                            
                        },
                        
                    },
                    {
                        values: [{ value: 80 }, { value: 90 }, { value: 100 }, { value: 122 }, { value: 115 }],
                        label: 'DS 4',
                        config: {
                            color: processColor('#D4EE9B'),

                            drawFilled: true,
                            fillColor: processColor('#D4EE9B')
                            
                        },
                        
                    }],
            },
            legend: {
                enabled: true,
                textSize: 14,
                form: 'CIRCLE',
                wordWrapEnabled: true
            },
            xAxis: {
                    valueFormatter: ['A', 'B', 'C', 'D', 'E']
            },
            yAxis: {
                valueFormatter: ['80', '90', '100', '110', '120','130']
        }
        };
    }
    goBackScreen = () => {
        this.props.navigation.goBack();
    }
    

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                {/* <View style={{ flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center' }}>
                    <HeaderTitle title="Danh sách sinh viên" goBackScreen={this.goBackScreen} />
                    <Text style={{
                        width: scaleSizeScreen(259, width), fontFamily: "Roboto-Bold", fontSize: 0.04 * width, textAlign: 'center',
                        marginTop: scaleSizeScreen(38, height, 1)
                    }}>
                        Kết quả khảo sát đánh giá giảng dạy Học kỳ 2, 2018 - 2019
                    </Text>
                    <Text style={{
                        fontFamily: 'Roboto-Regular', fontSize: 0.037 * width,
                        color: 'rgba(0, 0, 0, 0.5)', textAlign: 'center', marginTop: scaleSizeScreen(14, height, 1)
                    }}>
                        Thời gian: 15/4 - 15/5
                    </Text>
                    <LineChart style={{ width: width, height: width }}
                        data={{ dataSets: [{ label: "demo", values: [{ y: 1 }, { y: 2 }, { y: 1 }] }] }}
                    />
                </View> */}
                <View style={{ flex: 1 }}>

                    <View style={{ height: 80 }}>
                        <Text> selected entry</Text>
                        <Text> {this.state.selectedEntry}</Text>
                    </View>

                    <View style={styles.container}>
                        <RadarChart
                            style={styles.chart}
                            data={this.state.data}
                            xAxis={this.state.xAxis}
                            yAxis={{drawLabels:true}}
                            chartDescription={{ text: '' }}
                            legend={this.state.legend}
                            drawWeb={true}

                            webLineWidth={2}
                            webLineWidthInner={2}
                            webAlpha={255}
                            webColor={processColor("gray")}
                            webColorInner={processColor("gray")}

                            skipWebLineCount={1}
                        />
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    chart: {
        flex: 1
    }
});
