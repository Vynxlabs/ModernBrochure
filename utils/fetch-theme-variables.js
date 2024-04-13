const fs = require('fs');
const yaml = require('js-yaml')

// read theme colors and fonts from _data/theme.yml
let dataFile = yaml.load(fs.readFileSync('src/_data/theme.yml','utf-8'))
    
/* 
    color_groups get processed differently than other user variables - so
    extract the color_groups and then delete them from the dataFile object so
    they don't get twice processed when we iterate through the dataFile object
*/
let color_groups = dataFile["customColor_groups"]
let primary_color = dataFile["primaryColor_group"]
delete dataFile["custom_color_groups"]
delete dataFile["primary_color_group"]

const configFileLocation = './cloudcannon.config.yml'

// load the cloudcannon config and reset the color_group values
let config = yaml.load(fs.readFileSync(configFileLocation,'utf-8'))
config['_inputs']['color_group']['options']['values'] = []

/* 
    remove any existing color_groups.scss file and create a new one
    easier to overwrite the file entirely each time than figure out
    what changed and update only those parts
*/
const colorsFileLocation = './src/assets/styles/color_groups.scss'
if(fs.existsSync(colorsFileLocation))
    fs.unlinkSync(colorsFileLocation)
fs.writeFileSync(colorsFileLocation, "")

/*
    We have to do a few things to make the user colors usable and show up in the 
    CloudCannon config. 
    
    - We need to define all the variables in the :root element of the CSS (css_string_root)
    - We need to assign background, text and interaction colors to components (css_string_component)
    - We need to assign the background, text and interaction colors to the nav (css_string_nav)
    - We need to assign the background, text and interaction colors to the footer (css_string_footer)
*/
let css_string_root = `:root {\n`
let css_string_component = `.component {\n`
let css_string_nav = `.c-navigation {\n`
let css_string_footer = `.c-footer {\n`
let css_string_utilities = ``
console.log(color_groups)
// css_string_utilities += `.text-primary-textcolor { color: ${primary_color.textColor}; }\n`
// css_string_utilities += `.text-primary-primarycolor { color: ${primary_color.primaryColor}; }\n`
// css_string_utilities += `.text-primary-secondarycolor { color: ${primary_color.secondaryColor}; }\n`
// css_string_utilities += `.text-primary-accentcolor { color: ${primary_color.accentColor}; }\n`
// css_string_utilities += `.bg-primary-backgroundcolor { background-color: ${primary_color.backgroundColor}; }\n`
// css_string_utilities += `.bg-primary-primarycolor { background-color: ${primary_color.primaryColor}; }\n`
// css_string_utilities += `.bg-primary-secondarycolor { background-color: ${primary_color.secondaryColor}; }\n`
// css_string_utilities += `.bg-primary-accentcolor { background-color: ${primary_color.accentColor}; }\n\n`

function generateTailwindUtilityClasses(color_groups) {
    let cssString = ''; // Initialize an empty string to store CSS rules

    // Check if custom color groups exist in the data file
    if (color_groups && Array.isArray(color_groups)) {
        // Iterate over each custom color group
        color_groups.forEach((colorSet, index) => {
            // Generate CSS classes for text color and background color

            //text
            cssString += `.text-${colorSet.name.toLowerCase()}-textcolor { color: ${colorSet.textColor}; }\n`;
            cssString += `.text-${colorSet.name.toLowerCase()}-primarycolor { color: ${colorSet.primaryColor}; }\n`;
            cssString += `.text-${colorSet.name.toLowerCase()}-secondarycolor { color: ${colorSet.secondaryColor}; }\n`;
            cssString += `.text-${colorSet.name.toLowerCase()}-accentcolor { color: ${colorSet.accentColor}; }\n`;

            //background
            cssString += `.bg-${colorSet.name.toLowerCase()}-backgroundcolor { background-color: ${colorSet.backgroundColor}; }\n`;
            cssString += `.bg-${colorSet.name.toLowerCase()}-primarycolor { background-color: ${colorSet.primaryColor}; }\n`;
            cssString += `.bg-${colorSet.name.toLowerCase()}-secondarycolor { background-color: ${colorSet.secondaryColor}; }\n`;
            cssString += `.bg-${colorSet.name.toLowerCase()}-accentcolor { background-color: ${colorSet.accentColor}; }\n`;
            
            //border color
            cssString += `.border-${colorSet.name.toLowerCase()}-backgroundcolor { border-color: ${colorSet.backgroundColor}; }\n`;
            cssString += `.border-${colorSet.name.toLowerCase()}-primarycolor { border-color: ${colorSet.primaryColor}; }\n`;
            cssString += `.border-${colorSet.name.toLowerCase()}-secondarycolor { border-color: ${colorSet.secondaryColor}; }\n`;
            cssString += `.border-${colorSet.name.toLowerCase()}-accentcolor { border-color: ${colorSet.accentColor}; }\n`;


            cssString += '\n'; // Add a newline for readability
        });
    }

    // Write the generated CSS to the output file
    return cssString

    console.log(`🎨 Tailwind utility classes generated and written to ${outputFile}`);
}

css_string_utilities+=generateTailwindUtilityClasses(primary_color)
css_string_utilities+=generateTailwindUtilityClasses(color_groups)

css_string_component += `--main-background-color: #3B3B3D;\n`
css_string_component += `--main-text-color: #F9F9FB;\n`
css_string_component += `--interaction-color: #2566f2;\n`
css_string_component += `background-color: var(--main-background-color);\n`
css_string_component += `color: var(--main-text-color);\n`

css_string_nav += `--main-background-color: #1B1B1D;\n`
css_string_nav += `--main-text-color: #D9D9DC;\n`

css_string_footer += `--main-background-color: #1B1B1D;\n`
css_string_footer += `--main-text-color: #D9D9DC;\n`

/*
    Function to build the CSS rules:
    - str - the css_string to append values to
    - id - the id value of the color_group
*/
let addColorDefinitions = (str, id) => {
    str += `&--${id} {\n`
    str += `--main-background-color: var(--${id}__background);\n`
    str += `--main-text-color: var(--${id}__foreground);\n`
    str += `--interaction-color: var(--${id}__interaction);\n`
    str += `}\n`    
    return str
}

// these are hardcoded default themes so the user always has at least these color_groups
css_string_component += `&--primary{`
css_string_component += `--main-background-color : ${primary_color.background_color};\n`
css_string_component += `--main-text-color : ${primary_color.foreground_color};\n`
css_string_component += `--interaction-color : ${primary_color.interaction_color};\n`
css_string_component += `}\n`

css_string_nav = addColorDefinitions(css_string_nav, 'primary')      
css_string_footer = addColorDefinitions(css_string_footer, 'primary') 

config['_inputs']['color_group']['options']['values'].push({id: 'primary', name: primary_color.name})

/* 
    iterate through all the user defined color_groups and:
    - create CSS variables for them
    - add them into the cloudcannon config as options for the dropdowns
*/
color_groups = color_groups.forEach((color_set, i) => {
    /* 
        generate an id for the user defined color_group to be used in CSS class and variable names
        - replace illegal characters
        - append index to end for auto-increment unique ids
    */
    let id = `${color_set.name.toLowerCase().replace(/[\s|&;$%@'"<>()+,]/g, "_")}${i}`
    let name = color_set.name
    let background = color_set.background_color
    let foreground = color_set.foreground_color
    let interaction = color_set.interaction_color
    
    let obj = { name, id }
    config['_inputs']['color_group']['options']['values'].push(obj)
    
    css_string_root += `--${id}__background : ${background};\n`
    css_string_root += `--${id}__foreground : ${foreground};\n`
    css_string_root += `--${id}__interaction : ${interaction};\n`
    
    css_string_component = addColorDefinitions(css_string_component, id)      
    css_string_nav = addColorDefinitions(css_string_nav, id)      
    css_string_footer = addColorDefinitions(css_string_footer, id)        
})
css_string_root += `}\n\n`
css_string_component += `}\n\n`
css_string_nav += `}\n\n`
css_string_footer += `}\n\n`

// adjust options for card_color_group, nav_color_group and footer_color_group
//config['_inputs']['card_color_group']['options']['values'] = Array.from(config['_inputs']['color_group']['options']['values'])
//config['_inputs']['nav_color_group']['options']['values'] = Array.from(config['_inputs']['color_group']['options']['values'])
//config['_inputs']['footer_color_group']['options']['values'] = Array.from(config['_inputs']['color_group']['options']['values'])

// write the config file with the new options
fs.writeFileSync(configFileLocation, yaml.dump(config))

// write the css strings into a single file
let css_string = `${css_string_root}${css_string_utilities}${css_string_component}${css_string_nav}${css_string_footer}`
fs.appendFileSync(colorsFileLocation, css_string)


// Process all other user defined varaibles, such as fonts
const variableFileLocation = './src/assets/styles/variables.scss'
fs.readFile(variableFileLocation, 'utf-8', (err, cssFile) => {

    if(err){
        console.log(err);
        return;
    }

    let replaced = cssFile;

    // Change the variables to whatever was set in the data file
    Object.entries(dataFile).forEach(([k,v]) => {
        k = k.split("_").join("-");
        const re = new RegExp(`--${k}: .*`, 'g')
        replaced = replaced.replace(re,`--${k}: ${v};`)
    })

    // Write result back to variables.scss
    fs.writeFile(variableFileLocation, replaced, 'utf-8', err => {
        if(err)
            console.log(err);
        
        console.log(`📚 Writing variables to ${variableFileLocation}`)
    });
});