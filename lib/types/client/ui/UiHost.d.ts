import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
/** UiHost props（root 槽位运行时 + 词典 + 设置面板收藏 tab 的会话导航）。 */
export type UiHostProps = PropsRuntime<'shell.overlay'> & PropsLocale<typeof NS> & {
    /** 打开指定会话（ctx.sessions.open）。 */
    readonly openSession: (sessionId: string) => void;
};
/**
 * 通用 UI 宿主组件。
 * @param props - 词典 + 会话导航。
 * @returns 各命令式 UI 的渲染宿主。
 */
export declare function UiHost({ t, useSessions, openSession }: UiHostProps): import("react").JSX.Element;
