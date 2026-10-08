import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
import { type SessionTitleRow } from './sessionRowDom.ts';
/** 三点菜单注入 props。 */
export interface SessionStarMenuProps {
    readonly enabled: boolean;
    readonly sessionById: Readonly<Record<string, SessionTitleRow | undefined>>;
    readonly t: TranslateNS<typeof NS>;
}
/**
 * 工作区会话三点菜单的收藏项（无 UI）。
 * @param props - 开关、会话表、词典。
 * @returns null。
 */
export declare function SessionStarMenu({ enabled, sessionById, t }: SessionStarMenuProps): null;
