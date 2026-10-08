/** 设置面板 Tab（原 panelModal tabs 目录中迁移到 DSH 的部分 + about）。 */
export type PanelTab = 'about' | 'timeline' | 'starred' | 'prompt' | 'smartInputBox' | 'formula' | 'export' | 'dataSync';
/** Tab 内深链子目标（原 TimelineSettingsTab.showAICompleteReminderModal 直开子弹窗）。 */
export type PanelSub = 'aiCompleteReminder';
/** 打开请求（seq 递增使重复打开同一 tab 也可被订阅方感知）。 */
export interface PanelRequest {
    readonly tab: PanelTab;
    /** 打开后自动进入的子弹窗。 */
    readonly sub?: PanelSub;
    readonly seq: number;
}
/** 设置面板命令式 API（原 window.panelModal 的最小面）。 */
export declare const panelModal: {
    subscribe: (listener: () => void) => (() => void);
    get: () => PanelRequest | null;
    show(tab: PanelTab, sub?: PanelSub): void;
    /** 面板宿主消费请求后清空。 */
    consume(): void;
};
