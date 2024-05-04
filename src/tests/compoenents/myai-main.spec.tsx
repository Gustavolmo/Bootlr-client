import { TestHelper } from "../test-helper/test-helper";

const testHelper = new TestHelper('myai-main');

describe('MAKING A SEARCH', () => {
  it('renders correctly', async () => {
    const page = await testHelper.createPage()
    const myaiSearchElement = page.root.shadowRoot.querySelector('myai-search')
    const titleContainer = myaiSearchElement.querySelector('section > header > h2')
    const subtitleContainer = myaiSearchElement.querySelector('section > header > p')

    expect(titleContainer.textContent).toBe('Bootlr')
    expect(subtitleContainer.textContent).toBe('The shopping assistant')
  })
})