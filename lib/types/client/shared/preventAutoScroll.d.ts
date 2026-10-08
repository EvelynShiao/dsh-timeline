/** notifyUserNavigation 的可选参数。 */
export interface NavigationOptions {
    /** 可信跟随时长（默认 USER_WINDOW）。 */
    readonly durationMs?: number;
}
declare class ScrollAnchor {
    private pinning;
    private scrollContainer;
    private savedTop;
    private rafId;
    private startTs;
    private sawGenerating;
    private lastGeneratingTs;
    private userScrollUntil;
    private pendingUserDelta;
    private lastTouchY;
    private trustedNavigationUntil;
    private trustedNavigationId;
    /** 生成态（React 侧经 setGenerating 喂入 chat.running）。 */
    private generating;
    /** pointerdown 时的滚动位置快照（点击发送的「发送前」位置，早于宿主滚底）。 */
    private clickSnapshot;
    private readonly onKeydown;
    private readonly onPointerDown;
    private readonly onUserScrollIntent;
    private readonly loop;
    private listening;
    /** 挂载引用计数：多个槽位实例共存时，最后一个卸载才真正拆监听。 */
    private mounts;
    /** 挂载全局监听（capture 阶段发送捕获 + 位置快照 + 用户滚动意图）。 */
    init(): void;
    destroy(): void;
    /** React 侧喂入生成态（chat.running）。 */
    setGenerating(generating: boolean): void;
    /** 发送意图（InputState.phase 进入提交态时由 React 侧调用，对应原 _onClick）。 */
    notifySendIntent(): void;
    /**
     * 发送已提交（草稿被 COMMIT 清空时由 React 侧调用）。
     * 覆盖点击发送按钮发送普通消息：该路径不产生 Enter keydown，
     * phase 也恒为 plain，草稿清空是唯一可观测的稳定信号。
     * 通知到达时宿主可能已滚底，故优先用 pointerdown 快照里的「发送前」位置。
     */
    notifySendCommitted(): void;
    /**
     * 插件内主动导航（时间轴节点、问题列表等）可大幅改变 scrollTop，
     * 不适用 USER_STEP_MAX 的用户手势阈值。
     * @param options - 可信跟随时长。
     * @returns navigation id，供 settleUserNavigation 校验。
     */
    notifyUserNavigation(options?: NavigationOptions): number | undefined;
    /**
     * 插件内导航落点后，将当前位置固化为新的阅读锚点。
     * @param options - notifyUserNavigation 返回的 id（不匹配则忽略）。
     */
    settleUserNavigation(options?: {
        readonly id?: number;
    }): void;
    /** 设置开关关闭时立即解除当前锚定（原 loadSetting 的 onChanged 分支）。 */
    stopPin(): void;
    private maybeStartPin;
    /** 以给定阅读位置为锚点启动（或重置）锚定循环。 */
    private startPinAt;
    /** 会话滚动容器（DSH 稳定选择器），回退到 window。 */
    private findScrollContainer;
    private readTop;
    /** 容器在手势方向上是否还有可滚动空间（deltaY > 0 向下）。 */
    private canScrollInDirection;
    private measure;
    private setTop;
}
/** 模块单例（原 window.__aitPreventAutoScroll 的 DSH 形态）。 */
export declare const preventAutoScroll: ScrollAnchor;
/**
 * 挂载 hook：composer 槽位组件调用。
 * - 挂载/卸载全局监听；
 * - 喂入生成态（chat.running）；
 * - 监听 InputState.phase 跃迁到提交态触发锚定（斜杠命令发送路径）；
 * - 监听草稿从非空 COMMIT 清空触发锚定（普通消息发送路径，含点击发送按钮）；
 * - 开关关闭时立即解除锚定。
 * @param running - 当前会话 chat.running。
 * @param phase - 当前 InputState.phase。
 * @param draft - 当前 InputState.draft。
 */
export declare function usePreventAutoScroll(running: boolean, phase: string, draft: string): void;
export {};
