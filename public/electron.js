const { app, BrowserWindow } = require('electron');

// Check if we're running Electron while developing
// It's never a good idea to run developer tools in public
const isDev = process.mainModule.filename.indexOf('app.asar') === -1 ||
    process.mainModule.filename.indexOf('app') === -1;

function createWindow() {
    const appWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // If we are in dev mode, load the React app where it's run by default
    // Otherwise load the compiled app from the build folder
    appWindow.loadURL(isDev ? 'http://localhost:3000' : '../build/index.html');
    if (isDev) {
        // Open dev tools alongside our running app
        appWindow.webContents.openDevTools();
    }
    appWindow.on('closed', () => appWindow = null);
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // This is taken from their tutorial: https://www.electronjs.org/docs/tutorial/first-app
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // This is taken from their tutorial: https://www.electronjs.org/docs/tutorial/first-app
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
