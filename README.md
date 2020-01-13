# Node API Skeleton
This is a simple API skeleton for a Node.js/MySQL-based applications.

# Recommended Applications
* Get [Postman](https://www.getpostman.com/downloads/).
    * Available on all platforms. Postman allows you to test your API endpoints thoroughly and without a frontend application or a web browser.
* Get [Visual Studio Code](https://code.visualstudio.com).
    * Available on Windows, Mac and Linux, VS Code is a powerful text editor with an integrated terminal and a ton of features for working with Node.js-based servers. Most Node.js developers swear by it, myself and the original creator of this codebase included.
    * [Atom](https://atom.io) by GitHub may also work, but is slow and has less features out of the box. Both are owned by Microsoft, anyhow, so use Microsoft's flagship product instead.

# Dependencies
* Git
* MySQL
    * MariaDB is a version of MySQL maintained by the original creator with more features.
* Node.js with NPM

## Windows
First, we install the [chocolatey](https://chocolatey.org) package manager. This allows you to install dependencies in a similar fashion to *apt-get* on Linux.

To install it, open PowerShell as Administrator, (PLEASE DON'T USE CMD UNDER ANY CIRCUMSTANCE) and then type:
```powershell
Set-ExecutionPolicy AllSigned
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Sometimes it may ask you for permissions again. Just type 'A' and press enter.

Run these in Powershell as Administrator:
```powershell
choco install nodejs-lts mariadb git
```

Then **restart your computer**.

## macOS
First, install the [brew](https://brew.sh) package manager. This allows you to install packages in a dependencies fashion to *apt-get* on Linux.

To install it, just paste this into your Terminal:
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

After the installation is done:

```bash
brew install mariadb node
# This command launches MySQL
brew services start mariadb
```

## Debian-based Linux (Debian, Ubuntu, Pop!_OS, etc.)
In your terminal:

```bash
sudo apt-get update
sudo apt-get install nodejs npm mariadb-client mariadb-server git
```

That's it!

On some versions of Linux, if the command `node` doesn't work, you may need to do this:

```bash
ln -s /usr/bin/nodejs /usr/bin/node
```

## Other Linux
Chances are, if you're using another Linux, you know what you're doing and can probably install these dependencies on your own. :)

# Usage
These steps are applicable for all platforms, including Windows.

Inside your Terminal or Powershell Admin Instance:
## One-time steps
```bash
# Clone the repository
git clone https://github.com/donn/nodejs-api-skeleton
# Go inside
cd nodejs-api-skeleton
# Install package dependencies
npm install
# Setup Database
cat Database.sql | sudo mysql -u root # Linux/macOS
cat Database.sql | mysql -u root # Windows
```
## From now on
```bash
npm run start
```

You can then visit http://localhost:3000/myroute/hw in your web browser or GET it via Postman to verify it works.

## Connecting to the database via terminal

```bash
mysql -u root -p
```

Then write your password (which is 'password' by default.)

# License, Acknowledgment
MIT License, see 'LICENSE'.

Original code Copyright (c) 2019 Ali Khaled

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

