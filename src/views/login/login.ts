import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { LoginData } from '@/types/views/login.interface'
import CommonMixin from "@/mixins/module/commonMixin"; // 组件

@Component({
    components: {
    }
})
export default class Login extends CommonMixin {
    // Getter
    // @Getter author

    // Action
    // @Action GET_DATA_ASYN

    // data
    data: LoginData = {
        pageName: 'login',
        loginWrapperHeight: `${window.innerHeight}px`,
        current: ['mail'],
        formLayout: 'vertical',
        form:  this.$form.createForm(this),
    }
    public  handleSubmit(e): void {
        e.preventDefault();
        this.data.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    public  loginFunc(e): void {

    }

    created() {
        //
       // this.GET_DATA_ASYN()
    }

    activated() {
        //
    }

    mounted() {
        //
    }

    // 初始化函数
    init() {
        //
    }

}
