/**
 * 收藏列表标题栏：与侧栏脚弹窗头部同一套交互。
 * 标题区（三角 + 「文件夹」）点击折叠列表；帮助 / 设置 / 新建文件夹。
 */
import type { TranslateNS } from '@deepseek-ai/dsh-client-ui-slots';
import type { NS } from '../locales.ts';
/** 标题栏 props。 */
export interface StarredFolderHeaderProps {
    readonly onToggleCollapse: () => void;
    readonly t: TranslateNS<typeof NS>;
}
/**
 * 收藏列表标题栏。
 * @param props - 折叠回调与词典。
 * @returns 标题区 + 新建按钮。
 */
export declare function StarredFolderHeader({ onToggleCollapse, t }: StarredFolderHeaderProps): import("react").JSX.Element;
