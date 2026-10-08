import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
/** 收藏弹窗结果。 */
export interface StarModalResult {
    readonly value: string;
    readonly folderId: string;
}
/** 收藏弹窗 props。 */
export interface StarModalProps {
    /** 弹窗标题（收藏="收藏"，树编辑="编辑"）。 */
    readonly title?: string;
    /** 默认标题（原版 defaultValue = 问题摘要）。 */
    readonly defaultValue: string;
    /** 默认选中的文件夹（编辑场景传入原值）。 */
    readonly defaultFolderId?: string | null;
    readonly onConfirm: (result: StarModalResult) => void;
    readonly onCancel: () => void;
    readonly t: TranslateNS<typeof NS>;
}
/**
 * 收藏弹窗。
 * @param props - 默认标题、默认文件夹与确认/取消回调。
 * @returns fixed 全屏遮罩 + 居中对话框。
 */
export declare function StarModal({ title, defaultValue, defaultFolderId, onConfirm, onCancel, t }: StarModalProps): import("react").JSX.Element;
/** 命令式收藏编辑 API。 */
export declare const starEditModal: {
    show(options: {
        readonly title: string;
        readonly defaultValue: string;
        readonly defaultFolderId: string | null;
    }): Promise<StarModalResult | null>;
    forceClose(): void;
};
/** 收藏编辑弹窗宿主（挂 UiHost；样式随 timeline 根主题容器）。 */
export declare function StarEditModalHost({ t, dark }: {
    readonly t: TranslateNS<typeof NS>;
    readonly dark: boolean;
}): import("react").JSX.Element | null;
