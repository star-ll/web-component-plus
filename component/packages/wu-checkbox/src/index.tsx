import { Component, Emit, h, OnConnected, OnBeforeUpdate, Prop, Inject, WuComponent } from '@wu-component/web-core-plus';
import css from './index.scss';
type UISize = 'medium' | 'small' | 'mini';
import { extractClass } from '@wu-component/common';

@Component({
    name: 'wu-plus-checkbox',
    css: css,
})
export class WuCheckbox extends WuComponent implements OnConnected, OnBeforeUpdate {
    public isGroup = false;

    public override props!: any;

    constructor() {
        super();
    }

    @Inject('groupRef')
    public groupRef: any;

    public override beforeUpdate() {
        if (this.isGroup) {
            this.initProps();
        }
    }

    get newDisabled() {
        return this.groupRef? this.groupRef.disabled: this.disabled;
    }

    get newSize() {
        return this.groupRef? this.groupRef.size: this.size;
    }

    get newValue() {
        return this.groupRef? this.groupRef.value: this.value;
    }

    public initProps() {
        const disabled = this.newDisabled;
        const size = this.newSize;
        const value = this.newValue;
        this.disabled = disabled === 'true' || disabled === true;
        this.size = size || 'mini';
        this.checked = Array.isArray(value) && value.includes(this.label);
    }

    public override connected(shadowRoot: ShadowRoot) {
        if (this.indeterminate) {
            this.setAttribute('aria-controls', this.controls);
        }
        // group 时，根据父级组件初始化值
        if (this.parentNode?.nodeName === 'WU-PLUS-CHECKBOX-GROUP') {
            this.isGroup = true;
            setTimeout(() => {
                this.initProps();
            }, 0);
        }
    }

    // @ts-ignore
    public focus = false;

    @Prop({ default: 'mini', type: String })
    public size: UISize;

    @Prop({ default: false, type: Boolean })
    public disabled: boolean;

    @Prop({ default: '' })
    public value: boolean;

    @Prop({ default: '' })
    public label: string;

    @Prop({ default: false, type: Boolean })
    public indeterminate: boolean;

    @Prop({ default: false, type: Boolean })
    public checked: boolean;

    @Prop({ default: false, type: Boolean })
    public border: boolean;

    @Prop({ default: '', type: String })
    public name: string;

    // 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系
    // @ts-ignore
    @Prop({ default: '', type: String }) public id: string;

    // 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系
    @Prop({ default: '', type: String }) public controls: string;

    public handleChange(ev: any) {
        if (!this.isGroup) {
            this.checked = !this.checked;
            this.change();
        } else {
            this.checked = !this.checked;
            this.checkChange();
        }
    }

    @Emit('change')
    private change() {
        return {
            value: this.checked,
            name: this.name,
            label: this.label,
        };
    }

    @Emit('check')
    private checkChange() {
        (this.parentNode as any).handleChange({
            detail: {
                value: this.checked,
                name: this.name,
                label: this.label,
            },
        });
        return {
            value: this.checked,
            name: this.name,
            label: this.label,
        };
    }

    public onFocus() {
        this.focus = true;
    }

    public onBlur() {
        this.focus = false;
    }

    public override render(_renderProps = {}, _store = {}) {
        return (
            <label
                {...extractClass({}, 'wu-checkbox', {
                    ['wu-checkbox-' + this.newSize]: this.newSize && this.border,
                    'is-disabled': this.newDisabled,
                    'is-border': this.border,
                    'is-checked': this.checked,
                })}
                id={this.id}
            >
                <span
                    class="wu-checkbox_input"
                    {...extractClass({}, 'wu-checkbox_input', {
                        'is-disabled': this.newDisabled,
                        'is-border': this.border,
                        'is-checked': this.checked,
                        'is-indeterminate': this.indeterminate,
                        'is-focus': this.focus,
                    })}
                    tabindex={this.indeterminate ? 0 : false}
                    role={this.indeterminate ? 'checkbox' : false}
                    aria-checked={this.indeterminate ? 'mixed' : false}
                >
                    <span class="wu-checkbox_inner"> </span>
                    <input class="wu-checkbox_original" type="checkbox" aria-hidden={this.indeterminate ? 'true' : 'false'} disabled={this.newDisabled} value={this.label} name={this.name} onChange={this.handleChange.bind(this)} onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} />
                </span>
                <span class="wu-checkbox_label">
                    {this.label ? this.label : null}
                    <slot />
                </span>
            </label>
        );
    }
}
