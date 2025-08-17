export enum AppIpcMessages {
    M_COMMAND = "app_ipc_main_command",
    R_COMMAND = "app_ipc_renderer_command",
}

export enum FileIpcMessages {
    GET_SYSTEM_PATH = "file_ipc_get_system_path",
    WRITE_FILE = "file_ipc_write_file",
    SHOW_OPEN_DIALOG = "file_ipc_show_open_dialog",
}
