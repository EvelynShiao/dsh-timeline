/** 提示词（原 prompts 数组元素；DSH 单平台，platformId 字段不再需要）。 */
export interface Prompt {
    readonly id: string;
    readonly name: string;
    readonly content: string;
    readonly pinned?: boolean;
}
/** 提示词存储 API（原 panelModal prompt tab 的 CRUD 面）。 */
export declare const promptsStore: {
    subscribe: (listener: () => void) => (() => void);
    getAll: () => readonly Prompt[];
    add(name: string, content: string): Prompt;
    update(id: string, updates: Partial<Omit<Prompt, "id">>): void;
    remove(id: string): void;
    togglePin(id: string): void;
    /** 上移/下移（原 movePrompt：与相邻项交换，边界不动）。 */
    move(id: string, direction: "up" | "down"): void;
};
/** 置顶优先排序（原 prompt-dropdown-ui 的 sort）。 */
export declare function sortPrompts(list: readonly Prompt[]): readonly Prompt[];
