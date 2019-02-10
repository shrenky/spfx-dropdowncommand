import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export interface IDropdownItemProps { //better refactor all interfaces into one file
    dropdownInfo: any;
}

export class DropdownItem extends React.Component<IDropdownItemProps> {
    constructor(props){
        super(props);
    }

    public render() {
        return (
            <div>
                <DefaultButton onClick={this.props.dropdownInfo.onClick} text={this.props.dropdownInfo.title} />
            </div>
        );
    }
}
