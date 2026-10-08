/**
 * 显示完成提醒 toast（原 AICompleteReminderToast.show）。
 * @param message - 本地化文案（原 timelineAICompleteNotLatestToast）。
 */
export declare function showAiCompleteToast(message: string): void;
/** 播放完成提示音（原 playAICompleteSound，volume 0.45）。 */
export declare function playAiCompleteSound(): void;
/** 停止提示音（原 timeline destroy 中的 aiCompleteAudio.pause()）。 */
export declare function stopAiCompleteSound(): void;
/** 移除锚点（原 removeAnchor，时间轴卸载时调用）。 */
export declare function removeAiCompleteAnchor(): void;
