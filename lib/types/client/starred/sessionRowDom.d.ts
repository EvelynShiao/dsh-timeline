/**
 * 工作区会话行 DOM 辅助：给标题前星标、三点菜单注入共用。
 */
/** 工作区槽位。 */
export declare const WORKSPACES_SLOT = "[data-slot=\"sidebar.workspaces\"]";
/** 会话列表行摘要（只读 title / displayTitle）。 */
export interface SessionTitleRow {
    readonly displayTitle?: string;
    readonly title?: string;
}
/**
 * 取会话展示标题。
 * @param row - 会话摘要。
 * @returns 非空标题；没有则空串。
 */
export declare function titleOf(row: SessionTitleRow | undefined): string;
/**
 * 工作区会话行（排除搜索结果 button）。
 * @returns 当前可见的会话 treeitem。
 */
export declare function collectSessionRows(): HTMLElement[];
/**
 * 会话行里的标题节点（状态点 / 时间 / 菜单之外的第一段有字节点）。
 * @param row - 会话 treeitem。
 * @returns 标题元素；找不到时 null。
 */
export declare function findTitleEl(row: HTMLElement): HTMLElement | null;
/**
 * 标题 → 会话 id 列表索引。宿主行 DOM 不带 sessionId，只能按标题对齐；
 * displayTitle 的兜底链（耐久标题 → 目录名 → id）会让未命名会话同名，
 * 索引供精确匹配 + 唯一性判定共用。
 * @param sessionById - 会话标题表。
 * @returns 标题到 id 列表的映射。
 */
export declare function buildTitleIndex(sessionById: Readonly<Record<string, SessionTitleRow | undefined>>): Map<string, string[]>;
/**
 * 从会话行反查 sessionId（标题精确匹配）。
 * 标题被多个会话共用时返回 null——错认会把收藏挂到别的会话上，
 * 宁可对该行不提供注入功能。
 * @param row - 会话 treeitem。
 * @param sessionById - 会话标题表。
 * @returns id + 标题；对不上或有歧义时 null。
 */
export declare function resolveSessionFromRow(row: HTMLElement, sessionById: Readonly<Record<string, SessionTitleRow | undefined>>): {
    sessionId: string;
    title: string;
} | null;
