declare interface IDropdownMenuCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'DropdownMenuCommandSetStrings' {
  const strings: IDropdownMenuCommandSetStrings;
  export = strings;
}
