import { OnConnected, WuComponent } from '@wu-component/web-core-plus';
import '@wu-component/wu-checkbox';
import { Node } from './model/Node';
export declare class WuTreeV2 extends WuComponent implements OnConnected {
    constructor();
    renderCaret: () => any;
    isTree: any;
    childNodeRendered: any;
    draggable: any;
    iconclass: any;
    showCheckbox: boolean;
    renderAfterExpand: boolean;
    expandOnClickNode: boolean;
    checkDescendants: boolean;
    autoExpandParent: boolean;
    highlightCurrent: boolean;
    checkStrictly: boolean;
    defaultExpandAll: boolean;
    checkOnClickNode: boolean;
    defaultCheckedKeys: any[];
    allowDrag: any;
    allowDrop: any;
    lazy: any;
    load: any;
    filterNodeMethod: any;
    renderContent: any;
    defaultExpandedKeys: any[];
    currentNodeKey: string;
    options: {
        children: string;
        label: string;
        disabled: string;
    };
    indent: number;
    data: any[];
    emptyText: string;
    nodeKey: string;
    treeStore: any;
    currentNode: any;
    treeItems: null;
    checkboxItems: [];
    dragState: {
        showDropIndicator: false;
        draggingNode: null;
        dropNode: null;
        allowDrop: true;
        dropType: "";
    };
    /**
     * 序列化数据
     * @param val
     * @private
     */
    private formatData;
    setData(data: any): void;
    dataChange(val: any): void;
    private init;
    get treeRoot(): any;
    connected(shadowRoot: ShadowRoot): void;
    checkChange(node: any): {
        data: any;
        checkedNodes: any;
        checkedKeys: any;
        halfCheckedNodes: any;
        halfCheckedKeys: any;
    };
    moveChange(params: any): {};
    get childrenNode(): Node[];
    set childrenNode(value: Node[]);
    get treeItemArray(): any;
    get isEmpty(): any;
    filter(value: any): void;
    getNodeKey(node: any): any;
    getNodePath(data: any): any[];
    getCheckedNodes(leafOnly: any, includeHalfChecked: any): any;
    getCheckedKeys(leafOnly: any): any;
    getCurrentNode(): any;
    getCurrentKey(): any;
    setCheckedNodes(nodes: any, leafOnly: any): void;
    setCheckedKeys(keys: any, leafOnly: any): void;
    setChecked(data: any, checked: any, deep: any): void;
    getHalfCheckedNodes(): any;
    getHalfCheckedKeys(): any;
    setCurrentNode(node: any): void;
    setCurrentKey(key: any): void;
    getNode(data: any): any;
    removeNode(data: any): void;
    appendNode(data: any, parentNode: any): void;
    insertNodeBefore(data: any, refNode: any): void;
    insertNodeAfter(data: any, refNode: any): void;
    handleNodeExpand(nodeData: any, node: any, instance: any): void;
    updateKeyChildren(key: any, data: any): void;
    initTabIndex(): void;
    handleKeydown(ev: any): void;
    treeNodeCurrentChange(): {
        currentNode: any;
        data: any;
    };
    treeNodeNodeClick(node: Node): {
        node: Node;
    };
    treeNodeNodeCollapse(node: Node): {
        node: Node;
    };
    treeNodeNodeExpand(node: Node): {
        node: Node;
    };
    treeNodeNodeCheck(node: Node): {
        data: any[];
        checkedNodes: any;
        checkedKeys: any;
        halfCheckedNodes: any;
        halfCheckedKeys: any;
    };
    /****************************************树节点***********************************************/
    handleClick(e: MouseEvent, node: Node): void;
    handleDragStart(e: MouseEvent): void;
    handleDragOver(e: MouseEvent): void;
    handleDragEnd(e: MouseEvent): void;
    handleDrop(e: MouseEvent): void;
    handleExpandIconClick(e: MouseEvent, node: Node): void;
    handleCheckChange(node: Node, value: any, e: MouseEvent): void;
    renderNodeContent(node: Node): any;
    private renderTreeNode;
    render(_renderProps?: {}, _store?: {}): any;
}
