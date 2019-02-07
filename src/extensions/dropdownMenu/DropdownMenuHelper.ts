import * as ReactDom from 'react-dom';

export class DropdownMenuHelper {

    private static readonly dropdownElementId: string = 'dropdown-command-container-element';

    public static clearDropdownMenu(): void {
        const id: string = DropdownMenuHelper.dropdownElementId;
        ReactDom.unmountComponentAtNode(document.getElementById(id));
    }

    public static appendDropdownMenu(parentElement: HTMLElement): HTMLElement {
        const id: string = DropdownMenuHelper.dropdownElementId;

        let dropDownELement: HTMLElement = parentElement.querySelector(`#${id}`) as HTMLElement;
        if (!dropDownELement) {
            dropDownELement = document.createElement('div');
            dropDownELement.setAttribute('id', id);

            parentElement.appendChild(dropDownELement);
        }

        return dropDownELement;
    }
}