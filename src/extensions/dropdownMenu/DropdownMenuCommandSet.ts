import * as React from 'react';
import * as ReactDom from 'react-dom';
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseListViewCommandSet,
  Command,
  IListViewCommandSetListViewUpdatedParameters,
  IListViewCommandSetExecuteEventParameters
} from '@microsoft/sp-listview-extensibility';

import { DropdownMenuHelper } from './DropdownMenuHelper';
import { DropdownMenu, IDropdownMenuProps } from './components/DropdownMenu';

import * as strings from 'DropdownMenuCommandSetStrings';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IDropdownMenuCommandSetProperties {
  // This is an example; replace with your own properties
  sampleTextOne: string;
  sampleTextTwo: string;
}

const LOG_SOURCE: string = 'DropdownMenuCommandSet';

const dropdonwItems = [
  {
    title: 'Command1',
    enabled: true,
    imageUrl: '',
    onClick: ()=>console.log('Command1 is clicked!'),
    commands: [
      {
        title: 'Command1 - 1',
        enabled: true,
        imageUrl: '',
        onClick: ()=>console.log('Command1 - 1 is clicked!')
      },
      {
        title: 'Command1 - 2',
        enabled: true,
        imageUrl: '',
        onClick: ()=>console.log('Command1 - 2 is clicked!'),
        commands: [
          {
            title: 'Command1 - 2 - 1',
            enabled: true,
            imageUrl: '',
            onClick: ()=>console.log('Command1 - 2 - 1 is clicked!')
          },
          {
            title: 'Command1 - 2 - 2',
            enabled: true,
            imageUrl: '',
            onClick: ()=>console.log('Command1 - 2 - 2 is clicked!')
          }
        ]
      }
    ]
  },
  {
    title: 'Command2',
    enabled: false,
    imageUrl: '',
    onClick: ()=>console.log('Command2 is clicked!')
  },
  {
    title: 'Command3',
    enabled: true,
    imageUrl: '',
    onClick: ()=>console.log('Command3 is clicked!'),
    commands: [
      {
        title: 'Command3 - 1',
        enabled: true,
        imageUrl: '',
        onClick: ()=>console.log('Command3 - 1 is clicked!')
      },
      {
        title: 'Command3 - 2',
        enabled: true,
        imageUrl: '',
        onClick: ()=>console.log('Command3 - 2 is clicked!')
      }
    ]
  }
];

export default class DropdownMenuCommandSet extends BaseListViewCommandSet<IDropdownMenuCommandSetProperties> {
  private isDropdownVisible: boolean;

  @override
  public onInit(): Promise<void> {
    this.isDropdownVisible = false;
    Log.info(LOG_SOURCE, 'Initialized DropdownMenuCommandSet');
    return Promise.resolve();
  }

  @override
  public onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void {
    const dropdownCommand: Command = this.tryGetCommand('DROPDOWNCOMMAND');
    if (dropdownCommand) {
      // This command should be hidden unless exactly one row is selected.
      dropdownCommand.visible = event.selectedRows.length >= 0;
    }
  }

  @override
  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {
    switch (event.itemId) {
      case 'DROPDOWNCOMMAND':
        const commandName = this.context.manifest.items[event.itemId].title.default;
        this.showHideDropdown(commandName);
        break;
      default:
        throw new Error('Unknown command');
    }
  }

  private showHideDropdown(elementName: string) {
    const element: HTMLElement = document.querySelector(`button[name="${elementName}"]`) as HTMLElement;
    const commandBar: React.ReactElement<IDropdownMenuProps> = React.createElement(
      DropdownMenu, {element: element, dismiss: this.dismiss.bind(this), elementName: elementName, items: dropdonwItems}
    );
      
    if(!this.isDropdownVisible)
    {
      ReactDom.render(commandBar, DropdownMenuHelper.appendDropdownMenu(document.querySelector(`button[name="${elementName}"]`) as HTMLElement));
      this.isDropdownVisible = !this.isDropdownVisible;
    }
    else
    {
      DropdownMenuHelper.clearDropdownMenu();
      this.isDropdownVisible = !this.isDropdownVisible;
    }
  }

  private dismiss() {
    DropdownMenuHelper.clearDropdownMenu();
    this.isDropdownVisible = false;
  }
}
