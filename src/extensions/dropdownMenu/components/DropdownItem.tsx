import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import Styles from './DropdownItem.module.scss';

export interface IDropdownItemProps { //better refactor all interfaces into one file
    dropdownInfo: any;
}

export class DropdownItem extends React.Component<IDropdownItemProps> {
    constructor(props){
        super(props);
    }

    public render() {
        const childCommands = this.props.dropdownInfo.commands;
        return (
            <div>
                <DefaultButton onClick={this.props.dropdownInfo.onClick} text={this.props.dropdownInfo.title} /> <Icon iconName="FlickLeft" className={childCommands && childCommands.length > 0 ? Styles.showNextLevelArrow : Styles.hideNextLevelArrow}/>
            </div>
        );
    }
}
