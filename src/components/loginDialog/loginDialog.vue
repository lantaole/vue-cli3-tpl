<template>
  <a-modal
            wrapClassName="loginDialog-wrap"
            :visible="data.visible"
            :confirmLoading="data.confirmLoading"
            :width="660"
            :maskClosable="false"
            :footer="null"
            :closable="false"
    >
      <div>
        <img :src="`${publicPath}img/login_dialog/login_ad.png`" alt="">
      </div>
      <div>

      </div>
    </a-modal>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import {commonMixin } from '@/mixins'
  import { LoginDialogData } from '@/types/components/loginDialog.interface'
  // import {  } from "@/components" // 组件

  @Component({
      name: 'loginDialog'
  })
  export default class loginDialog extends commonMixin {
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string;

    // data
    data: LoginDialogData = {
      componentName: 'loginDialog',
      ModalText: 'Content of the modal',
      visible: true,
      confirmLoading: false,
      formType: 1,
      formTypeMap: {
        login: 1,
        register: 2,
        resetPassword: 3,
      }
    }

    created() {
      //
    }
    
    activated() {
      //
    }

    mounted() {
      //
    }

  }
</script>

<style lang="scss">
  @import "@/assets/scss/variables.scss";
  .loginDialog-wrap {
    width: 100%;
    .ant-modal-content{
      border-radius: 10px;
      .ant-modal-body{
        padding: 0;
      }
    }
  }
</style>

