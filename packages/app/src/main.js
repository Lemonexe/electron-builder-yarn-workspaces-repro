const { app, BrowserWindow } = require('electron');

const isOdd = require('is-odd');
console.log("Let's see if these numbers are odd:")
console.log(1, isOdd(1));
console.log(2, isOdd(2));

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('src/index.html')
}

app.whenReady().then(() => {
  createWindow()

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
