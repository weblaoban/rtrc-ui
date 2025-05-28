/**
 *  qrUrl        二维码内容
 *  qrSize       二维码大小
 *  qrText       二维码底部显示文字
 *  qrTextSize   二维码底部显示文字大小(默认16px)
 */
declare function handleQrcode(): Promise<unknown>;
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    qrUrl: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    qrText: {
        type: StringConstructor;
        default: string;
    };
    qrTextSize: {
        type: NumberConstructor;
        default: number;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    upload: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    handleQrcode: typeof handleQrcode;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    qrUrl: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    qrText: {
        type: StringConstructor;
        default: string;
    };
    qrTextSize: {
        type: NumberConstructor;
        default: number;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    upload: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    lazy: boolean;
    qrUrl: string;
    width: number;
    height: number;
    qrText: string;
    qrTextSize: number;
    upload: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
