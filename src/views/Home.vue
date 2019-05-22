<template>
  <div class="home">
    <div class="header">
      <div class="title">设备及物资管理系统</div>
      <div class="page-right">
        <div class="user">王某某</div>
        <div class="login-out" @click="logOff">注销</div>
      </div>
    </div>
    <div class="content">
      <el-row>
        <div class="side">
          <el-col :span="4">
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
                    <i class="el-icon-setting"></i>
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
        </div>
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
  height: 50px;
  line-height: 50px;
  color: #fff;
  padding: 0 10px;
  background-color: #333;
  .page-right{
    display: flex;
    div{
      margin: 0 5px;
    }
  }
}
.content {
  .side {
    height: 100%;
    // border: 1px solid #ccc;
  }
}
</style>