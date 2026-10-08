/**
 * 数据导入导出（移植原 panelModal/tabs/dataSync 的本地文件部分，
 * Google Drive 云同步按需求不迁移）。
 * - 导出：把插件全部 localStorage 数据打包为 { _meta, data } JSON 文件下载；
 * - 导入：从 JSON 文件恢复，支持合并/覆盖两种模式（合并规则逐条对齐原
 *   mergeByKey：收藏按 key、图钉按 key、提示词按 id、文件夹按 id、设置对象
 *   按 key 合并、其他新值覆盖）。
 * 存储层适配：原 chrome.storage.local 改为 localStorage；覆盖模式只清插件
 * 自有前缀的 key（localStorage 与宿主共享，不能整库 clear）。
 */
/** 备份文件元数据（原 _buildMeta）。 */
interface BackupMeta {
    readonly source: string;
    readonly appVersion: string;
    readonly exportTime: string;
    readonly exportTimestamp: number;
}
/** 备份文件结构。 */
interface BackupFile {
    readonly _meta?: BackupMeta;
    readonly data: Record<string, unknown>;
}
/** 获取所有插件存储数据（原 getAllStorageData：过滤非本插件 key）。 */
export declare function getAllStorageData(): Record<string, unknown>;
/**
 * 校验是否是合法的本插件备份（原 _isValidBackup）。
 * - data 必须是对象；
 * - 若带 _meta，则 source 必须为本插件指纹（缺 _meta 时放行，兼容早期备份）。
 */
export declare function isValidBackup(importData: unknown): importData is BackupFile;
/** 导出数据为 JSON 文件下载（原 handleExport 的数据与下载部分）。 */
export declare function exportDataToFile(): void;
/** 覆盖模式：清空插件数据并写入新数据（原 overwriteData，clear 圈定插件前缀）。 */
export declare function overwriteData(newData: Record<string, unknown>): void;
/** 合并模式：智能合并数据（原 mergeData）。 */
export declare function mergeData(newData: Record<string, unknown>): void;
export {};
