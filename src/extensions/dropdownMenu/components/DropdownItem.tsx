import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import Styles from './DropdownItem.module.scss';
import { DirectionalHint } from 'office-ui-fabric-react/lib/Callout';

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
                <DefaultButton onClick={this.props.dropdownInfo.onClick} text={this.props.dropdownInfo.title} 
                menuProps={{
                    directionalHint: DirectionalHint.rightTopEdge,
                    
                    shouldFocusOnMount: true,
                items: [{
                    key: 'share',
                    iconProps: {
                      iconName: 'Share'
                    },
                    subMenuProps: {
                      
                      items: [
                        {
                          key: 'sharetoemail',
                          text: 'Share to Email',
                          title: 'Share to Email',
                          secondaryText: 'Share to Email',
                          iconProps: {
                            iconName: 'Mail'
                          },
                          subMenuProps: {
                            items: [
                                {
                                  key: 'sharetoemail',
                                  text: 'Share to Email',
                                  title: 'Share to Email',
                                  secondaryText: 'Share to Email',
                                  iconProps: {
                                    iconName: 'Mail'
                                  }
                                }
                            ]
                          }
                        },
                        {
                          key: 'sharetofacebook',
                          text: 'Share to Facebook',
                          title: 'Share to Facebook',
                          secondaryText: 'Share to Facebook',
                        },
                        {
                          key: 'sharetotwitter',
                          text: 'Share to Twitter',
                          title: 'Share to Twitter',
                          secondaryText: 'Share to Twitter',
                          iconProps: {
                            iconName: 'Share'
                          }
                        }
                      ]
                    },
                    text: 'Sharing',
                    title: 'Sharing',
                    secondaryText: 'Sharing',
                  }]
                }}/>
            </div>
        );
    }
}
