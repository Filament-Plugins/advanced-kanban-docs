# Advanced Kanban Docs – Setup

## Check versions
```bash
node -v    # ^v22
npm -v     # 10.9.2

```
## Install NVM
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc   # or source ~/.zshrc
```

## Set Node version
```
nvm install v22.16.0
nvm use v22.16.0
```

## Clone project
```
git clone git@github.com:AsmitNepali/advanced-kanban-docs.git
cd advanced-kanban-docs
git checkout main
git pull origin main
```

## Install dependencies
npm install

## Run development server
```
npm run docs:dev
Visit http://localhost:5173/
```

## Build for production
```
npm run docs:build
```

## Preview build
```
npm run docs:preview
```
