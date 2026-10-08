import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
type T = TranslateNS<typeof NS>;
/** 收藏树 props。 */
export interface StarredTreeProps {
    readonly currentSessionId: string | undefined;
    readonly openSession: (sessionId: string) => void;
    /** 导航后回调（面板关闭）。 */
    readonly onAfterNavigate: () => void;
    /** 搜索词（小写；设置面板收藏 tab 场景，原 getSearchQuery）。 */
    readonly searchQuery?: string;
    /** 搜索空态容器类（设置面板 tab 场景，原 emptyClass: 'timeline-starred-empty' 注入）。 */
    readonly searchEmptyClassName?: string;
    /** 树内操作 toast 配色覆盖（原 tab 场景注入的 toastOptions.color）。 */
    readonly toastColors?: typeof FOLDER_TOAST_OPTIONS['color'];
    /** 展开态使用面板独立作用域（原 tab 的 persistent folderStates，与侧栏互不影响）。 */
    readonly localExpansion?: boolean;
    /** 解析宿主会话标题；返回 null 表示不是会话（工作区行等）。 */
    readonly resolveSessionTitle?: (sessionId: string) => string | null;
    readonly t: T;
}
/** 定位收藏项 toast 的配色（原 _toastAtFolder）。 */
declare const FOLDER_TOAST_OPTIONS: {
    position: "right";
    gap: number;
    color: {
        light: {
            backgroundColor: string;
            textColor: string;
            borderColor: string;
        };
        dark: {
            backgroundColor: string;
            textColor: string;
            borderColor: string;
        };
    };
};
/** 收藏树组件。 */
export declare function StarredTree({ currentSessionId, openSession, onAfterNavigate, searchQuery, searchEmptyClassName, toastColors, localExpansion, resolveSessionTitle, t, }: StarredTreeProps): import("react").JSX.Element;
export {};
