import GenQrcode from "./components/GenQrcode/index.js";
import SelectDate from "./components/SelectDate/index.js";
const components=[SelectDate]
const install:any = (Vue:any) =>{
    if(install.installed){
        return
    }
    install.installed = true;
    // 遍历注册组件
    components.map(component=>{
        console.log(component.name)
        return Vue.component(component.name, component)
    });
}

//@ts-ignore
if(typeof window !== 'undefined' && window?.Vue){
    //@ts-ignore
    install(window.Vue);
}

export default {
    install,
    ...components
}

export {
    GenQrcode
}
