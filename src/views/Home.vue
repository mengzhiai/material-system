<template>
  <div class="home">
    <div class="header">
      <div class="title"><img src="../assets/img/logo.png">设备及物资管理系统</div>
      <div class="page-right">
        <div class="pic"></div>
        <div class="user">王某某</div>
        <div class="login-out" @click="logOff"><img src="../assets/img/close.png" alt=""></div>
      </div>
    </div>
    <div class="content">
      <el-row>
        <el-col :span="4" class="side">
            <el-row>
              <el-col :span="24">
                <el-menu
                  default-active="1"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  router
                >
                  <el-menu-item index="deviceInformation">
                    <i class="el-icon-menu"></i>
                    <span slot="title">设备信息台账管理</span>
                  </el-menu-item>
                  <el-menu-item index="equipmentManage">
                    <i class="el-icon-document"></i>
                    <span slot="title">设备条件管理</span>
                  </el-menu-item>
                  <el-menu-item index="materialManagement">
                    <i class="el-icon-s-order"></i>
                    <span slot="title">物资管理</span>
                  </el-menu-item>
                  <el-menu-item index="suppliesManagement">
                    <i class="el-icon-setting"></i>
                    <span slot="title">个人劳保用品管理</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
        </el-col>
        <el-col :span="20">
          <router-view class="main"></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //注销
    logOff(){
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  color: #fff;
  padding: 0 10px;
  background-color: #333;
  .title{
    img{
      margin: 5px 0;
    }
  }
  .page-right{
    display: flex;
    .pic{
      width: 30px;
      height: 30px;
      margin: 15px 0;
      border-radius: 50%;
      background-color: #ccc;
    }
    div{
      margin: 0 10px;
      cursor: pointer;
    }
    .login-out{
      img{
        width: 30px;
        height: 30px;
        margin: 15px 0;
      }
    }
  }
}
.content {
  .side {
    height: 100%;
    min-height: 800px;
    border-right: 1px solid #ccc;
    // border: 1px solid #ccc;
  }
}
</style>