// loginDialog.Data 参数类型
export interface LoginDialogData {
  componentName: string,
  ModalText: string,
  visible: boolean,
  confirmLoading: boolean,
  formType: number, // 1.登录 2.注册 3.找回密码
  formTypeMap: object,
}

