import { OnConnected, WuComponent } from '@wu-component/web-core-plus';
import "@wu-component/wu-code-monaco-editor";
import "@wu-component/wu-code-sandbox";
import "@wu-component/wu-alert";
import type { WuCodeMonacoEditor } from "@wu-component/wu-code-monaco-editor/types";
import type { WuMonacoEditorPreview } from "@wu-component/wu-code-sandbox/types";
interface NoticeItem {
    close: boolean;
    text: string;
    id: string;
}
interface NoticeContentItem extends NoticeItem {
    show: boolean;
}
export declare class WuCodePlayground extends WuComponent implements OnConnected {
    constructor();
    isLoading: boolean;
    noticeList: NoticeContentItem[];
    editorContainer: WuCodeMonacoEditor;
    previewContainer: WuMonacoEditorPreview;
    initialEvalSuccess: boolean;
    connected(shadowRoot: ShadowRoot): void;
    /**
     * 开始执行代码
     */
    runCode(): Promise<void>;
    /**
     * 加载依赖
     */
    loadDependencies(): void;
    /**
     * 加载通告
     * @private
     */
    private fetchNoticeList;
    getIp(): void;
    private sandboxSuccess;
    /**
     * 消息关闭
     * @param item
     * @private
     */
    private noticeClose;
    renderLoading(): any;
    render(_renderProps?: {}, _store?: {}): any;
}
export {};
