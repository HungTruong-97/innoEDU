import React from 'react';
import {
    View, Text, ScrollView, Dimensions, TouchableOpacity
} from 'react-native';
import HeaderTitle from '../../common/HeaderTitle';
const { width, height } = Dimensions.get('window');

export default class NotificationDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[{
                key: "1",
                department: "Phòng giáo vụ",
                time: "20/03/2020",
                title: "Thông báo về việc nộp phiếu đánh giá giảng viên",
                content: "123"}]

        };
    }
    componentDidMount()
    {
        let data=[];
        if(this.props.route.params.title=="Thông báo tuyển sinh đại học 2020")
        {
            data=[{
                key: "1",
                department: "Học viện Công nghệ Bưu chính Viễn thông",
                time: "30/06/2020",
                title: "THÔNG BÁO TUYỂN SINH ĐẠI HỌC HỆ CHÍNH QUY NĂM 2020",
                content: `Căn cứ Thông tư số 09/2020/TT-BGDĐT  ngày 7 tháng 5 năm 2020 của Bộ trưởng Bộ Giáo dục và Đào tạo về việc ban hành Quy chế tuyển sinh trình độ đại học; tuyển sinh trình độ cao đẳng ngành Giáo dục Mầm non;
                Học viện Công nghệ Bưu chính Viễn thông thông báo tuyển sinh đại học hệ chính quy năm 2020 như sau:
    A. CHỈ TIÊU TUYỂN SINH:
    Tổng chỉ tiêu dự kiến là 3.080. Cụ thể truy cập:https://portal.ptit.edu.vn/
    B. THÔNG TIN TUYỂN SINH:
    1. Phương thức tuyển sinh:
    Năm 2020, Học viện Công nghệ Bưu chính Viễn thông sử dụng 03 phương thức tuyển sinh như sau:
    a) Tuyển thẳng và ưu tiên xét tuyển: Học viện xét tuyển thẳng và ưu tiên xét tuyển theo Quy chế tuyển sinh hiện hành của Bộ Giáo dục và Đào tạo (có thông báo chi tiết riêng);
    b) Xét tuyển dựa vào kết quả điểm thi tốt nghiệp THPT năm 2020;
    c) Xét tuyển kết hợp giữa kết quả học tập ở bậc THPT với một trong các loại Chứng chỉ quốc tế hoặc Thành tích cá nhân trong các kỳ thi tuyển chọn học sinh giỏi như đã nêu tại điểm c) mục 2 về Đối tượng tuyển sinh dưới đây.
    2. Đối tượng tuyển sinh:
    a) Quy định chung:
    – Thí sinh đã tốt nghiệp chương trình THPT của Việt Nam (theo hình thức giáo dục chính quy hoặc giáo dục thường xuyên) hoặc đã tốt nghiệp trình độ trung cấp (trong đó, người tốt nghiệp trình độ trung cấp nhưng chưa có bằng tốt nghiệp THPT phải học và thi đạt yêu cầu đủ khối lượng kiến thức văn hóa THPT theo quy định của Luật Giáo dục và các văn bản hướng dẫn thi hành) hoặc đã tốt nghiệp chương trình THPT của nước ngoài (đã được nước sở tại cho phép thực hiện, đạt trình độ tương đương trình độ THPT của Việt Nam) ở nước ngoài hoặc ở Việt Nam (sau đây gọi chung là tốt nghiệp THPT);
    – Có đủ sức khỏe để học tập theo quy định hiện hành;
    – Không bị vi phạm pháp luật; không trong thời gian bị truy cứu trách nhiệm hình sự
    b) Đối với phương thức xét tuyển dựa vào kết quả thi THPT năm 2020:
    Ngoài các yêu cầu theo quy định chung ở mục a) thì thí sinh phải tham dự kỳ thi tốt nghiệp THPT năm 2020 với các bài thi/môn thi theo tổ hợp bài thi/môn thi tương ứng các ngành của Học viện.
    c) Đối với phương thức xét tuyển kết hợp thì ngoài các yêu cầu theo quy định chung ở mục a) thì thí sinh cần có thêm một trong các điều kiện sau đây:
    – Thí sinh có Chứng chỉ quốc tế SAT từ 1130/1600 trở lên hoặc ACT từ 25/36 trở lên và có kết quả điểm trung bình chung học tập lớp 10, 11 và học kỳ I lớp 12 đạt từ 8,0 trở lên và có hạnh kiểm Khá trở lên;
    – Thí sinh có Chứng chỉ tiếng Anh quốc tế trong thời hạn (tính đến ngày xét tuyển) đạt IELTS 5.5 trở lên hoặc TOEFL iBT 65 trở lên hoặc TOEFL ITP 513 trở lên và có kết quả điểm trung bình chung học tập lớp 10, 11 và học kỳ I lớp 12 đạt từ 8,0 trở lên và có hạnh kiểm Khá trở lên;
    – Thí sinh đạt giải Khuyến khích trong kỳ thi chọn học sinh giỏi quốc gia hoặc đã tham gia kỳ thi chọn học sinh giỏi quốc gia hoặc đạt giải Nhất, Nhì, Ba trong kỳ thi chọn học sinh giỏi cấp Tỉnh, Thành phố trực thuộc Trung ương (TW) các môn Toán, Lý, Hóa, Tin học, Tiếng Anh trong thời gian từ năm 2018 đến nay và có kết quả điểm chung bình chung học tập lớp 10, 11 và học kỳ I lớp 12 đạt từ 8,0 trở lên và có hạnh kiểm Khá trở lên.
    `}]
        }
        else if(this.props.route.params.title=="Thông báo Đề án tuyển sinh đại học 2020")
        {
            data=[{
                key: "1",
                department: "Học viện Công nghệ Bưu chính Viễn thông",
                time: "10/06/2020",
                title: "THÔNG BÁO PHƯƠNG ÁN XÉT TUYỂN ĐẠI HỌC HỆ CHÍNH QUY NĂM 2020",
                content: `Học viện Công nghệ Bưu chính Viễn thông thông báo dự kiến Phương án xét tuyển đại học hệ chính quy năm 2020 của Học viện như sau:
    1.Xét tuyển thẳng và ưu tiên xét tuyển: Học viện xét tuyển thẳng và ưu tiên xét tuyển theo Quy chế tuyển sinh đại học của Bộ Giáo dục và Đào tạo;
    2.Xét tuyển dựa vào kết quả thi THPT năm 2020:
    Ngưỡng đảm bảo chất lượng: Học viện sẽ công bố sau khi có kết quả thi THPT;
    Xét điểm trúng tuyển theo từng ngành và không có điểm chênh lệch giữa các tổ hợp bài thi/môn thi trong cùng một ngành.
    3.Xét tuyển kết hợp:
    Năm 2020, Học viện triển khai phương thức xét tuyển kết hợp giữa kết quả học tập THPT với Chứng chỉ quốc tế hoặc Thành tích cá nhân trong kỳ thi tuyển chọn học sinh giỏi. Cụ thể:
    a. Đối tượng 1: Thí sinh có Chứng chỉ quốc tế SAT từ 1130/1600 trở lên hoặc ACT từ 25/36 trở lên và có kết quả điểm trung bình chung học tập lớp 10, 11 và học kỳ 1 lớp 12 đạt từ 8,0 trở lên.
    b. Đối tượng 2: Thí sinh có Chứng chỉ tiếng Anh quốc tế trong thời hạn (tính đến ngày xét tuyển) đạt IELTS 5.5 trở lên hoặc TOEFL iBT 65 trở lên hoặc TOEFL ITP 513 trở lên và có kết quả điểm trung bình chung học tập lớp 10, 11 và học kỳ 1 lớp 12 đạt từ 8,0 trở lên.
    c. Đối tượng 3: Thí sinh đạt giải khuyến khích trong kỳ thi chọn học sinh giỏi quốc gia hoặc đã tham gia kỳ thi chọn học sinh giỏi quốc gia hoặc đạt giải nhất, nhì, ba trong kỳ thi chọn học sinh giỏi cấp Tỉnh, Thành phố trực thuộc TW các môn Toán, Lý, Hóa, Tin học, Tiếng Anh và có kết quả điểm chung bình chung học tập lớp 10, 11 và học kỳ 1 lớp 12 đạt từ 8,0 trở lên.

Hướng dẫn và thông tin cụ thể cho các phương thức xét tuyển Học viện sẽ thông báo chi tiết sau và được công bố trong Đề án tuyển sinh của Học viện.
Trân trọng thông báo!`}]
        }
        else if(this.props.route.params.title=="1")
        {
            data=[{
                key: "1",
                department: "Phòng giáo vụ",
                time: "29/07/20",
                title: "Lưu ý sinh viên khi thực hiện đăng ký thời khóa biểu",
                content: `Phòng giáo vụ đã đặt thời gian đăng ký TKB cho mỗi Khóa/Ngành là 3 ngày, sau ngày đăng ký đầu tiên PGV sẽ rà soát tình hình thực hiện đăng ký của sinh viên và sẽ thực hiện điều chỉnh TKB một số nhóm Học phần nếu cần thiết (sau 12h trưa của ngày thứ 2 trong đợt đăng ký), để hỗ trợ sinh viên có thể tự hoàn thành đăng ký ở mức cao nhất.
    Vì vậy, sinh viên nào chưa hoàn thành việc đăng ký ngày trong ngày đầu tiên cần truy nhập hệ thống trong các ngày tiếp theo của đợt đăng ký để thực hiện.`}]
        }
        else if(this.props.route.params.title=="1")
        {
            data=[{
                key: "1",
                department: "Phòng giáo vụ",
                time: "28/07/20",
                title: "Phòng giáo vụ thông báo v/v thay đổi học phần của chuyên ngành PTUDĐPT - ngành CNĐPT- khóa 2017",
                content: `Theo đề nghị của Khoa chuyên môn, trong học kỳ 1 năm học 2020 - 2021, sinh viên chuyên ngành Phát triển ứng dụng đa phương tiện - ngành Công nghệ đa phương tiện - Khóa 2017 sẽ học học phần "Phát triển dịch vụ gia tăng trên mạng viễn thông - Mã MUL1450" thay cho học phần "Lập trình Game cơ bản - Mã MUL1446", đề nghị các sinh viên liên quan chú ý khi thực hiện đăng ký thời khóa biểu.`}]
        }
        else if(this.props.route.params.title=="1")
        {
            data=[{
                key: "1",
                department: "Phòng giáo vụ",
                time: "28/07/20",
                title: "Thông báo về việc đăng ký môn học học kỳ 1 năm học 2020- 2021",
                content: `Phòng giáo vụ thông báo:
    - Hệ thống mở cho sinh viên đăng ký môn học học kỳ 1 năm học 2020- 2021 từ 12h trưa ngày 28/07/2020 theo kế hoạch gửi kèm. Các sinh viên còn nợ học phí đề nghị hoàn thành trước ngày 25/08/2020 theo kế hoạch thu học phí lần 4 của Học viện (xem tại đây), sau ngày 25/08/2020 các sinh viên còn nợ học phí sẽ bị hủy kết quả đăng ký môn học.
    - PGV đã thông báo Thời khóa biểu học kỳ 1 năm học 2020 - 2021 (Xem tại đây), sinh viên xem và chuẩn bị thực hiện việc đăng ký online qua hệ thống qldt theo lịch đã được phổ biến. Sinh viên hệ đại trà chỉ được đăng ký học các Nhóm/Lớp có Mã lớp D, sinh viên hệ CLC chỉ được đăng ký học các Nhóm/Lớp có Mã lớp E.
    - PGV sẽ hỗ trợ sinh viên trong thời gian đăng ký và thực hiện các điều chỉnh (nếu cần) để giúp cho sinh viên hoàn thành việc tự đăng ký lịch học cá nhân, vì vậy sinh viên cần thường xuyên theo dõi trên hệ thống trong thời gian đăng ký.
    - Đối với các học phần không đăng ký được, Sinh viên có nhu cầu nhờ PGV hỗ trợ phải làm Đơn theo mẫu và nộp trong thời gian quy định; Sinh viên lưu ý:  khi xử lý hỗ trợ cho sinh viên, PGV sẽ chủ động sắp xếp lịch học của học phần sinh viên nhờ hỗ trợ cũng như thay đổi lịch học của các học phần khác trong kỳ mà sinh viên đã đăng ký (nếu cần), và sinh viên phải học theo lịch học mà PGV đã sắp xếp.`}]
        }
        else if(this.props.route.params.title=="1")
        {
            data=[{
                key: "1",
                department: "Phòng giáo vụ",
                time: "29/07/20",
                title: "Đăng ký xét tốt nghiệp đợt tháng 08/2020 cho sinh viên hệ chính quy các khóa đủ điều kiện tốt nghiệp",
                content: `– Căn cứ kế hoạch đào tạo năm học 2019-2020 của Học viện;
    Phòng Giáo vụ thông báo về việc đăng ký xét tốt nghiệp đợt tháng 8 năm 2020 cho sinh viên hệ Cao đẳng, Đại học chính quy như sau:
    1.Sinh viên các khóa trước đã trả nợ môn, đã thi đạt tốt nghiệp/học phần thay thế tốt nghiệp và đủ điều kiện tốt nghiệp tính đến thời điểm 31/07/2020 bao gồm: các lớp Đại học chính quy từ khóa 2015 trở về trước; các lớp Cao đẳng chính quy từ khóa 2015 trở về trước; các lớp liên thông CĐ-ĐH chính quy từ khóa 2017 trở về trước phải đăng ký xét tốt nghiệp (hình thức đăng ký online đối với các sinh viên học hệ tín chỉ, đăng ký trên giấy đối với hệ niên chế).
    2.Trong đợt xét đợt tháng 8 năm 2020, sinh viên các lớp Đại học chính quy khóa 2016 khối kinh tế không phải làm đơn đăng ký xét tốt nghiệp. Sinh viên đủ điều kiện tốt nghiệp theo đúng kế hoạch đào tạo sẽ được xét tốt nghiệp theo quy chế và quy định hiện hành của Bộ GDĐT và Học viện. Sinh viên các lớp trên có nhu cầu hoãn xét tốt nghiệp đợt tháng 8 năm 2020 phải làm đơn đề nghị hoãn xét tốt nghiệp.
    3.Các trường hợp đã đăng ký hoãn xét tốt nghiệp các đợt trước nếu có nhu cầu xét tốt nghiệp đợt tháng 8 năm 2020 phải đăng ký online xét tốt nghiệp.
    4.Thời gian, địa điểm nhận đăng ký:
    – Sinh viên hoãn xét tốt nghiệp (mục 2) và sinh viên hệ niên chế đăng ký xét tốt nghiệp làm đơn (theo mẫu kèm) và nộp tại Văn phòng một cửa (phòng Giáo vụ) trước 17h00 ngày 04/08/2020.
    – Sinh viên đăng ký xét tốt nghiệp (mục 1, 3) hệ tín chỉ đăng ký nguyện vọng xét tốt nghiệp online trên hệ thống http://qldt.ptit.edu.vn từ 29/07-04/08/2020 (phòng Giáo vụ sẽ có hướng dẫn trên hệ thống khi mở đăng ký).
    5.Thời gian xét tốt nghiệp đợt tiếp theo: Tháng 10/2020.
    Phòng Giáo vụ thông báo tới các sinh viên để biết và thực hiện.`}]
        }
        else if(this.props.route.params.title=="1")
        {
            data=[{
                key: "1",
                department: "Phòng giáo vụ",
                time: "26/07/20",
                title: "Đăng ký thời khóa biểu kỳ phụ 2019-2020",
                content: `Phòng Giáo vụ thông báo về việc mở các Lớp học và đăng ký Thời khóa biểu học kỳ phụ, năm học 2019-2020. Cụ thể:
    1.   Danh sách và thời khóa biểu các học phần có bố trí mở lớp, không mở lớp; danh sách các học phần được thay thế bằng học phần tương đương khác. Chi tiết sinh viên xem tại:  https://portal.ptit.edu.vn/giaovu/thong-bao-vv-dang-ky-thoi-khoa-bieu-cac-lop-hoc-phan-trong-hoc-ky-phu-nam-hoc-2019-2020/
    2.   Đối tượng, hình thức và thời gian đăng ký:
    - Đối tượng: Sinh viên đã đăng ký nguyện vọng học kỳ phụ năm học 2019-2020.
    - Hình thức: đăng ký trực tiếp trên hệ thống QLĐT: http://qldt.ptit.edu.vn.
    - Thời gian: Từ 12h00 ngày 01/07/2020 (thứ 4) đến 24h00 ngày 05/07/2020 (Chủ nhật).
    3.   Lưu ý:
    - Các sinh viên không thực hiện đăng ký nguyện vọng học hè: Không được đăng ký Thời khóa biểu nêu ở mục 2. Sau ngày 05/07/2020, căn cứ vào tình hình đăng ký, Phòng Giáo vụ sẽ có thông báo hướng dẫn, xem xét giải quyết cụ thể cho các sinh viên có nhu cầu đăng ký học sau.
    -  Các học phần có mở riêng nhóm cho hệ Chất lượng cao: sinh viên hệ CLC chỉ đăng ký nhóm có mã lớp E, sinh viên hệ đại trà chỉ đăng ký nhóm có mã lớp H.
    -  Đối với các học phần được học thay thế bằng các học phần khác: sinh viên thực hiện việc đăng ký thời khóa biểu học phần thay thế, đồng thời làm Đơn có xác nhận của Khoa chuyên môn (theo Mẫu đơn xin học môn thay thế) và nộp tại bộ phận 1 cửa - ô số 1 – Phòng giáo vụ từ ngày 01/07 đến hết ngày 10/07/2020.`}]
        }
        else
        {
            data=[{
                key: "1",
                department: "Phòng giáo vụ",
                time: "18/06/20",
                title: "ĐĂNG KÝ HỌC PHẦN THỰC TẬP TỐT NGHIỆP CÁC NGÀNH KHỐI KỸ THUẬT - KHÓA 2016",
                content: `Phòng Giáo vụ  thông báo tới Sinh viên các ngành khối Kỹ thuật Đại học khóa 2016 (Công nghệ thông tin, An toàn thông tin, Điện tử truyền thông, Kỹ thuật Điện-Điện tử, Công nghệ đa phương tiện) và sinh viên các Khóa trước của các ngành trên chưa hoàn thành TTTN, lịch đăng ký học phần Thực tập tốt nghiệp, cụ thể:
    1- Sinh viên Đại học khóa 2016:
    Sinh viên đăng nhập trên hệ thống qldt, đăng ký học học phần Thực tập tốt nghiệp từ 12h00 ngày 22/06/2020 đến 24h00 ngày 25/06/2020.
    2- Sinh viên các khóa trước còn thời hạn đào tạo (D13,D14,D15, L17, C15) chưa hoàn thành TTTN:
    Sinh viên đăng nhập trên hệ thống qldt, đăng ký học học phần Thực tập tốt nghiệp từ 12h00 ngày 22/06/2020 đến 24h00 ngày 25/06/2020, đồng thời làm Đơn xin Thực tập cùng Khóa 2016 và nộp tại Văn phòng 1 cửa - Ô số 1 - Phòng giáo vụ trước ngày 30/06/2020.
    * Sau khi thực hiện việc đăng ký học qua hệ thống, Sinh viên phải lưu ý thời gian tập trung nghe các Khoa/Viện phổ biến, hướng dẫn theo như Kế hoạch đã thông báo tại website: https://portal.ptit.edu.vn/giaovu/thong-bao-ke-hoach-to-chuc-thuc-tap-tich-luy-khoi-kien-thuc-tot-nghiep/.`}]
        }
        this.setState({data})
    }
    goBackScreen = () => {
        this.props.navigation.goBack();
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <HeaderTitle title="Chi tiết thông báo" goBackScreen={this.goBackScreen}/>
                <View style={{ width: width, minHeight: 0.912 * height }}>
                    <ScrollView>
                        <View style={{ width: 0.85 * width, marginLeft: 0.096 * width,paddingBottom:0.15*height }}>
                            <View style={{ width: 0.85 * width, height: 0.05 * height }}></View>
                            <Text style={{ fontFamily: "Roboto-Regular", fontSize: 0.033 * width,marginBottom:0.028*height }}>
                                {this.state.data[0].time}
                            </Text>
                            <Text style={{ fontFamily: 'Roboto-Regular', fontSize: 0.033 * width,marginBottom:0.037*height }}>
                                {this.state.data[0].department}
                            </Text>
                            <Text style={{ width: 0.84 * width, fontFamily: "Roboto-Bold", fontSize: 0.043 * width,textAlign:'center',marginBottom:0.054*height }}>
                                {this.state.data[0].title}
                            </Text>
                            <Text style={{width:0.84*width,letterSpacing:1,textAlign:'left',fontFamily:"Roboto-Regular",fontSize:0.037*width}}>
                            {this.state.data[0].content}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}