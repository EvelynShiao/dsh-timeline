/** 双语条目（原 features/improvements 项）。 */
export interface ChangelogItem {
    readonly zh: string;
    readonly en: string;
}
/** 更新内容（原 CHANGELOG_DATA）。 */
export declare const CHANGELOG_DATA: {
    id: string;
    /** 'icon' = 提示词按钮旁 Logo + 小红点（温和提示）；'popup' = 自动弹窗（强提醒）。 */
    displayMode: "icon" | "popup";
    features: readonly ChangelogItem[];
    improvements: readonly ChangelogItem[];
};
/** 已读状态 store（供 Logo 按钮显隐订阅）。 */
export declare const changelogReadStore: {
    subscribe: (listener: () => void) => (() => void);
    /** 是否有未读更新（原 hasUpdate）。 */
    hasUpdate(): boolean;
    /** 标记当前版本已读（原 _markAsRead）。 */
    markAsRead(): void;
};
