import webview


class API:
    def __init__(self, width: int, height: int, win_index: int = 0) -> None:
        self.width = width
        self.height = height
        self.win_index = win_index

    def exit(self) -> None:
        webview.windows[self.win_index].destroy()

    def pin(self) -> bool:
        webview.windows[self.win_index].on_top = not webview.windows[
            self.win_index
        ].on_top
        return webview.windows[self.win_index].on_top

    def resize_to(self, width: int, height: int) -> None:
        webview.windows[self.win_index].resize(width, height)

    def resize_to_default(self) -> None:
        self.resize_to(self.width, self.height)
