import request from './request.js'
import hamc from './hamc.js'

//机构
export const clients = (params) => request.get(`/seller/api/clients`, {params});

//主页信息
export const homepageInfo = (params) => request.get(`/seller/api/homepages`, {params});

//教师
export const teachers = (params) => request.get(`/seller/api/teachers`, {params});

//获取腾讯接口的课堂列表
export const getClasses =function (postData){
  request.defaults.headers['auth']=hamc("/v1/open/class/getClasses").auth
  request.defaults.headers['X-Date']=hamc("/v1/open/class/getClasses").date
  return request.post(`/boss/tencent/tcic/v1/open/class/getClasses`,postData)
}
//获取腾讯接口的课堂信息
export const getClassInfo =function (postData){
  request.defaults.headers['auth']=hamc("/v1/open/class/getInfo").auth
  request.defaults.headers['X-Date']=hamc("/v1/open/class/getInfo").date
  return request.post(`/boss/tencent/tcic/v1/open/class/getInfo`,postData)
}
//获取腾讯临时提供接口录播课原始版本
export const class_record_url_list = (class_id) => request.get(`/boss/tencent/tcic/release/getRecordReplayUrl?classId=`+class_id);
//课程
export const courses = (params) => request.get(`/seller/api/courses`, {params});

//学生
export const students = (params) => request.get(`/seller/api/students`, {params});

//报名
export const studentEnroll = (postData) => request.post(`/seller/api/students`, postData);

//根据条件分页获取教师列表-含总数
export const teacherPageList = (params) => request.get(`/seller/api/teachers/getAllTeachersByConditionsWithTotal`, {params});

//根据条件分页获取课程列表-含总数
export const coursePageList = (params) => request.get(`/seller/api/coursesget/getAllCoursesByConditionsWithTotal`, {params});

//按clientId查询总消费时长和天数
export const getTotalSummaryCount = (params) => request.get(`/analysis/api/day-summaries/getTotalSummaryCount`, {params: params});

//漏时补偿
export const getAdditionFixesWithTotalNumByConditions = (params) => request.get(`/analysis/api/addition-fixes/getAdditionFixesWithTotalNumByConditions`,{params: params});

//套餐包
export const getOrderAgenciesByConditions = (params) => request.get(`/order/api/order-agencies/getOrderAgenciesByConditions`, {params: params});
//根据phone查询课程
export const getAllCourseByStudentWithTotal = (params) => request.get(`/seller/api/students/getAllCourseByStudentWithTotal`,{params: params});

//学生getAllStudentsByConditionsWithTotal
export const getAllStudentsByConditionsWithTotal = (params) => request.get(`/seller/api/students/getAllStudentsByConditionsWithTotal`,{params: params});
//发送验证码
export const sendCaptcha = (params) => request.get(`/base/api/common/sms/sendCaptcha`,{params:params});

//验证验证码
export const verifyCaptcha = (params) => request.get(`/base/api/common/sms/verifyCaptcha`,{params:params});

//互联
export const  getRecomentsByClientId= (clientId) => request.get(`/seller/api/clients/getRecomentsByClientId?clientId=`+clientId);

//新的计费方式
export const  getTotalSummaryMultiflowCount= (clientId) => request.get(`/analysis/api/day-summaries/getTotalSummaryMultiflowCount?clientId=`+clientId);
//新的计费方式
export const  getSignInfoByConditions= (roomId,userId) => request.get(`/analysis/api/signins/getSignInfoByConditions?roomId=`+roomId+'&userId='+userId);

//课程-课堂getAllCoursesClass
export const getAllCoursesClass = (params) => request.get(`/seller/api/course-classes`, {params: params});

//map腾讯课堂列表
export const getAllRtcCoursesClass = (roomId) => request.get(`/seller/api/tencent-class-maps?roomId.equals=`+roomId);
