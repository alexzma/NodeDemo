const { app, BrowserWindow, Menu, dialog } = require('electron')
const path = require('path')

app.on('ready', async () => {
	Menu.setApplicationMenu(null)
	const win = new BrowserWindow({})
	win.loadFile(path.resolve(__dirname, 'page.html'))
	if (!app.isPackaged) {
		const { default: install } = require('electron-devtools-installer')
		win.webContents.openDevTools()
	}
})
