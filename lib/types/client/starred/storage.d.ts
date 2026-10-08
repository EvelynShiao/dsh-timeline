/** 收藏类型：整会话 / 会话内节点 / 闪记笔记。 */
export type StarKind = 'session' | 'node' | 'note';
/** 收藏项（原 chatTimelineStars 数组元素）。 */
export interface StarItem {
    /** 主键，由 sessionStarKey / nodeStarKey / noteStarKey 拼装。 */
    readonly key: string;
    readonly kind: StarKind;
    /** 所属会话 id；note 项为空串。 */
    readonly sessionId: string;
    /** node 项 = Chat 节点 key；note 项 = 笔记 id；session 项为空串。 */
    readonly nodeKey: string;
    /** 显示主题（node = 提问文本；session/note = 用户编辑的标题）。 */
    readonly title: string;
    readonly timestamp: number;
    readonly folderId: string | null;
    readonly pinned?: boolean;
}
/** 整会话收藏主键。 */
export declare function sessionStarKey(sessionId: string): string;
/** 节点收藏主键。 */
export declare function nodeStarKey(sessionId: string, nodeKey: string): string;
/** 闪记收藏主键。 */
export declare function noteStarKey(noteId: string): string;
/** 文件夹（原 folders 数组元素）。 */
export interface Folder {
    readonly id: string;
    readonly name: string;
    /** emoji 图标；空串 = 默认文件夹图标。 */
    readonly icon: string;
    readonly parentId: string | null;
    readonly createdAt: number;
    readonly order: number;
    readonly pinned?: boolean;
}
/** 树节点（原 getStarredByFolder 返回结构）。 */
export interface FolderNode extends Folder {
    readonly children: readonly FolderNode[];
    readonly items: readonly StarItem[];
}
/** 收藏树。 */
export interface StarredTreeData {
    readonly folders: readonly FolderNode[];
    readonly uncategorized: readonly StarItem[];
}
interface StarredState {
    readonly folders: readonly Folder[];
    readonly items: readonly StarItem[];
}
/** 收藏存储 API（等价原 window 单例组合）。 */
export declare const starredStore: {
    subscribe: (listener: () => void) => (() => void);
    getState: () => StarredState;
    getAll(): readonly StarItem[];
    findByKey(key: string): StarItem | undefined;
    exists(key: string): boolean;
    /** 添加或更新收藏（原 add：按 key upsert）。 */
    addStar(item: StarItem): void;
    removeStar(key: string): void;
    updateStar(key: string, updates: Partial<StarItem>): void;
    togglePinStarred(key: string): void;
    getFolders(): readonly Folder[];
    /**
     * 创建文件夹（最多两级；order = 同级数量）。
     * @throws 超过两级时抛错（原版行为）。
     */
    createFolder(name: string, parentId?: string | null, icon?: string): Folder;
    updateFolder(folderId: string, newName: string, newIcon?: string): void;
    /**
     * 删除文件夹（连同子文件夹）。
     * @param deleteItems - true：连同收藏项删除；false：收藏项移到未分类。
     */
    deleteFolder(folderId: string, deleteItems?: boolean): void;
    moveStarredToFolder(key: string, targetFolderId: string | null): void;
    /** 文件夹内重排收藏项（原 reorderStarredInFolder：基于数组顺序）。 */
    reorderStarredInFolder(key: string, targetFolderId: string | null, refKey: string | null, position: "before" | "after"): void;
    /** 同级排序移动文件夹（原 moveFolderToPosition）。 */
    moveFolderToPosition(folderId: string, targetFolderId: string, position: "before" | "after"): void;
    /**
     * 跨级移动文件夹（原 moveFolderToParent）。
     * @returns ok 或错误码（hasChildren/maxDepth 等）。
     */
    moveFolderToParent(folderId: string, newParentId: string | null): {
        ok: boolean;
        error?: string;
    };
    togglePinFolder(folderId: string): void;
    /** 文件夹路径（原 getFolderPath："父 / 子"）。 */
    getFolderPath(folderId: string | null): string;
    /** 同级重名检查（原 isFolderNameExists）。 */
    isFolderNameExists(name: string, parentId?: string | null, excludeId?: string | null): boolean;
    /** 按文件夹分组的收藏树（原 getStarredByFolder 逐行移植）。 */
    getStarredByFolder(): StarredTreeData;
};
interface StarredUiState {
    readonly folderStates: Readonly<Record<string, boolean>>;
    readonly collapsed: boolean;
    /** 侧栏内联列表折叠（与弹窗 collapsed 互不影响）。 */
    readonly sidebarCollapsed: boolean;
}
/** 收藏面板 UI 状态（文件夹展开态 + 面板折叠态）。 */
export declare const starredUiStore: {
    subscribe: (listener: () => void) => (() => void);
    getState: () => StarredUiState;
    setFolderState(folderId: string, expanded: boolean): void;
    setCollapsed(collapsed: boolean): void;
    setSidebarCollapsed(sidebarCollapsed: boolean): void;
};
/** 图钉项（原 chatTimelinePins 数组元素）。 */
export interface PinItem {
    /** `${sessionId}:${nodeKey}`（图钉只打在节点上，与收藏主键空间独立）。 */
    readonly key: string;
    readonly sessionId: string;
    readonly nodeKey: string;
    /** 提问摘要。 */
    readonly title: string;
    readonly timestamp: number;
}
/** 图钉存储 API（等价原 PinStorageManager）。 */
export declare const pinsStore: {
    subscribe: (listener: () => void) => (() => void);
    getAll: () => readonly PinItem[];
    exists(key: string): boolean;
    /** 切换图钉（原 togglePin）。@returns 切换后是否已标记。 */
    toggle(item: PinItem): boolean;
};
/** 待滚动目标（跨会话导航后由时间轴消费）。 */
export interface PendingNavigate {
    readonly sessionId: string;
    readonly nodeKey: string;
}
/** 跨会话导航后的待滚动目标。 */
export declare const pendingNavigateStore: {
    subscribe: (listener: () => void) => (() => void);
    get: () => PendingNavigate | null;
    set(target: PendingNavigate | null): void;
    /** 消费并清除（匹配 sessionId 时返回 nodeKey）。 */
    consume(sessionId: string): string | null;
};
export {};
