﻿import { h, Component, Prop, Emit, WuComponent } from '@canyuegongzi/web-core-plus';
import css from './index.scss';
import "../wu-popover";
import "../wu-button";

@Component({
    name: 'wu-plus-popconfirm',
    css: css,
})
export class WuPopconfirm extends WuComponent {
    constructor() {
        super();
    }

    @Prop({ default: '', type: String })
    public content: string;

    @Prop({ default: '', type: String })
    public confirmButtonText: string;

    @Prop({ default: '', type: String })
    public cancelButtonText: string;

    @Prop({ default: 'primary', type: String })
    public confirmButtonType: string;

    @Prop({ default: 'text', type: String })
    public cancelButtonType: string;

    @Prop({ default: '' })
    public icon: any;

    @Prop({ default: '#f90', type: String })
    public iconColor: string;

    @Prop({ default: false, type: Boolean })
    public hideIcon: string;

    @Prop({ default: false, type: Boolean })
    public visible: boolean;

    get displayConfirmButtonText() {
        return this.confirmButtonText;
    }
    get displayCancelButtonText() {
        return this.cancelButtonText;
    }

    @Emit("confirm")
    public confirm() {
        this.visible = false;
    }

    @Emit("cancel")
    public cancel() {
        this.visible = false;
    }

    public override render(_renderProps = {}, _store = {}) {
        return (
            <wu-plus-popover trigger="click" isShow={this.visible}>
                <div class="wu-popconfirm" slot="popover">
                    <p class="wu-popconfirm_main">
                        {
                            !this.hideIcon ? <slot name="icon" slot="icon" /> : null
                        }
                        {this.content}
                    </p>
                    <div class="wu-popconfirm_action">
                        <wu-plus-button
                            size="mini"
                            type={this.cancelButtonType}
                            onClick={() => this.cancel()}>
                            {this.displayCancelButtonText}
                        </wu-plus-button>
                        <wu-plus-button
                            style="margin-left: 10px;"
                            size="mini"
                            type={this.confirmButtonType}
                            onClick={() => this.confirm()}>
                            {this.displayConfirmButtonText}
                        </wu-plus-button>
                    </div>
                </div>
                <div>
                    <slot name="reference" />
                </div>

            </wu-plus-popover>
        );
    }
}
