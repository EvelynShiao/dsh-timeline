import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
type T = TranslateNS<typeof NS>;
/** 命令式闪记 API（等价原 window.notepadManager）。 */
export declare const notepad: {
    isOpen: () => boolean;
    open(): void;
    close(): void;
    /** 开→关（已聚焦时）/ 聚焦（半透明时），关→开（原 toggle）。 */
    toggle(): void;
    /** 打开指定笔记（收藏树导航入口）。 */
    openNote(noteId: string): void;
};
/** 面板 props。 */
export interface NotepadHostProps {
    readonly dark: boolean;
    readonly t: T;
}
/** 闪记面板宿主（挂在 UiHost 内）。 */
export declare function NotepadHost({ dark, t }: NotepadHostProps): import("react").JSX.Element;
/** 时间轴上的闪记入口按钮（原 .ait-notepad-btn）。 */
export declare function NotepadButton({ t }: {
    readonly t: T;
}): import("react").JSX.Element;
export {};
