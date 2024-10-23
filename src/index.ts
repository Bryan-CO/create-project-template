import inquirer from 'inquirer'
import fs from 'fs'
import path from 'path'

interface BackVariants {
    name: string;
    display: string;
}

interface BackArchitecture {
    name: string;
    display: string;
    variants: BackVariants[];
}

const backOptions : BackArchitecture[] = [
    {
        name: 'clean',
        display: 'Clean Architecture',
        variants: [
            {
                name: 'clean-node',
                display: 'Express'
            },
            {
                name: 'clean-nest',
                display: 'NestJS'
            }
        ]
    },
    {
        name: 'mvc',
        display: 'MVC',
        variants: [
            {
                name: 'mvc-node',
                display: 'Express'
            },
            {
                name: 'mvc-nest',
                display: 'NestJS'
            }
        ]
    }
]
 
  // Función recursiva para navegar por las opciones
  async function navigateOptions() {
    const result = await inquirer.prompt([
      {
        type: 'list',
        name: 'typeProject',
        message: 'Seleccione el tipo de proyecto',
        choices: [{
            name: 'Backend',
            value: 'backend'
        }, {
            name: 'Frontend',
            value: 'frontend'
        }],
        default: 'Backend'
      },
      {
        type: 'list',
        name: 'architecture',
        message: 'Seleccione la arquitectura',
        choices: backOptions.map(option => ({
            name: option.display,
            value: option.name
        })),
        when: (response: any) => response['typeProject'] === 'backend'
      },
      {
        type: 'list',
        name: 'variant',
        message: 'Seleccione la variante',
        choices: (prevChoise) => {
            const arch = backOptions.find(back => back.name === prevChoise.architecture) 
            return arch?.variants.map(variant => ({
                name: variant.display,
                value: variant.name
            }))
        },
        when: (response: any) => response['typeProject'] === 'backend'
      }
    ]);

    const src = createPath(result.typeProject, result.variant)
    copyDir(src, process.cwd())
    console.log('Run npm i (or npm i --force) and start!')
  }
  
  // Inicia la navegación desde la raíz
  navigateOptions();
  function createPath(typeProject: string,...paths: string[]): string{
    const folderSelected = `template-${typeProject === 'frontend' ? 'react' : paths.join('-')}` // POR EL MOMENTO, PQ SOLO HAY UN TEMPLATE DE FRONTEND
    const pathTemplates = path.join(__dirname, '..', 'packages')
    const srcFolder = path.join(pathTemplates,typeProject, folderSelected)
    return srcFolder
  }

  function copyDir(srcDir: string, destDir: string) {
    fs.mkdirSync(destDir, { recursive: true })
    fs.readdirSync(srcDir).forEach(file => {
        const srcFile = path.resolve(srcDir, file)
        const destFile = path.resolve(destDir, renameFiles[file] ?? file)
        const stat = fs.statSync(srcFile)
        if (stat.isDirectory()) {
            copyDir(srcFile, destFile)
        } else {
            !ignoreFiles.includes(file) && fs.copyFileSync(srcFile, destFile)
        }
    })
  }

  const renameFiles: Record<string, string> = {
    _gitignore: '.gitignore'
  }

  const ignoreFiles: string[] = [
    '.gitkeep'
  ]