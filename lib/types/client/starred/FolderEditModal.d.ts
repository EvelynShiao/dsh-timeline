/** 弹窗配置（等价原 show(options)）。 */
export interface FolderEditOptions {
    readonly title: string;
    readonly confirmText: string;
    readonly cancelText: string;
    readonly placeholder: string;
    readonly defaultName?: string;
    readonly defaultIcon?: string;
    readonly maxLength?: number;
    /** 返回错误文案则阻止提交（原 validate + toast.error）。 */
    readonly validate?: (name: string) => string | null;
    /** 名称为空时的提示。 */
    readonly emptyMessage: string;
}
export interface FolderEditResult {
    readonly name: string;
    readonly icon: string;
}
/** 文件夹编辑弹窗命令式 API。 */
export declare const folderEditModal: {
    show(options: FolderEditOptions): Promise<FolderEditResult | null>;
    forceClose(): void;
};
/**
 * 文件夹编辑弹窗宿主。
 * portal 到 body：收藏弹窗（时间轴）也直挂 body，挂在 shell.overlay
 * 里会被挡住。
 * @param props - dark 为宿主主题（portal 后需自带 data-theme）。
 * @returns 遮罩 + 对话框。
 */
export declare function FolderEditModalHost({ dark }: {
    readonly dark: boolean;
}): import("react").ReactPortal | null;
