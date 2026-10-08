/** 笔记（原 aitNotepadNotes 数组元素）。 */
export interface Note {
    readonly id: string;
    readonly content: string;
    readonly updatedAt: number;
}
/** 面板几何状态（原 aitNotepadState）。 */
export interface NotepadGeometry {
    readonly position: {
        readonly right: number | null;
        readonly bottom: number | null;
    };
    readonly size: {
        readonly width: number;
        readonly height: number;
    };
}
/** 笔记数上限（原 MAX_NOTES）。 */
export declare const MAX_NOTES = 50;
/** 默认/最小尺寸（原常量）。 */
export declare const DEFAULT_WIDTH = 260;
export declare const DEFAULT_HEIGHT = 370;
export declare const MIN_WIDTH = 240;
export declare const MIN_HEIGHT = 280;
/** 笔记存储 API。 */
export declare const notesStore: {
    subscribe: (listener: () => void) => (() => void);
    getAll: () => readonly Note[];
    getById(id: string): Note | undefined;
    /** 新建空笔记（超上限时淘汰最旧一条）。 */
    create(): Note;
    /** 更新笔记内容（原 _flushCurrentNote：内容变化时刷新 updatedAt）。 */
    updateContent(id: string, content: string): void;
    remove(id: string): void;
};
/** 读取面板几何（原 loadState）。 */
export declare function loadGeometry(): NotepadGeometry;
/** 持久化面板几何（原 saveState）。 */
export declare function saveGeometry(geometry: NotepadGeometry): void;
