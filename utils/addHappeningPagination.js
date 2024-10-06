const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

// Array of directories to search for markdown files
const directories = ['./src/pages', './src/happenings'];
const happeningsConfig = yaml.parse(fs.readFileSync('./src/_data/happenings.yml', 'utf8'));
const tags = ['happenings'].concat(happeningsConfig.tags);

// Recursively find all markdown files in a directory
function findMarkdownFiles(dir) {
    let results = [];
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
            results = results.concat(findMarkdownFiles(filePath));
        } else if (file.endsWith('.md')) {
            results.push(filePath);
        }
    });

    return results;
}

// Append pagination to YAML front matter
function appendPaginationToFrontMatter(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const frontMatterMatch = content.match(/^---\n([\s\S]+?)\n---/);

    if (frontMatterMatch) {
        let frontMatter = yaml.parse(frontMatterMatch[1]);

        if (frontMatter.pageLink && frontMatter.pageLink.match(/happenings/i)) {
            frontMatter.pagination = {
                data: 'collections.upcomingHappenings',
                size: 22,
                generatePageOnEmptyData: true,
            };
        } else if (frontMatter.title && frontMatter.title.match(/happenings/i)) {
            frontMatter.pagination = {
                data: 'collections.upcomingHappenings',
                size: 22,
                generatePageOnEmptyData: true,
            };
        } else {
            return false; // Skip if neither pageLink nor title is "blog"
        }

        const updatedFrontMatter = `---\n${yaml.stringify(frontMatter)}---`;
        const updatedContent = content.replace(frontMatterMatch[0], updatedFrontMatter);

        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated: ${filePath}`);
        return true; // Pagination appended, stop further processing
    }

    return false; // No front matter found or pagination not appended
}

// Main script execution
function main() {
    let paginationAppended = false;

    for (const directory of directories) {
        const markdownFiles = findMarkdownFiles(directory);

        for (const filePath of markdownFiles) {
            paginationAppended = appendPaginationToFrontMatter(filePath);
            if (paginationAppended) {
                break; // Stop the loop once pagination is appended to one file
            }
        }

        if (paginationAppended) {
            break; // Stop the outer loop once pagination is appended to one file
        }
    }
}

main();

