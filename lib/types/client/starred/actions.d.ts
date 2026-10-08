/**
 * 收藏体系共享操作流：移植原扩展 starred-tree-renderer 的 CRUD handler 与
 * star-input-modal 的文件夹选择菜单构建（新建/编辑/删除文件夹、复制、
 * 文件夹下拉树）。树组件与收藏弹窗共用。
 */
import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
import type { DropdownItem } from '../ui/dropdown.tsx';
import { type Folder, type FolderNode } from './storage.ts';
type T = TranslateNS<typeof NS>;
/**
 * 新建文件夹流程（原 handleCreateFolder：弹窗 → 重名校验 → 创建 → toast）。
 * @param maxLength - 名称长度上限（收藏树入口 15；收藏弹窗入口原版为 10）。
 * @returns 新文件夹或 null（取消/失败）。
 */
export declare function createFolderFlow(parentId: string | null, t: T, maxLength?: number): Promise<Folder | null>;
/** 编辑文件夹流程（原 handleEditFolder）。 */
export declare function editFolderFlow(folderId: string, currentName: string, t: T): Promise<void>;
/** 文件夹（含子文件夹）内收藏项总数（原 _countAllItems）。 */
export declare function countAllItems(folder: FolderNode): number;
/** 删除文件夹流程（原 handleDeleteFolder：popconfirm → 删除 → toast）。 */
export declare function deleteFolderFlow(folderId: string, t: T): Promise<void>;
/** 复制文本（原 handleCopy：clipboard API + textarea 兜底）。 */
export declare function copyText(text: string, t: T): Promise<void>;
/**
 * 构建文件夹选择下拉树（移植 star-input-modal 的菜单构建：一级文件夹 +
 * 二级子菜单 + 各级"新建"入口，新建名称上限沿用原版的 10）。
 * @param onSelect - 选中回调（folderId + 展示路径）。
 */
export declare function buildFolderSelectItems(t: T, onSelect: (folderId: string, path: string) => void): DropdownItem[];
export {};
