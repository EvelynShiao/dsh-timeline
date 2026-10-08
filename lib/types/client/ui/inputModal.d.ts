/** 校验结果（原 validator 约定）。 */
export interface InputValidation {
    readonly valid: boolean;
    readonly message?: string;
}
/** show 配置（与原版对齐；文案未传时由宿主用词典默认值补齐）。 */
export interface InputModalOptions {
    readonly title: string;
    readonly defaultValue?: string;
    readonly placeholder?: string;
    readonly required?: boolean;
    readonly requiredMessage?: string;
    readonly maxLength?: number;
    readonly validator?: (value: string) => InputValidation;
    readonly confirmText?: string;
    readonly cancelText?: string;
}
/** 命令式 InputModal API（等价原 window.globalInputModal）。 */
export declare const inputModal: {
    show(options: InputModalOptions): Promise<string | null>;
    forceClose(): void;
};
/**
 * InputModal 宿主。
 * portal 到 body：收藏弹窗直挂 body 时，挂在 shell.overlay 里会被挡住。
 * @param props - 词典默认文案 + 宿主主题。
 * @returns 遮罩 + 对话框。
 */
export declare function InputModalHost({ defaults, dark }: {
    readonly defaults: {
        readonly placeholder: string;
        readonly requiredMessage: string;
        readonly confirmText: string;
        readonly cancelText: string;
    };
    readonly dark: boolean;
}): import("react").ReactPortal | null;
