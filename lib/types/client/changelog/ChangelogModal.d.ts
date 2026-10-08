import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
type T = TranslateNS<typeof NS>;
/** 命令式 API（原 window.changelogModal）。 */
export declare const changelogModal: {
    show(): void;
};
/**
 * 弹窗宿主（挂在 UiHost 下）。
 * @param props - 词典。
 * @returns 打开时渲染弹窗，否则 null。
 */
export declare function ChangelogHost({ t }: {
    readonly t: T;
}): import("react").JSX.Element | null;
/**
 * 更新 Logo 按钮（原 _createUpdateButton：icon 模式且有未读更新时显示）。
 * 原版还要求 chatTimes 有使用记录才展示；DSH 无 chatTimes 存储
 * （节点时间来自宿主快照），该门控经确认有意去除。
 * 配色走宿主 token（自带深浅两套值），故不需要主题入参。
 * @param props - 词典。
 * @returns Logo 按钮或 null。
 */
export declare function UpdateLogoButton({ t }: {
    readonly t: T;
}): import("react").JSX.Element | null;
export {};
