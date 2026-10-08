/** 布局常量（与原扩展 variables.css / TIMELINE_CONFIG 相同取值）。 */
export declare const LAYOUT: {
    /** 轨道上下内边距（--ait-timeline-track-padding）。 */
    readonly TRACK_PADDING: 16;
    /** 正常模式相邻节点最小间距（--timeline-min-gap）。 */
    readonly MIN_GAP: 25;
    /** 紧凑模式默认间距（--timeline-compact-gap）。 */
    readonly COMPACT_GAP: 28;
    /** 提前激活距离：scrollTop >= offsetTop - 120 时激活。 */
    readonly ACTIVATE_AHEAD: 120;
    /** 激活态变更的最小间隔（防抖）。 */
    readonly MIN_ACTIVE_CHANGE_INTERVAL: 120;
    /** tooltip 隐藏延迟。 */
    readonly TOOLTIP_HIDE_DELAY: 100;
    /** 平滑滚动时长。 */
    readonly SCROLL_DURATION: 600;
    /** 点击滚动的顶部偏移。 */
    readonly SCROLL_OFFSET: 30;
    /** 虚拟化渲染的最小缓冲区（VIRTUAL_BUFFER_MIN）。 */
    readonly VIRTUAL_BUFFER_MIN: 100;
};
/**
 * 最小间距双向修正：保持单调递增且相邻至少 gap 像素，整体不越界。
 * @param positions - 期望像素位置（升序输入）。
 * @param minTop - 允许的最小位置。
 * @param maxTop - 允许的最大位置。
 * @param gap - 相邻最小间距。
 * @returns 修正后的位置数组。
 */
export declare function applyMinGap(positions: readonly number[], minTop: number, maxTop: number, gap: number): number[];
/** 几何计算结果：内容高度、缩放与每个节点的归一化定位值（CSS var --n）。 */
export interface TimelineGeometry {
    readonly contentHeight: number;
    readonly compact: boolean;
    readonly dotNs: readonly number[];
}
/**
 * 判断是否应使用紧凑模式：平均空间 < 40px 进入、> 45px 退出（滞后区间防抖）。
 * @param barHeight - 时间轴可视高度。
 * @param count - 节点数。
 * @param currentCompact - 当前是否紧凑。
 * @returns 是否紧凑。
 */
export declare function shouldBeCompact(barHeight: number, count: number, currentCompact: boolean): boolean;
/**
 * 归一化位置 → 轨道像素位置（移植原版 updateTimelineGeometry）。
 * 正常模式：内容高度 = max(可视高度, 2*pad + (N-1)*minGap)，按 visualN 比例摆放并做 minGap 修正；
 * 紧凑模式：均匀分布、间距自适应、整体垂直居中。
 * @param visualNs - 每个节点的归一化位置（0~1，按消息实际位置比例）。
 * @param barHeight - 时间轴可视高度。
 * @param currentCompact - 当前紧凑状态（滞后判定用）。
 * @returns 几何结果。
 */
export declare function computeGeometry(visualNs: readonly number[], barHeight: number, currentCompact: boolean): TimelineGeometry;
/**
 * 按滚动位置计算激活节点索引：最后一个 (offsetTop - ACTIVATE_AHEAD) <= scrollTop 的节点。
 * @param offsetTops - 每个节点在滚动容器内容中的 offsetTop（升序）。
 * @param scrollTop - 滚动容器当前 scrollTop。
 * @returns 激活索引（无节点时 -1）。
 */
export declare function computeActiveIndex(offsetTops: readonly number[], scrollTop: number): number;
/**
 * 计算虚拟化可见索引区间（移植原 updateVirtualRangeAndRender 的二分部分）。
 * @param yPositions - 每个节点在轨道内容中的像素 Y（升序）。
 * @param scrollTop - 轨道当前 scrollTop。
 * @param viewportHeight - 轨道可视高度。
 * @returns [start, end]（end 可能为 start-1 表示区间为空）。
 */
export declare function computeVisibleRange(yPositions: readonly number[], scrollTop: number, viewportHeight: number): {
    start: number;
    end: number;
};
/**
 * easeInOutQuad 缓动（原版 smoothScrollTo 使用）。
 * @param t - 已耗时。@param b - 起始值。@param c - 变化量。@param d - 总时长。
 * @returns 当前值。
 */
export declare function easeInOutQuad(t: number, b: number, c: number, d: number): number;
/**
 * 平滑滚动到目标元素（移植原版 smoothScrollTo：600ms 缓动 + 30px 顶部偏移 +
 * 每帧重算目标位置以应对流式渲染下的 DOM 高度变化 + 结束后最终修正）。
 * @param scrollContainer - 滚动容器。
 * @param targetElement - 目标消息元素。
 */
export declare function smoothScrollTo(scrollContainer: HTMLElement, targetElement: HTMLElement): void;
