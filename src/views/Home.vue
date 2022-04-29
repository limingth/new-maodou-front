<template>
  <div class="index">
    <!-- 头部 -->
    <div class="head">
      <a href="https://maodouketang.com/" class="head-left">
        <img src="https://ssl.cdn.maodouketang.com/FoRrEnaH85pNGFtxu38hwf1dHbBt" alt="" class="head-left-logo">
        <div class="head-left-title">
          毛豆课堂
          <div class="head-left-title-desc">maodouketang.com</div>
        </div>
      </a>
      <div class="head-right">
        <div class="head-right-btn">首页</div>
        <div class="head-right-land">登录</div>
      </div>
    </div>
    <!-- 主题 -->
    <div class="main banxin">
      <img src="https://ssl.cdn.maodouketang.com/FnhTvsZ0cYS_EhiK02PEctAoF_RE" alt="" class="main-pic">
      <img src="https://ssl.cdn.maodouketang.com/FoRrEnaH85pNGFtxu38hwf1dHbBt" alt="" class="main-logo">
      <div class="main-foot">
        <div class="main-foot-btn">主页</div>
        <div class="main-foot-btn">课程</div>
        <div class="main-foot-btn">老师</div>
        <div class="main-foot-btn">关于我们</div>
      </div>
    </div>
    <!-- 课程 -->
    <div class="course banxin">
      <div class="phone">
        <div class="phone-left">首页</div>
        <div class="phone-mid">课程</div>
        <div class="phone-right">老师</div>
      </div>
      <h2 class="course-head">热门课程</h2>
      <!-- 视频 -->
      <div class="pic-title">
        <div class="pic-title-size " v-for="item in list" :key="item">
          <img class="pic-title-img" :src="item.coverUrl" alt="">
          <div class="pic-title-size-head">{{item.title}}</div>
          <div class="pic-title-size-mid">{{item.summary}}</div>
          <div class="pic-title-num">{{item.totalNum||0}}人报名学习</div>
          <div class="pic-title-size-money">¥ 0</div>
        </div>
      </div>
    </div>
    <!-- 老师 -->
    <div class="teach banxin">
      <h2 class="teach-head">推荐名师</h2>
      <div class="teacher">
        <div class="teacher-left">
          <img src="https://yosemitessl.cdn.maodouio.com/team/liming1.jpg" alt="" class="teacher-pic">
          <div class="teacher-synopais">
            <div class="teacher-name">李明
              <div class="teacher-name-cnt">课程 10 学生 600</div>
            </div>
            <div class="teacher-size">清华大学计算机系硕士。2004年开始在IT教育领域创业，培养了6000余位开发工程师，学生遍布各大IT公司。2014年成立毛豆网，致力于为内容创业者提供技术服务。</div>
          </div>
        </div>
        <div class="teacher-right">
          <img src="https://yosemitessl.cdn.maodouio.com/team/zhangnaiqian.jpg" alt="" class="teacher-pic">
          <div class="teacher-synopais">
            <div class="teacher-name">张乃乾
              <div class="teacher-name-cnt">课程 10 学生 600</div>
            </div>
            <div class="teacher-size">清华大学工商管理硕士（MBA），本科毕业于中国人民大学工商管理专业，擅长市场营销和客户拓展，始终站在客户角度思考问题。在与客户建立合作的一线，洞察内容创业者当下亟待解决的痛点问题，深刻理解客户高效生产优质内容的需求。</div>
          </div>

        </div>
      </div>

    </div>
    <!-- 机构 -->
    <div class="organization banxin">
      <h2 class="organization-head">机构介绍</h2>
      <div class="organization-foot">
        <div class="organization-size">毛豆课堂是一个少儿在线教育领域的创业项目。我们坚信下一代孩子的学习会更加在线化、个性化和智能化，我们的愿景是去探索和发现孩子的天赋，并为之提供个性化的在线教育，培养孩子成为未来所需的创新型人才。 和其他产品所不同的是，毛豆课堂更为重视培养孩子在学习过程中的“自主性”、“协作性”和“创造性”。基于这个教学理念，我们为从事少儿教育的老师和机构打造可实时互动的线上教学平台，借助AI人工智能技术帮助孩子进行自主学习和效果反馈，并通过智能社交推荐引擎给家长提供最可信赖的适合孩子的课程。 一句话，毛豆课堂的使命就是让每一个孩子成为最好的自己。</div>
        <img src="https://ssl.cdn.maodouketang.com/FrXY1dB-DgIidGlYlce7ByNX6PCJ" alt="" class="organization-pic">
      </div>
    </div>
    <!-- 链接 -->
    <div class="link banxin">
      <h2>友情链接</h2>
      <div class="link-title">
        <div class="link-title-size">
          <a href="http://cnorch.maodouketang.com/" class="link-title-size-a">
            <img src="https://global.cdn.maodouio.com/courseThumbnailImg/d8b847fc.jpeg" alt="" class="link-title-size-pic">
            <div class="link-title-size-right">
              <h4 class="link-size">中国管弦网</h4>
              <div class="link-size-btn">中国最大最专业的大型管弦类服务网站</div>
            </div>
          </a>
        </div>
        <div class="link-title-size">
          <a href="http://cnorch.maodouketang.com/" class="link-title-size-a">
            <img src="https://global.cdn.maodouio.com/courseThumbnailImg/d8b847fc.jpeg" alt="" class="link-title-size-pic">
            <div class="link-title-size-right">
              <h4 class="link-size">中国管弦网</h4>
              <div class="link-size-btn">中国最大最专业的大型管弦类服务网站</div>
            </div>
          </a>
        </div>
        <div class="link-title-size">
          <a href="http://cnorch.maodouketang.com/" class="link-title-size-a">
            <img src="https://global.cdn.maodouio.com/courseThumbnailImg/d8b847fc.jpeg" alt="" class="link-title-size-pic">
            <div class="link-title-size-right">
              <h4 class="link-size">中国管弦网</h4>
              <div class="link-size-btn">中国最大最专业的大型管弦类服务网站</div>
            </div>
          </a>
        </div>
        <div class="link-title-size">
          <a href="http://cnorch.maodouketang.com/" class="link-title-size-a">
            <img src="https://global.cdn.maodouio.com/courseThumbnailImg/d8b847fc.jpeg" alt="" class="link-title-size-pic">
            <div class="link-title-size-right">
              <h4 class="link-size">中国管弦网</h4>
              <div class="link-size-btn">中国最大最专业的大型管弦类服务网站</div>
            </div>
          </a>
        </div>
        <div class="link-title-size">
          <a href="http://cnorch.maodouketang.com/" class="link-title-size-a">
            <img src="https://global.cdn.maodouio.com/courseThumbnailImg/d8b847fc.jpeg" alt="" class="link-title-size-pic">
            <div class="link-title-size-right">
              <h4 class="link-size">中国管弦网</h4>
              <div class="link-size-btn">中国最大最专业的大型管弦类服务网站</div>
            </div>
          </a>
        </div>
        <div class="link-title-size">
          <a href="http://cnorch.maodouketang.com/" class="link-title-size-a">
            <img src="https://global.cdn.maodouio.com/courseThumbnailImg/d8b847fc.jpeg" alt="" class="link-title-size-pic">
            <div class="link-title-size-right">
              <h4 class="link-size">中国管弦网</h4>
              <div class="link-size-btn">中国最大最专业的大型管弦类服务网站</div>
            </div>
          </a>
        </div>
        <div class="link-title-size">
          <a href="http://cnorch.maodouketang.com/" class="link-title-size-a">
            <img src="https://global.cdn.maodouio.com/courseThumbnailImg/d8b847fc.jpeg" alt="" class="link-title-size-pic">
            <div class="link-title-size-right">
              <h4 class="link-size">中国管弦网</h4>
              <div class="link-size-btn">中国最大最专业的大型管弦类服务网站</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="foot">
      <div class="footer">
        <div class="footer-left">
          <div class="index-footer-title">毛豆课堂</div>
        </div>
        <div class="footer-mid">
          <div class="footer-mid-all">
            <div class="index-footer-title">毛豆课堂</div>
            <div class="index-footer-item"><a style="color: #fff;" href="https://docs.qq.com/pdf/DT3N0dlZvbWZ6VmFW">产品介绍</a></div>
            <div class="index-footer-item"><a style="color: #fff;" href="https://mp.weixin.qq.com/s/0GU1IRBOTsWqnR1WXqGMpA">使用说明</a></div>
          </div>

          <div class="footer-mid-all">
            <div class="index-footer-title">软件下载</div>
            <div class="index-footer-item"><a style="color: #fff;" href="http://cdn.maodouketang.com/tools/mdkt-1.2.apk">安卓app下载</a></div>
            <div class="index-footer-item"><a style="color: #fff;" href="http://cdn.maodouketang.com/tools/mdkt-1.2.apk">谷歌浏览器下载</a></div>
          </div>

          <div class="footer-mid-all">
            <div class="index-footer-title">联系我们</div>
            <div class="footer-item">联系电话：131-6751-8813</div>
            <div class="footer-item">联系邮箱：hello@maodou.io</div>
            <div class="footer-item">公司地址：中国北京市海淀区清华科技园科技大厦C座G05</div>
          </div>
        </div>
        <div class="footer-right">
          <img src="../assets/images/qrcode.80cdecf2.png" class="footer-right-pic" />
          <div class="footer-right-button">扫码添加助手</div>
        </div>
      </div>
      <div class="foot-button">北京毛豆教育咨询有限公司 · 京ICP备16045052号-4 京公网安备 11010802024594号</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: []
    }
  },
  // mounted: {
  created: function () {
    axios({
      method: 'GET',
      url: 'https://admin.maodouketang.com:8443/seller/api/coursesget/getAllCoursesByConditionsWithTotal?page=0&size=18&clientId=41&tag=hot&isDelete=1&sort=courseIndex'
    })
      .then((res) => {
        this.list = res.data.courseList
      })
      .catch((err) => {
        console.log(err)
      })
  }
  // }
}
</script>
<style scoped>
* {
  text-decoration: none;
  font-size: 14px;
  padding: 0;
  margin: 0;
}
.banxin {
  width: 80%;
  /* width: 100%; */
  margin: 0 auto;
}
.index {
  /* width: 80%; */
  width: 100%;
  /* margin: 0 auto; */
}
h2 {
  font-size: 36px;
  margin-top: 10px;
  margin-bottom: 10px;
}
@media screen and (max-width: 768px) {
  * {
    font-size: 30px;
  }
  .banxin {
    /* width: 80%; */
    width: 90%;
    margin: 0 auto;
  }
}
.head {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;
}
.head-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-left-logo {
  height: 60px;
}
.head-left-title {
  /* margin-left: 20px; */
  font-weight: 700;
  color: #000;
  font-size: 20px;
  /* text-align: center; */
  /* justify-content: center; */
}
.head-left-title-desc {
  font-weight: normal;
  font-size: 20px;
}
.head-right {
  display: inline-block;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 236px;
}
.main {
  position: relative;
  overflow: hidden;
}
.main-pic {
  width: 100%;
  /* height: 520px; */
}
.main-logo {
  /* background-color: #fff; */
  z-index: 7;
  width: 174px;
  position: absolute;
  /* left: 30px; */
  left: 10px;
  bottom: 0px;
}

.main-foot {
  box-sizing: border-box;
  width: 100%;
  height: 55px;
  color: #fff;
  background-color: #000;
  padding-left: 200px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .main-logo {
    width: 0;
    height: 0;
    /* display: none; */
  }
  .main-foot {
    display: none;
  }
}
.pic-title {
  width: 100%;
  /* height: 800px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: row;

  /* align-content: start; */
  /* align-content: space-evenly; */
}
.phone {
  display: none;
}
.pic-title-size {
  border: 1px solid #000;
  width: 31%;
  position: relative;
  margin-right: 1%;
  margin-left: 1%;
  margin-bottom: 2%;
  /* background-color: gray; */
}
/* @media screen and (min-width: 768px) and (max-width: 1024) { */
/* 响应式布局750px */
/*   */
@media screen and (max-width: 768px) {
  .phone {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    font-weight: 700;
    font-size: 70px;
  }
  .phone-left {
    font-size: 50px;
  }
  .phone-mid {
    font-size: 50px;
  }
  .phone-right {
    font-size: 50px;
  }
  .course-head {
    font-size: 60px;
  }
  .pic-title-size {
    width: 98%;
    color: orange;
    position: relative;
    margin-right: 1%;
    margin-left: 1%;
    margin-bottom: 2%;
    /* background-color: gray; */
  }
  .pic-title-size-head {
    color: #000;
    font-size: 50px;
    margin-bottom: 8px;
  }
  .pic-title-size-mid {
    font-size: 40px;
  }
  .pic-title-img {
    width: 100%;
    object-fit: cover;
    max-height: 600px;
  }
  .pic-title-num {
    display: none;
  }
}
@media screen and (min-width: 768px) and (max-width: 1000px) {
  .pic-title-size {
    width: 47%;
    position: relative;
    margin-right: 1%;
    margin-left: 1%;
    margin-bottom: 2%;
    background-color: gray;
  }
}
.pic-title-img {
  width: 100%;
  object-fit: cover;
}
.pic-title-size-head {
  padding-top: 16px;
  padding-left: 14px;
  padding-bottom: 6px;
  font-size: 16px;
  font-weight: 600;
}
.pic-title-size-mid {
  /* height: 66px; */
  /* height: 100px; */
  font-size: 12px;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 仅仅使用于 webkit内核 */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 要显示的行数 */
  -webkit-box-orient: vertical;
  /* magin-bottom: ; */
}
.pic-title-num {
  position: absolute;
  left: 12px;
  bottom: 8px;
  color: orange;
}
.pic-title-size-money {
  position: absolute;
  right: 12px;
  bottom: 10px;
  color: orange;
  font-size: 30px;
}
.teacher {
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
}
.teacher-left {
  /* background-color: red; */
  width: 50%;
  display: flex;
  align-content: center;
  margin-right: 30px;
  box-sizing: border-box;
}
.teacher-right {
  /* background-color: blue; */
  width: 50%;
  display: flex;
  align-content: center;
  box-sizing: border-box;
  /* margin-right: 30px; */
}
.teacher-pic {
  width: 166px;
  /* height: 166px; */
  object-fit: cover;
}
.teacher-synopais {
  margin-left: 14px;
  padding-top: 8px;

  box-sizing: border-box;
  /* width: 350px; */
  /* height: 166px; */
}
.teacher-name {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 28px;
}
.teacher-name-cnt {
  height: 24px;
  /* padding: 10px; */
  margin-left: 12px;
  font-size: 14px;
  color: #9930d4;
  background: #f7e8ff;
  box-sizing: border-box;
  /* border-radius: 0.1111rem; */
}
.teacher-size {
  min-height: 74px;

  line-height: 1.5;
  color: #434343;
  overflow: hidden;
  font-size: 12px;
}
@media screen and (min-width: 768px) and (max-width: 1000px) {
  .teacher {
    display: flex;
    flex-wrap: wrap;
  }
  .teacher-left {
    width: 100%;
    display: flex;
    align-content: center;
    margin-right: 30px;
    margin-bottom: 8px;
  }
  .teacher-right {
    width: 100%;
    display: flex;
    align-content: center;
    /* margin-right: 30px; */
  }
}

@media screen and (max-width: 768px) {
  .teach-head {
    font-size: 60px;
  }
  .teacher {
    display: flex;
    flex-wrap: wrap;
  }
  .teacher-left {
    display: flex;
    width: 100%;
    /* display: block; */
    margin-bottom: 20px;
  }
  .teacher-right {
    width: 100%;
    display: flex;
    /* display: block; */
  }
  .teacher-name-cnt {
    font-size: 30px;
  }
  .teacher-pic {
    width: 100%;
    object-fit: cover;
  }
  .teacher-name {
    font-size: 54px;
  }
  .teacher-size {
    margin-top: 20px;
    font-size: 32px;
  }
}
/* 链接 */
.organization-foot {
  display: flex;
  justify-content: space-between;
}
.organization-size {
  width: 800px;
  /* 溢出省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  /* min-height: 235px; */
  margin-right: 25px;
  font-size: 14px;
  line-height: 2;
  font-weight: normal;
}
.organization-pic {
  width: 416px;
}
.link-title {
  display: flex;
  flex-wrap: wrap;
}
.link-title-size {
  width: 18%;
  display: flex;
  padding: 4px 16px;
  /* border: 1px solid #000; */
  margin-right: 10px;
  margin-top: 0px;
  box-sizing: border-box;
}
.link-title-size-a {
  display: flex;
}
.link-title-size-pic {
  /* width: 40px; */
  /* height: 40x; */
  width: 60px;
  height: 60px;
  object-fit: cover;
}
.link-title-size-right {
  font-size: 12px;
  margin-left: 5px;
  /* display: flex; */
}
.link-size {
  margin: 0 5px 6px 0;
  font-size: 12px;
}
.link-size-btn {
  font-size: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /*控制在3行*/
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
@media screen and (max-width: 768px) {
  .organization {
    display: none;
  }
  .link {
    display: none;
  }
}
.foot {
  margin-top: 50px;
  /* width: 1150px; */
  /* height: 196px; */
  background-color: grey;
  padding: 26px 20px;
}
.footer {
  display: flex;
  /* height: 134px; */
  justify-content: space-evenly;
  margin-bottom: 20px;
}
.footer-left {
  /* width: 134px; */
  white-space: nowrap;
  font-size: 14px;
}
.footer-mid {
  display: flex;
  font-size: 14px;
}
.footer-mid-all {
  margin: 0 20px;
}
.footer-right {
  margin-left: 80px;
}
.footer-right-pic {
  width: 100px;
}
.foot-button {
  text-align: center;
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  .footer {
    display: block;
    text-align: center;
    line-height: 2;
  }

  .footer-mid {
    display: block;
    font-size: 14px;
  }
  .footer-right {
    margin-left: 80px;
  }
  .footer-right-pic {
    width: 100px;
  }
  .footer-right {
    margin-left: 0px;
  }
}
</style>
