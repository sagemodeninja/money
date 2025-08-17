import { component } from "@/decorators";
import { FilePicker } from "@/components/forms/controls/file-picker";
import { OpenDialogProperties } from '@/utilities/file-handler'

@component("directory-picker")
export class DirectoryPicker extends FilePicker {
    protected override properties(): OpenDialogProperties {
       return ["openDirectory", "createDirectory"];
    }
}
