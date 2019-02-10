import * as React from 'react';
import Styles from './DropdownMenu.module.scss';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export interface IDropdownMenuProps {
    element: HTMLElement;
    dismiss: () => void;
    elementName: string;
    items: any;
}

export interface IDropdownMenuState {
    visible: boolean
}

export class DropdownMenu extends React.Component<IDropdownMenuProps, IDropdownMenuState> {
    public constructor(props: IDropdownMenuProps, state: IDropdownMenuState) {
        super(props, state);
        this._onDismiss = this._onDismiss.bind(this);
        this._onShowMenuClicked = this._onShowMenuClicked.bind(this);
        this.state = { visible: true }
    }

    public render(): JSX.Element {
        return (
            <div>
                { this.state.visible ? (
                    <Callout
                        
                        onDismiss={this._onDismiss}
                        target={`button[name="${this.props.elementName}"]`}
                        directionalHint={DirectionalHint.bottomLeftEdge}
                        coverTarget={false}
                        isBeakVisible={false}
                        gapSpace={0}
                    >
                        <div>
                            <div>
                                <DefaultButton onClick={this._onShowMenuClicked} text="Click to dismiss" />
                            </div>
                            <div> 
                                <DefaultButton onClick={this._onShowMenuClicked} text="Click to dismiss" />
                            </div>
                        </div>
                    </Callout>
                ) : null}
            </div>
            
        );
    }

    private _onDismiss(): void {
        this.setState({ visible: false });
        this.props.dismiss();
      }
    
      private _onShowMenuClicked(): void {
        this.setState({
          visible: !this.state.visible
        });
        this.props.dismiss();
      }
    

}