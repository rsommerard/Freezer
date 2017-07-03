const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

let ppapiFlashPath = app.getPath('pepperFlashSystemPlugin')
app.commandLine.appendSwitch('ppapi-flash-path', ppapiFlashPath)

app.on('ready', main);

function main() {
	const mainWindow = new BrowserWindow({
		'width': 1280,
		'height': 720,
		'webPreferences': {
			'plugins': true,
			'node-integration': false
		}
	})

	mainWindow.loadURL('https://www.deezer.com')
}