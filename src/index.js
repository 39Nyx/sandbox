import './assets/style.css'

import template from './assets/template.html?raw'

const app = document.getElementById('app')

const sandbox = document.createElement('iframe')
sandbox.classList.add('sandbox')

sandbox.setAttribute(
    'sandbox',
    [
        'allow-forms',
        'allow-modals',
        'allow-pointer-lock',
        'allow-popups',
        'allow-scripts',
        'allow-top-navigation-by-user-activation',
    ].join(' '),
)

const importMap = {}

const headHTML = ''

const placeholderHTML = ''

const sandboxSrc = template
    .replace(/<!--IMPORT_MAP-->/, JSON.stringify(importMap))
    .replace(
        /<!-- PREVIEW-OPTIONS-HEAD-HTML -->/,
        headHTML || '',
    )
    .replace(
        /<!--PREVIEW-OPTIONS-PLACEHOLDER-HTML-->/,
        placeholderHTML || '',
    )

sandbox.srcdoc = sandboxSrc

app.appendChild(sandbox)