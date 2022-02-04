import { describe, expect, it } from '@jest/globals';
import { makeIndex, makeHTML } from '../src/make-html';

describe('html', () => {
  it('creates a index.html string', () => {
    const input = [ "data'\'1.txt", "data'\'2.txt"];

    const parsed = makeIndex(input);

    const output = `<ul><li><a href="1.html">Gagnasafn: 1.txt</a></li><li><a href="2.html">Gagnasafn: 2.txt</a></li></ul>`;

    expect(parsed).toBe(output);
  });

  it('creates the data site as a string', () => {
    const str = "688\n904\n607\n299";
    const vari = "47102.25";
    const max = "904";
    const mean = "624.50";
    const median = "647.50";
    const min = "299";
    const stdev = "217.03";
    const sum = "2498.00";
    const range = "605.00";

    const parsed = makeHTML(str, vari, max, mean, median, min, stdev, sum, range);

    const output = `
        <section>
            Gagnasett: 
            688
904
607
299
            
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
              <td tabindex="-1">47102.25</td>
              <td tabindex="-1">904</td>
              <td tabindex="-1">624.50</td>
              <td tabindex="-1">647.50</td>
              <td tabindex="-1">299</td>
              <td tabindex="-1">217.03</td>
              <td tabindex="-1">2498.00</td>
              <td tabindex="-1">605.00</td>
            </tr>
            </tbody></table>
        </section>
        <section>
          <p><a href="index.html">Til baka</a></p>  
        </section>`

    expect(parsed).toBe(output);
    

  });
  
});