export function makeHTML(entry) {
    const html = entry;
    const template = `
        <section>
            ${html}
            <p>Skrifað: DATE</p>
        </section>`;

    return template;
}
/**
 * Takes HTML for data bla blab bla
 */
export function dataTemplate(path, data) {
    return `
    <!doctype html>
    <html>
        <head>
            <title>${path}</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            ${data}    
        </body>
    </html>`;
}