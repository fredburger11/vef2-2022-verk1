import parser from 'number-parsing';

export function makeHTML(str, vari, max, mean, median, min, stdev, sum, range) {
  const htmlstr = str;
  const htmlvari = vari;
  const htmlmax = max;
  const htmlmean = mean;
  const htmlmedian = median;
  const htmlmin = min;
  const htmlstdev = stdev;
  const htmlsum = sum;
  const htmlrange = range;
  const template = `
        <section>
            Gagnasett:
            ${htmlstr}

        </section>
        <section>
          <table>
            <tbody><tr>
              <th>Frávik</th>
              <th>Hæsta gildið</th>
              <th>Meðaltal</th>
              <th>Miðgildi</th>
              <th>Minnsta gildi</th>
              <th>Staðalfrávik</th>
              <th>Summa</th>
              <th>Svið</th>
            </tr>
            <tr>
              <td tabindex="-1">${htmlvari}</td>
              <td tabindex="-1">${htmlmax}</td>
              <td tabindex="-1">${htmlmean}</td>
              <td tabindex="-1">${htmlmedian}</td>
              <td tabindex="-1">${htmlmin}</td>
              <td tabindex="-1">${htmlstdev}</td>
              <td tabindex="-1">${htmlsum}</td>
              <td tabindex="-1">${htmlrange}</td>
            </tr>
            </tbody></table>
        </section>
        <section>
          <p><a href="index.html">Til baka</a></p>
        </section>`;

  return template;
}

export function makeIndex(entries) {
  let list = '';
  for (const entry of entries) {
    const site = parser(entry);
    const link = `<li><a href="${`${site}.html`}">Gagnasafn: ${site}.txt</a></li>`;
    list += link;
  }
  return `<ul>${list}</ul>`;
}
/**
 * Takes HTML for data and puts it into the body
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
            <div class="wrapper">
            ${data}
            </div>
        </body>
    </html>`;
}
