/**
 * 选区是否包含「公式」（且公式提取至少有一种被启用）。
 * 同步、低成本：只在追问按钮显示时调用一次（原 hasRichContent）。
 * @param range - 已保存的选区 Range。
 * @returns 是否需要显示复制按钮。
 */
export declare function hasRichContent(range: Range | null): boolean;
/**
 * 构建剪贴板 payload（原 buildPayload）。
 * @param range - 选区 Range。
 * @returns html 与 plain 两份内容。
 */
export declare function buildPayload(range: Range | null): {
    html: string;
    plain: string;
};
/**
 * 复制选区（必须在用户手势的同步路径上调用以确保 user gesture）。
 * @param range - 选区 Range。
 * @returns 是否复制成功。
 */
export declare function copyRange(range: Range | null): Promise<boolean>;
