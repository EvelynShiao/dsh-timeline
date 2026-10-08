import { type SessionTitleRow } from './sessionRowDom.ts';
/** 工作区星标注入 props。 */
export interface SessionStarIconsProps {
    readonly enabled: boolean;
    readonly sessionById: Readonly<Record<string, SessionTitleRow | undefined>>;
}
/**
 * 工作区会话行收藏星（无 UI，只注入宿主 DOM）。
 * @param props - 开关与会话标题表。
 * @returns null。
 */
export declare function SessionStarIcons({ enabled, sessionById }: SessionStarIconsProps): null;
