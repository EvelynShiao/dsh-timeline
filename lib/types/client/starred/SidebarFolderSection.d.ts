import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
/** 侧栏内联文件夹列表 props。 */
export interface SidebarFolderSectionProps {
    readonly wide: boolean;
    readonly enabled: boolean;
    readonly dark: boolean;
    readonly currentSessionId: string | undefined;
    readonly openSession: (sessionId: string) => void;
    readonly resolveSessionTitle: (sessionId: string) => string | null;
    readonly t: TranslateNS<typeof NS>;
}
/**
 * 工作区上方的文件夹列表（仅展开侧栏时挂载）。
 * @param props - 侧栏宽态、开关、主题与导航。
 * @returns portal 到工作区槽位前的区块；不展示时 null。
 */
export declare function SidebarFolderSection({ wide, enabled, dark, currentSessionId, openSession, resolveSessionTitle, t, }: SidebarFolderSectionProps): import("react").ReactPortal | null;
