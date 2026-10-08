import type { PropsLocale, PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
/** 注入面（activate 时由 ctx 提供）。 */
export interface StarredPanelInject {
    /** 打开指定会话（ctx.sessions.open）。 */
    readonly openSession: (sessionId: string) => void;
}
/** 完整 props：侧栏脚槽位 + 注入面 + 词典。 */
export type StarredPanelProps = PropsRuntime<'sidebar.footer.action'> & StarredPanelInject & PropsLocale<typeof NS>;
/**
 * 侧栏收藏列表挂载点。
 * @param props - 槽位运行时（useSessions 取当前会话）+ openSession + 词典。
 * @returns 工作区上方的内联列表；开关关闭时 null。
 */
export declare function StarredPanel({ useSessions, openSession, t, wide }: StarredPanelProps): import("react").JSX.Element;
