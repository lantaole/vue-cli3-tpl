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
        <img :src=`${publicPath}src/assets/images/login_dialog/login_ad.png` alt="">
      </div>
    </a-modal>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import { LoginDialogData } from '@/types/components/loginDialog.interface'
  // import {  } from "@/components" // 组件

  @Component({})
  export default class About extends Vue {
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string

    // data
    data: LoginDialogData = {
      componentName: 'loginDialog',
      ModalText: 'Content of the modal',
      visible: true,
      confirmLoading: false,
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

  }
</style>

