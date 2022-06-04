import { h, Component, Inject, OnConnected, WuComponent } from '@canyuegongzi/web-core-plus';

@Component({
    name: 'wu-plus-inject-child2',
})
export class WuInjectChild2 extends WuComponent implements OnConnected {
    @Inject('parentDescTitle')
    public injectionName;

    public override connected(shadowRoot: ShadowRoot) {
        console.log(this.injectionName);
    }

    public override render(_renderProps = {}, _store = {}) {
        return (
            <div style={{ width: '400px', height: '48px', textAlign: 'center' }}>
                二级子组件数据注入{this.injectionName?.parentDescTitle}
                <slot />
            </div>
        );
    }
}
