import webview
import screeninfo

from src.api import API

TITLE = "Pin Screen"
TEMPLATE = "templates/main.html"

if __name__ == "__main__":
    win = None

    monitor = screeninfo.get_monitors()[0]
    width = int(monitor.width / 5)
    height = int(monitor.height / 5) + 60

    api = API(width, height)

    win = webview.create_window(
        title=TITLE,
        url=TEMPLATE,
        frameless=True,
        width=width,
        height=height,
        js_api=api,
    )

    webview.start(debug=True)
