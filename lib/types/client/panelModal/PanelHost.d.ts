import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
type T = TranslateNS<typeof NS>;
/** PanelHost props（词典 + 收藏 tab 导航所需）。 */
export interface PanelHostProps {
    readonly t: T;
    readonly currentSessionId: string | undefined;
    readonly openSession: (sessionId: string) => void;
}
/**
 * 设置面板宿主：订阅 panelModal 总线，打开时渲染面板。
 * @param props - 词典 + 会话导航。
 * @returns 面板或 null。
 */
export declare function PanelHost({ t, currentSessionId, openSession }: PanelHostProps): import("react").JSX.Element | null;
export {};
