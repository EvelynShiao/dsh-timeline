/** show 配置（与原版对齐；按钮文案未传时由宿主用词典默认值补齐）。 */
export interface PopconfirmOptions {
    readonly title?: string;
    readonly content?: string;
    readonly confirmText?: string;
    readonly cancelText?: string;
    readonly confirmTextType?: 'danger' | 'primary' | 'success' | 'default';
    readonly showCancel?: boolean;
}
/** 命令式 Popconfirm API（等价原 window.globalPopconfirmManager）。 */
export declare const popconfirm: {
    show(options: PopconfirmOptions): Promise<boolean>;
    hide(result?: boolean): void;
};
/**
 * Popconfirm 宿主。
 * @param props - 词典默认按钮文案。
 * @returns 遮罩 + 弹窗。
 */
export declare function PopconfirmHost({ defaultConfirmText, defaultCancelText }: {
    readonly defaultConfirmText: string;
    readonly defaultCancelText: string;
}): import("react").JSX.Element | null;
