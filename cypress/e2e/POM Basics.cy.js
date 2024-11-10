import HomePage from "./POM Basics";

describe('Testing Product store ', () => {
    it('----', () => {
        const homePage = new HomePage()
        homePage.open()
        homePage.login('test','test')
        homePage.ProductAdd()

    })
})